
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count?: number;
  level: string;
  subpaths?: Subpath[];
  icon?: string;
}

interface Path extends Subpath {
  count: number;
}

interface Question {
  id: string;
  question: string;
  answer: any;
  level: string;
}

interface PathResponse {
  path: Path | null;
  loading: boolean;
  error: Error | null;
  isSubpath: boolean;
  parentPath: Path | null;
}

interface QuestionsResponse {
  questions: Question[];
  loading: boolean;
  error: Error | null;
}

// Function to load paths data
const loadPathsData = async () => {
  const pathsResponse = await import("../data/paths/paths.json");
  // Ensure each path has a count property
  return pathsResponse.default.map((path: any) => ({
    ...path,
    count: path.subpaths?.length || 0
  }));
};

// Function to load questions for a specific path
const loadPathQuestions = async (pathId: string) => {
  try {
    // Try loading from specific language folders
    const folders = [
      "c-sharp",
      "data-structures-and-algorithms",
      "example",
      "golang",
      "html",
      "js",
      "react",
      "ts",
      "job-roles",
      "message-broker",
      "uml",
      "azure",
      "db",
    ];

    for (const folder of folders) {
      try {
        const response = await import(
          `../data/questions/${folder}/${pathId}.json`
        );
        return response.default;
      } catch (err) {
        continue;
      }
    }

    // If not found in folders, try direct path
    const response = await import(`../data/questions/${pathId}.json`);
    return response.default;
  } catch (err) {
    console.log(`No specific question file for ${pathId}`);
    return [];
  }
};

export const useData = () => {
  const { data: paths = [], isLoading, error } = useQuery({
    queryKey: ["paths"],
    queryFn: loadPathsData,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes (formerly cacheTime)
  });

  return { paths, loading: isLoading, error };
};

export const usePath = (pathId: string | undefined): PathResponse => {
  const { paths, loading, error } = useData();
  const [pathData, setPathData] = useState<PathResponse>({
    path: null,
    loading: true,
    error: null,
    isSubpath: false,
    parentPath: null,
  });

  // Recursive function to find a subpath
  const findSubpath = (
    paths: Path[],
    pathId: string
  ): { subpath: Subpath | null; parent: Path | null } => {
    for (const parent of paths) {
      if (parent.subpaths) {
        for (const subpath of parent.subpaths) {
          if (subpath.id === pathId) return { subpath: { ...subpath, count: subpath.count || 0 }, parent };
          if (subpath.subpaths) {
            const found = findSubpath(paths as Path[], pathId);
            if (found.subpath) return found;
          }
        }
      }
    }
    return { subpath: null, parent: null };
  };

  useEffect(() => {
    if (!loading && !error && pathId) {
      // First check if it's a main path
      let foundPath = paths.find((p) => p.id === pathId) || null;

      if (foundPath) {
        // Ensure count is set
        setPathData({
          path: foundPath as Path,
          loading: false,
          error: null,
          isSubpath: false,
          parentPath: null,
        });
        return;
      }

      // If not found, check in subpaths
      const { subpath, parent } = findSubpath(paths as Path[], pathId);
      if (subpath) {
        setPathData({
          path: { ...subpath, count: subpath.count || 0 } as Path,
          loading: false,
          error: null,
          isSubpath: true,
          parentPath: parent,
        });
        return;
      }

      setPathData({
        path: null,
        loading: false,
        error: new Error("Path not found"),
        isSubpath: false,
        parentPath: null,
      });
    }
  }, [paths, pathId, loading, error]);

  return pathData;
};

export const usePathQuestions = (pathId: string | undefined): QuestionsResponse => {
  const {
    data: questions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["questions", pathId],
    queryFn: () => (pathId ? loadPathQuestions(pathId) : []),
    enabled: !!pathId, // Only fetch when pathId is available
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes (formerly cacheTime)
  });

  return {
    questions: questions || [],
    loading: isLoading,
    error: error as Error | null,
  };
};

// Function to get questions for a specific path (used by SearchDialog)
export const getQuestionsForPath = async (pathId: string): Promise<Question[]> => {
  try {
    return await loadPathQuestions(pathId);
  } catch {
    return [];
  }
};

// Custom hook to store all questions data (for search functionality)
export const useAllQuestions = () => {
  const [allQuestions, setAllQuestions] = useState<Record<string, Question[]>>({});
  const [loading, setLoading] = useState(true);
  const { paths } = useData();

  useEffect(() => {
    const loadAllQuestions = async () => {
      if (!paths || paths.length === 0) return;
      
      const questions: Record<string, Question[]> = {};
      
      // A function to recursively collect all path IDs
      const collectPathIds = (items: any[]): string[] => {
        let ids: string[] = [];
        for (const item of items) {
          ids.push(item.id);
          if (item.subpaths && item.subpaths.length > 0) {
            ids = [...ids, ...collectPathIds(item.subpaths)];
          }
        }
        return ids;
      };
      
      const allPathIds = collectPathIds(paths);
      
      for (const pathId of allPathIds) {
        try {
          const pathQuestions = await loadPathQuestions(pathId);
          if (pathQuestions && pathQuestions.length > 0) {
            questions[pathId] = pathQuestions;
          }
        } catch (err) {
          // Skip if questions can't be loaded for this path
        }
      }
      
      setAllQuestions(questions);
      setLoading(false);
    };
    
    loadAllQuestions();
  }, [paths]);
  
  return { questions: allQuestions, loading };
};

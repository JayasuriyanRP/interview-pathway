
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
  icon?: string;
}

interface Path extends Subpath {}

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
  return pathsResponse.default;
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
    cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
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
          if (subpath.id === pathId) return { subpath, parent };
          if (subpath.subpaths) {
            const found = findSubpath(parent.subpaths, pathId);
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
        setPathData({
          path: foundPath,
          loading: false,
          error: null,
          isSubpath: false,
          parentPath: null,
        });
        return;
      }

      // If not found, check in subpaths
      const { subpath, parent } = findSubpath(paths, pathId);
      if (subpath) {
        setPathData({
          path: subpath,
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
    cacheTime: 1000 * 60 * 30, // Keep in cache for 30 minutes
  });

  return {
    questions: questions || [],
    loading: isLoading,
    error: error as Error | null,
  };
};

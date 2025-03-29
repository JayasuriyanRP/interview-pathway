
import { useEffect, useState } from "react";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
  icon: string;
}

interface Path extends Subpath {
}

interface Question {
  id: string;
  question: string;
  answer: any;
}

export const useData = () => {
  const [paths, setPaths] = useState<Path[]>([]);
  const [questions, setQuestions] = useState<Record<string, Question[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Load paths data
        const pathsResponse = await import("../data/paths.json");
        setPaths(pathsResponse.default as Path[]);

        // Initialize questions object
        const questionsData: Record<string, Question[]> = {};

        // Load main questions file for backward compatibility
        try {
          const mainQuestionsResponse = await import("../data/questions.json");
          Object.assign(questionsData, mainQuestionsResponse.default);
        } catch (err) {
          console.log("No main questions.json file found, using per-path files");
        }

        // Function to load per-path question files
        const loadPathQuestions = async (pathId: string) => {
          try {
            // First try direct path
            const response = await import(`../data/questions/${pathId}.json`);
            questionsData[pathId] = response.default;
          } catch (err) {
            // Next try nested folder structure
            try {
              // Try to find files in specific language folders (e.g., c-sharp, golang, js, ts, react)
              const folders = ['c-sharp', 'golang', 'js', 'ts', 'react'];
              let loaded = false;
              
              for (const folder of folders) {
                try {
                  const response = await import(`../data/questions/${folder}/${pathId}.json`);
                  questionsData[pathId] = response.default;
                  loaded = true;
                  break; // Exit the loop if we found the file
                } catch (nestedErr) {
                  // Continue to next folder
                }
              }
              
              if (!loaded) {
                console.log(`No specific question file for ${pathId} in nested folders`);
              }
            } catch (nestedErr) {
              console.log(`No specific question file for ${pathId}`);
            }
          }
        };

        // Recursively process subpaths and load their questions
        const processSubpaths = async (subpaths: Subpath[]) => {
          for (const subpath of subpaths) {
            await loadPathQuestions(subpath.id);
            if (subpath.subpaths) {
              await processSubpaths(subpath.subpaths);
            }
          }
        };

        // Load questions for each path and its subpaths
        for (const path of pathsResponse.default as Path[]) {
          await loadPathQuestions(path.id);
          if (path.subpaths) {
            await processSubpaths(path.subpaths);
          }
        }

        setQuestions(questionsData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { paths, questions, loading, error };
};

export const usePath = (pathId: string | undefined) => {
  const { paths, loading, error } = useData();
  const [path, setPath] = useState<Path | Subpath | null>(null);
  const [isSubpath, setIsSubpath] = useState(false);
  const [parentPath, setParentPath] = useState<Path | null>(null);

  // Recursive function to find a subpath at any depth
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
        setPath(foundPath);
        setIsSubpath(false);
        setParentPath(null);
        return;
      }

      // If not found, check in subpaths
      const { subpath, parent } = findSubpath(paths, pathId);
      if (subpath) {
        setPath(subpath);
        setIsSubpath(true);
        setParentPath(parent);
        return;
      }

      setPath(null);
      setIsSubpath(false);
      setParentPath(null);
    }
  }, [paths, pathId, loading, error]);

  return { path, loading, error, isSubpath, parentPath };
};

export const usePathQuestions = (pathId: string | undefined) => {
  const { questions, loading, error } = useData();
  const [pathQuestions, setPathQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!loading && !error && pathId) {
      setPathQuestions(questions[pathId] || []);
    }
  }, [questions, pathId, loading, error]);

  return { questions: pathQuestions, loading, error };
};

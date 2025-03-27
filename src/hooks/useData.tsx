
import { useEffect, useState } from "react";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
}

interface Path {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
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
        setPaths(pathsResponse.default);
        
        // Initialize questions object
        const questionsData: Record<string, Question[]> = {};
        
        // Load main questions file for backward compatibility
        try {
          const mainQuestionsResponse = await import("../data/questions.json");
          Object.assign(questionsData, mainQuestionsResponse.default);
        } catch (err) {
          console.log("No main questions.json file found, will use per-path files");
        }
        
        // Load per-path question files if they exist
        const loadPathQuestions = async (pathId: string) => {
          try {
            const response = await import(`../data/questions/${pathId}.json`);
            questionsData[pathId] = response.default;
            return true;
          } catch (err) {
            console.log(`No specific question file for ${pathId}`);
            return false;
          }
        };
        
        // Try to load questions for each path
        for (const path of pathsResponse.default) {
          await loadPathQuestions(path.id);
          
          // Also try to load questions for each subpath
          if (path.subpaths) {
            for (const subpath of path.subpaths) {
              await loadPathQuestions(subpath.id);
            }
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
  const [path, setPath] = useState<Path | null>(null);
  const [isSubpath, setIsSubpath] = useState(false);
  const [parentPath, setParentPath] = useState<Path | null>(null);

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
      
      // If not found, check if it's a subpath
      for (const parent of paths) {
        if (parent.subpaths) {
          const subpath = parent.subpaths.find(s => s.id === pathId);
          if (subpath) {
            setPath(subpath as Path);
            setIsSubpath(true);
            setParentPath(parent);
            return;
          }
        }
      }
      
      // If we get here, no path was found
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
      // For now, handle both direct paths and subpaths the same way
      // In a real implementation, questions might be loaded differently based on path type
      if (questions[pathId]) {
        setPathQuestions(questions[pathId]);
      } else {
        setPathQuestions([]); // No questions found for this path
      }
    }
  }, [questions, pathId, loading, error]);

  return { questions: pathQuestions, loading, error };
};

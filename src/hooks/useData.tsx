
import { useEffect, useState } from "react";

interface Path {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  level: string;
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
        // In a real application, these would be actual API calls
        const pathsResponse = await import("../data/paths.json");
        const questionsResponse = await import("../data/questions.json");
        
        setPaths(pathsResponse.default);
        setQuestions(questionsResponse.default);
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

  useEffect(() => {
    if (!loading && !error && pathId) {
      const foundPath = paths.find((p) => p.id === pathId) || null;
      setPath(foundPath);
    }
  }, [paths, pathId, loading, error]);

  return { path, loading, error };
};

export const usePathQuestions = (pathId: string | undefined) => {
  const { questions, loading, error } = useData();
  const [pathQuestions, setPathQuestions] = useState<Question[]>([]);

  useEffect(() => {
    if (!loading && !error && pathId && questions[pathId]) {
      setPathQuestions(questions[pathId]);
    }
  }, [questions, pathId, loading, error]);

  return { questions: pathQuestions, loading, error };
};

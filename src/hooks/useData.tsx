import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFirebaseData } from "@/services/firebaseService";
import { listJsonFiles, fetchFileById } from "@/services/googleDriveService";

interface Path {
  id: string;
  title: string;
  description: string;
  icon: string;
  level: string;
  subpaths?: Subpath[];
  count?: number;
}

interface Subpath {
  id: string;
  title: string;
  description: string;
  questions?: Question[];
}

interface Question {
  id: string;
  question: string;
  answer: string;
  level: string;
}

interface Data {
  paths: Path[];
  questions: { [key: string]: Question[] };
}

const useData = (): Data => {
  const [paths, setPaths] = useState<Path[]>([]);
  const [questions, setQuestions] = useState<{ [key: string]: Question[] }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const firebaseQuery = useQuery({
    queryKey: ["firebaseData"],
    queryFn: fetchFirebaseData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (err) => {
      setError(err);
      setLoading(false);
      console.error("Firebase data fetch error:", err);
    },
  });

  const googleDriveQuery = useQuery({
    queryKey: ["googleDriveData"],
    queryFn: async () => {
      const files = await listJsonFiles();
      if (!files || files.length === 0) {
        console.warn("No JSON files found in Google Drive folder.");
        return [];
      }

      const fetchedData = await Promise.all(
        files.map(async (file) => {
          try {
            const data = await fetchFileById(file.id);
            return data;
          } catch (fetchError) {
            console.error(`Failed to fetch data for file ${file.name}:`, fetchError);
            return null;
          }
        })
      );

      return fetchedData.filter(data => data !== null);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (err) => {
      setError(err);
      setLoading(false);
      console.error("Google Drive data fetch error:", err);
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let fetchedPaths: Path[] = [];
        let fetchedQuestions: { [key: string]: Question[] } = {};

        if (firebaseQuery.data) {
          // Process Firebase data
          const firebasePaths = firebaseQuery.data.paths || [];
          fetchedPaths = firebasePaths.map((item: any) => {
            const { id, title, description, icon, level, subpaths } = item;
            return {
              id: id,
              title: title,
              description: description,
              icon: icon,
              level: level,
              subpaths: subpaths,
              count: 0,
            };
          });
          fetchedQuestions = firebaseQuery.data.questions || {};
        }

        if (googleDriveQuery.data && googleDriveQuery.data.length > 0) {
          // Process Google Drive data
          googleDriveQuery.data.forEach((data: any) => {
            if (data && data.paths && Array.isArray(data.paths)) {
              data.paths.forEach((item: any) => {
                if (item) {
                  const { id, title, description, icon, level, subpaths } = item;
                  const path = {
                    id: id,
                    title: title,
                    description: description,
                    icon: icon,
                    level: level,
                    count: 0,
                  };

                  if (subpaths && Array.isArray(subpaths)) {
                    path.subpaths = subpaths.map((subpathItem: any) => {
                      const { id: subId, title: subTitle, description: subDescription } = subpathItem;
                      return {
                        id: subId,
                        title: subTitle,
                        description: subDescription,
                      };
                    });
                  }
                  fetchedPaths.push(path);
                }
              });
            }

            if (data && data.questions) {
              Object.keys(data.questions).forEach((key) => {
                if (data.questions && data.questions[key]) {
                  fetchedQuestions[key] = data.questions[key];
                }
              });
            }
          });
        }

        setPaths(fetchedPaths);
        setQuestions(fetchedQuestions);
      } catch (err: any) {
        setError(err);
        console.error("Data fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [firebaseQuery.data, googleDriveQuery.data]);

  return { paths, questions };
};

export { useData };

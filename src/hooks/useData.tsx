
import { useEffect, useState } from "react";
import { fetchFileByName, initGoogleDriveApi, listJsonFiles } from "../services/googleDriveService";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
  icon: string;
}

interface Path extends Subpath {}

interface Question {
  id: string;
  question: string;
  answer: any;
  level: any;
}

export const useData = () => {
  const [paths, setPaths] = useState<Path[]>([]);
  const [questions, setQuestions] = useState<Record<string, Question[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [useGoogleDrive, setUseGoogleDrive] = useState(false);
  const [googleDriveInitialized, setGoogleDriveInitialized] = useState(false);

  // Check if Google Drive config exists
  useEffect(() => {
    const googleDriveConfig = localStorage.getItem("google_drive_config");
    if (googleDriveConfig) {
      setUseGoogleDrive(true);
      
      // Initialize Google Drive API
      initGoogleDriveApi()
        .then(initialized => {
          setGoogleDriveInitialized(initialized);
        })
        .catch(err => {
          console.error("Failed to initialize Google Drive API:", err);
        });
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Load paths data
        let pathsData: Path[];
        
        if (useGoogleDrive && googleDriveInitialized) {
          const drivePathsData = await fetchFileByName("paths.json");
          if (drivePathsData) {
            pathsData = drivePathsData;
          } else {
            // Fall back to local paths if not found in Google Drive
            const localPathsResponse = await import("../data/paths/paths.json");
            pathsData = localPathsResponse.default;
          }
        } else {
          // Use local paths
          const pathsResponse = await import("../data/paths/paths.json");
          pathsData = pathsResponse.default;
        }
        
        setPaths(pathsData);

        // Initialize questions object
        const questionsData: Record<string, Question[]> = {};
        
        // Set loading to false since we don't pre-load all questions
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [useGoogleDrive, googleDriveInitialized]);

  return { paths, questions, loading, error, useGoogleDrive };
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
  const { questions: allQuestions, loading: dataLoading, error: dataError, useGoogleDrive } = useData();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!pathId) {
      setLoading(false);
      return;
    }

    const loadQuestions = async () => {
      try {
        setLoading(true);
        
        // Check if we already have the questions in memory
        if (allQuestions[pathId]) {
          setQuestions(allQuestions[pathId]);
          setLoading(false);
          return;
        }

        // Try to load from Google Drive first if configured
        if (useGoogleDrive) {
          try {
            // Try different possible file naming patterns
            const patterns = [
              `${pathId}.json`,
              `questions/${pathId}.json`
            ];
            
            let driveQuestions = null;
            
            for (const pattern of patterns) {
              driveQuestions = await fetchFileByName(pattern);
              if (driveQuestions) break;
            }
            
            if (driveQuestions) {
              setQuestions(driveQuestions);
              setLoading(false);
              return;
            }
          } catch (driveError) {
            console.warn('Failed to load questions from Google Drive, falling back to local:', driveError);
          }
        }

        // Fall back to local data
        try {
          // First try direct path
          const response = await import(`../data/questions/${pathId}.json`);
          setQuestions(response.default);
        } catch (err) {
          try {
            // Try to find files in specific language folders
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
            ];
            
            let loaded = false;

            for (const folder of folders) {
              try {
                const response = await import(
                  `../data/questions/${folder}/${pathId}.json`
                );
                setQuestions(response.default);
                loaded = true;
                break;
              } catch (nestedErr) {
                // Continue to next folder
              }
            }

            if (!loaded) {
              console.log(`No specific question file for ${pathId}`);
              setQuestions([]);
            }
          } catch (nestedErr) {
            console.log(`No specific question file for ${pathId}`);
            setQuestions([]);
          }
        }
      } catch (err) {
        console.error(`Error loading questions for path ${pathId}:`, err);
        setError(err as Error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };

    if (!dataLoading) {
      loadQuestions();
    }
  }, [pathId, dataLoading, allQuestions, useGoogleDrive]);

  return { questions, loading, error };
};

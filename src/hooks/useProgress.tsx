
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { debounce } from "lodash";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

// Define the type for progress data
type PathProgress = {
  completed: boolean;
  lastRead: number;
  subpaths: Record<string, {
    completed: boolean;
    lastRead: number;
    subpaths?: Record<string, {
      completed: boolean;
      lastRead: number;
    }>;
  }>;
};

type ProgressData = {
  questions: Record<string, boolean>;
  questionsByPath: Record<string, string[]>;
  paths: Record<string, PathProgress>;
  lastRead: Record<string, number>;
  lastUpdated: number;
};

export const useProgress = () => {
  const storageKey = "learning-progress";
  const firebaseConfig = JSON.parse(
    localStorage.getItem("firebase_db_config") || "{}"
  );

  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem(storageKey);
    return savedProgress
      ? JSON.parse(savedProgress)
      : {
        questions: {},
        questionsByPath: {}, // Initialize the new structure
        paths: {},
        lastRead: {},
        lastUpdated: Date.now(),
      };
  });

  const [isSyncing, setIsSyncing] = useState(false);
  const [database, setDatabase] = useState<any>(null);

  // Initialize Firebase Database
  useEffect(() => {
    if (
      firebaseConfig.apiKey &&
      firebaseConfig.projectId &&
      firebaseConfig.databaseURL
    ) {
      const app = initializeApp(firebaseConfig, "progress-db");
      const db = getDatabase(app);
      setDatabase(db);
    }
  }, []);

  // Load progress from Firebase
  useEffect(() => {
    if (!database) return;
    const progressRef = ref(database, "progressData");

    console.log(database)
    get(progressRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const remoteProgress = snapshot.val() as ProgressData;
          const localProgress = JSON.parse(
            localStorage.getItem(storageKey) || "{}"
          );

          // If the remote data is newer, use it
          if (remoteProgress.lastUpdated > (localProgress.lastUpdated || 0)) {
            // Ensure the questionsByPath structure exists
            if (!remoteProgress.questionsByPath) {
              remoteProgress.questionsByPath = {};

              // Convert from old format if needed
              Object.keys(remoteProgress.questions || {}).forEach(questionKey => {
                const [pathId, questionId] = questionKey.split('-');
                if (!remoteProgress.questionsByPath[pathId]) {
                  remoteProgress.questionsByPath[pathId] = [];
                }
                if (!remoteProgress.questionsByPath[pathId].includes(questionId)) {
                  remoteProgress.questionsByPath[pathId].push(questionId);
                }
              });
            }

            setProgress(remoteProgress);
            localStorage.setItem(storageKey, JSON.stringify(remoteProgress));
          } else if (
            (localProgress.lastUpdated || 0) > remoteProgress.lastUpdated
          ) {
            // Ensure the questionsByPath structure exists in local data
            if (!localProgress.questionsByPath) {
              localProgress.questionsByPath = {};

              // Convert from old format if needed
              Object.keys(localProgress.questions || {}).forEach(questionKey => {
                const [pathId, questionId] = questionKey.split('-');
                if (!localProgress.questionsByPath[pathId]) {
                  localProgress.questionsByPath[pathId] = [];
                }
                if (!localProgress.questionsByPath[pathId].includes(questionId)) {
                  localProgress.questionsByPath[pathId].push(questionId);
                }
              });
            }

            set(progressRef, localProgress);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching progress from Firebase:", error);
      });
  }, [database]);

  useEffect(() => {
    if (!database) return;

    const progressRef = ref(database, "progressData");

    // Listen for real-time changes
    const unsubscribe = onValue(progressRef, (snapshot) => {
      if (snapshot.exists()) {
        const remoteData = snapshot.val() as ProgressData;

        // Only update if the remote data is newer or we need to sync
        if (remoteData.lastUpdated > progress.lastUpdated) {
          // Ensure the questionsByPath structure exists
          if (!remoteData.questionsByPath) {
            remoteData.questionsByPath = {};

            // Convert from old format if needed
            Object.keys(remoteData.questions || {}).forEach(questionKey => {
              const [pathId, questionId] = questionKey.split('-');
              if (!remoteData.questionsByPath[pathId]) {
                remoteData.questionsByPath[pathId] = [];
              }
              if (!remoteData.questionsByPath[pathId].includes(questionId)) {
                remoteData.questionsByPath[pathId].push(questionId);
              }
            });
          }

          setProgress(remoteData);
          localStorage.setItem(storageKey, JSON.stringify(remoteData)); // Update localStorage
        }
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [database, progress.lastUpdated]);

  const saveToFirebase = debounce((progress: ProgressData) => {
    if (!database) return;
    set(ref(database, "progressData"), progress);
  }, 2000); // Wait 2 sec before writing

  // Update Firebase whenever progress changes
  useEffect(() => {
    if (!progress || Object.keys(progress).length === 0) return; // Prevent overwriting with empty progress
    localStorage.setItem(storageKey, JSON.stringify(progress));

    saveToFirebase(progress);
  }, [progress, database]);

  const updateProgress = (updates: Partial<ProgressData>) => {
    setProgress((prev) => ({
      ...prev,
      ...updates,
      lastUpdated: Date.now(),
    }));
  };

  const resetProgress = async (pathId?: string) => {
    let newProgress: ProgressData;

    if (pathId) {
      // Reset specific path and its nested structure
      const updatedPaths = { ...progress.paths };
      delete updatedPaths[pathId];

      // Update the questionsByPath structure
      const updatedQuestionsByPath = { ...progress.questionsByPath };
      delete updatedQuestionsByPath[pathId];

      // Remove any questions that start with the pathId
      const updatedQuestions = Object.fromEntries(
        Object.entries(progress.questions).filter(
          ([key]) => !key.startsWith(`${pathId}`)
        )
      );

      newProgress = {
        ...progress,
        paths: updatedPaths,
        questions: updatedQuestions,
        questionsByPath: updatedQuestionsByPath,
        lastRead: Object.fromEntries(
          Object.entries(progress.lastRead).filter(
            ([key]) => !key.startsWith(`${pathId}`)
          )
        ),
        lastUpdated: Date.now(),
      };
    } else {
      // Reset all progress
      newProgress = {
        questions: {},
        questionsByPath: {},
        paths: {},
        lastRead: {},
        lastUpdated: Date.now(),
      };
    }

    setProgress(newProgress);
    localStorage.setItem(storageKey, JSON.stringify(newProgress));

    if (!database) {
      toast.error("Database is not initialized. Progress reset failed.");
      return;
    }

    try {
      await set(ref(database, "progressData"), newProgress);
      toast.success(pathId ? "Path progress reset successfully." : "All progress reset successfully.");
    } catch (error) {
      console.error("Error updating Firebase:", error);
      toast.error("Failed to update progress in cloud.");
    }
  };

  const markQuestionAsRead = (pathId: string, questionId: string) => {
    const questionKey = `${pathId}-${questionId}`;

    setProgress((prev) => {
      // Update the traditional questions object
      const updatedQuestions = { ...prev.questions, [questionKey]: true };
      const updatedLastRead = { ...prev.lastRead, [questionKey]: Date.now() };

      // Update the questionsByPath structure
      const updatedQuestionsByPath = { ...prev.questionsByPath };
      if (!updatedQuestionsByPath[pathId]) {
        updatedQuestionsByPath[pathId] = [];
      }
      if (!updatedQuestionsByPath[pathId].includes(questionId)) {
        updatedQuestionsByPath[pathId] = [...updatedQuestionsByPath[pathId], questionId];
      }

      // Update the path structure
      const pathParts = pathId.split('-');
      const mainPathId = pathParts[0];

      const updatedPaths = { ...prev.paths };
      if (!updatedPaths[mainPathId]) {
        updatedPaths[mainPathId] = {
          completed: false,
          lastRead: Date.now(),
          subpaths: {} // Always initialize with empty record
        };
      }

      const updatedProgress = {
        ...prev,
        questions: updatedQuestions,
        questionsByPath: updatedQuestionsByPath,
        paths: updatedPaths,
        lastRead: updatedLastRead,
        lastUpdated: Date.now(),
      };

      if (database) {
        const progressRef = ref(database, "progressData");
        set(progressRef, updatedProgress);
      }

      return updatedProgress;
    });

    toast.success("Question marked as read!");
  };

  const undoMarkQuestionAsRead = (pathId: string, questionId: string) => {
    const questionKey = `${pathId}-${questionId}`;

    setProgress((prev) => {
      // Update the traditional questions object
      const updatedQuestions = { ...prev.questions };
      delete updatedQuestions[questionKey];

      const updatedLastRead = { ...prev.lastRead };
      delete updatedLastRead[questionKey];

      // Update the questionsByPath structure
      const updatedQuestionsByPath = { ...prev.questionsByPath };
      if (updatedQuestionsByPath[pathId]) {
        updatedQuestionsByPath[pathId] = updatedQuestionsByPath[pathId].filter(
          qId => qId !== questionId
        );

        // Remove empty arrays
        if (updatedQuestionsByPath[pathId].length === 0) {
          delete updatedQuestionsByPath[pathId];
        }
      }

      const updatedProgress = {
        ...prev,
        questions: updatedQuestions,
        questionsByPath: updatedQuestionsByPath,
        lastRead: updatedLastRead,
        lastUpdated: Date.now(),
      };

      if (database) {
        const progressRef = ref(database, "progressData");
        set(progressRef, updatedProgress);
      }

      return updatedProgress;
    });

    toast.success("Question marked as unread!");
  };

  const markSubpathAsCompleted = (subpathId: string) => {
    const pathParts = subpathId.split('-');
    const mainPathId = pathParts[0];

    setProgress((prev) => {
      const updatedPaths = { ...prev.paths };

      if (!updatedPaths[mainPathId]) {
        updatedPaths[mainPathId] = {
          completed: false,
          lastRead: Date.now(),
          subpaths: {}
        };
      }

      let currentLevel = updatedPaths[mainPathId];
      for (let i = 1; i < pathParts.length; i++) {
        const part = pathParts.slice(0, i + 1).join('-');
        if (!currentLevel.subpaths) {
          currentLevel.subpaths = {};
        }
        if (!currentLevel.subpaths[part]) {
          currentLevel.subpaths[part] = {
            completed: false,
            lastRead: Date.now(),
            subpaths: {}
          };
        }
        currentLevel = currentLevel.subpaths[part];
      }

      currentLevel.completed = true;
      currentLevel.lastRead = Date.now();

      return {
        ...prev,
        paths: updatedPaths,
        lastUpdated: Date.now(),
      };
    });

    toast.success("Subpath marked as completed!");
  };

  const markPathAsCompleted = (pathId: string) => {
    setProgress((prev) => {
      const updatedPaths = { ...prev.paths };
      if (!updatedPaths[pathId]) {
        updatedPaths[pathId] = {
          completed: true,
          lastRead: Date.now(),
          subpaths: {} // Always initialize with empty record
        };
      } else {
        updatedPaths[pathId] = {
          ...updatedPaths[pathId],
          completed: true,
          lastRead: Date.now(),
          subpaths: updatedPaths[pathId].subpaths || {} // Ensure subpaths exists
        };
      }

      return {
        ...prev,
        paths: updatedPaths,
        lastUpdated: Date.now(),
      };
    });

    toast.success("Learning path marked as completed!");
  };

  const isQuestionRead = (pathId: string, questionId: number | string): boolean => {
    const questionIdStr = String(questionId);
    
    // First check the traditional way
    if (progress?.questions?.[`${pathId}-${questionIdStr}`]) {
      return true;
    }

    // Then check the new structure
    if (progress?.questionsByPath?.[pathId]) {
      return progress.questionsByPath[pathId].includes(questionIdStr);
    }

    return false;
  };

  const isSubpathCompleted = (subpathId: string): boolean => {
    const pathParts = subpathId.split('-');
    const mainPathId = pathParts[0];

    if (!progress?.paths?.[mainPathId]) return false;

    let currentLevel = progress.paths[mainPathId];
    for (let i = 1; i < pathParts.length; i++) {
      const part = pathParts.slice(0, i + 1).join('-');
      if (!currentLevel.subpaths?.[part]) return false;
      currentLevel = currentLevel.subpaths[part];
    }

    return currentLevel.completed;
  };

  const isPathCompleted = (pathId: string): boolean => {
    return !!progress?.paths?.[pathId]?.completed;
  };

  const getPathProgress = (pathId: string, questions: any[]) => {
    try {
      const completedQuestions = questions.filter((q, index) =>
        isQuestionRead(pathId, q.id)
      ).length;

      return {
        completed: completedQuestions,
        total: questions.length,
      };
    } catch {
      return { completed: 0, total: 0 };
    }
  };

  const getLastReadTimestamp = (id: string): number => {
    return progress.lastRead[id] || 0;
  };

  // Sync manually with Firebase
  const refreshFromCloud = async () => {
    if (!database) {
      toast.error("Cloud sync failed. Database is not initialized.");
      return;
    }

    setIsSyncing(true);
    try {
      const progressRef = ref(database, "progressData");
      const snapshot = await get(progressRef);

      if (snapshot.exists()) {
        const remoteProgress = snapshot.val() as ProgressData;

        // Ensure the questionsByPath structure exists
        if (!remoteProgress.questionsByPath) {
          remoteProgress.questionsByPath = {};

          // Convert from old format if needed
          Object.keys(remoteProgress.questions || {}).forEach(questionKey => {
            const [pathId, questionId] = questionKey.split('-');
            if (!remoteProgress.questionsByPath[pathId]) {
              remoteProgress.questionsByPath[pathId] = [];
            }
            if (!remoteProgress.questionsByPath[pathId].includes(questionId)) {
              remoteProgress.questionsByPath[pathId].push(questionId);
            }
          });
        }

        // Only update if the remote data is newer
        if (remoteProgress.lastUpdated > (progress.lastUpdated || 0)) {
          setProgress(remoteProgress); // Update the state with latest progress
          localStorage.setItem(storageKey, JSON.stringify(remoteProgress)); // Store to localStorage
          toast.success("Pulled latest progress from cloud.");
        } else {
          toast.info("Your progress is up-to-date.");
        }
      } else {
        toast.error("No progress data found in the cloud.");
      }
    } catch (error) {
      console.error("Error fetching progress from Firebase:", error);
      toast.error("Failed to fetch progress from cloud.");
    } finally {
      setIsSyncing(false);
    }
  };

  return {
    markQuestionAsRead,
    undoMarkQuestionAsRead,
    markSubpathAsCompleted,
    markPathAsCompleted,
    isQuestionRead,
    isSubpathCompleted,
    isPathCompleted,
    getPathProgress,
    getLastReadTimestamp,
    resetProgress,
    refreshFromCloud,
    isSyncing,
  };
};

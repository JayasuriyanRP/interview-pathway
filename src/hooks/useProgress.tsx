import { useState, useEffect } from "react";
import { toast } from "sonner";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

// Define the type for progress data
type ProgressData = {
  questions: Record<string, boolean>;
  paths: Record<string, boolean>;
  subpaths: Record<string, boolean>;
  lastRead: Record<string, number>; // Timestamp when item was last read
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
          paths: {},
          subpaths: {},
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

    get(progressRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const remoteProgress = snapshot.val() as ProgressData;
          const localProgress = JSON.parse(
            localStorage.getItem(storageKey) || "{}"
          );

          if (remoteProgress.lastUpdated > (localProgress.lastUpdated || 0)) {
            setProgress(remoteProgress);
            localStorage.setItem(storageKey, JSON.stringify(remoteProgress));
          } else if (
            (localProgress.lastUpdated || 0) > remoteProgress.lastUpdated
          ) {
            set(progressRef, localProgress);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching progress from Firebase:", error);
      });
  }, [database]);

  // Real-time sync with Firebase
  useEffect(() => {
    if (!database) return;
    const progressRef = ref(database, "progressData");

    const unsubscribe = onValue(progressRef, (snapshot) => {
      if (snapshot.exists()) {
        const remoteData = snapshot.val() as ProgressData;
        if (remoteData.lastUpdated > progress.lastUpdated) {
          setProgress(remoteData);
          localStorage.setItem(storageKey, JSON.stringify(remoteData));
        }
      }
    });
    return () => unsubscribe();
  }, [database, progress.lastUpdated]);

  // Update Firebase whenever progress changes
  useEffect(() => {
    if (!progress || Object.keys(progress).length === 0) return; // Prevent overwriting with empty progress
    localStorage.setItem(storageKey, JSON.stringify(progress));

    if (database) {
      set(ref(database, "progressData"), progress);
    }
  }, [progress, database]);

  // Helper function to update progress
  const updateProgress = (updates: Partial<ProgressData>) => {
    setProgress((prev) => ({
      ...prev,
      ...updates,
      lastUpdated: Date.now(),
    }));
  };

  // Reset progress
  const resetProgress = async (pathId?: string) => {
    if (!database) {
      toast.error("Database is not initialized. Progress reset failed.");
      return;
    }

    const progressRef = ref(database, "progressData");

    if (pathId) {
      // Reset progress only for a specific path
      const updatedQuestions = Object.fromEntries(
        Object.entries(progress.questions).filter(
          ([key]) => !key.startsWith(`${pathId}-`)
        )
      );

      const updatedLastRead = Object.fromEntries(
        Object.entries(progress.lastRead).filter(
          ([key]) => !key.startsWith(`${pathId}-`)
        )
      );

      const updatedPaths = { ...progress.paths };
      delete updatedPaths[pathId];

      const updatedSubpaths = Object.fromEntries(
        Object.entries(progress.subpaths).filter(
          ([key]) => !key.startsWith(`${pathId}-`)
        )
      );

      const newProgress: ProgressData = {
        ...progress,
        questions: updatedQuestions,
        paths: updatedPaths,
        subpaths: updatedSubpaths,
        lastRead: updatedLastRead,
        lastUpdated: Date.now(),
      };

      setProgress(newProgress);
      localStorage.setItem(storageKey, JSON.stringify(newProgress));

      // 🔹 Update Firebase
      try {
        await set(progressRef, newProgress);
        toast.success(`Progress for path "${pathId}" reset successfully.`);
      } catch (error) {
        console.error("Error updating Firebase:", error);
        toast.error("Failed to update progress in cloud.");
      }
    } else {
      // Full reset
      const newProgress: ProgressData = {
        questions: {},
        paths: {},
        subpaths: {},
        lastRead: {},
        lastUpdated: Date.now(),
      };

      setProgress(newProgress);
      localStorage.setItem(storageKey, JSON.stringify(newProgress));

      // 🔹 Update Firebase
      try {
        await set(progressRef, newProgress);
        toast.success("All progress reset successfully.");
      } catch (error) {
        console.error("Error updating Firebase:", error);
        toast.error("Failed to update progress in cloud.");
      }
    }
  };

  // **Restored Functions**

  const markQuestionAsRead = (pathId: string, questionId: string) => {
    setProgress((prev) => {
      return {
        ...prev,
        questions: {
          ...prev.questions,
          [`${pathId}-${questionId}`]: true,
        },
        lastRead: {
          ...prev.lastRead,
          [`${pathId}-${questionId}`]: Date.now(),
        },
      };
    });
  };

  const undoMarkQuestionAsRead = (pathId: string, questionId: string) => {
    const key = `${pathId}-${questionId}`;
    const updatedQuestions = { ...progress.questions };
    const updatedLastRead = { ...progress.lastRead };

    delete updatedQuestions[key];
    delete updatedLastRead[key];

    updateProgress({ questions: updatedQuestions, lastRead: updatedLastRead });
  };

  const markSubpathAsCompleted = (subpathId: string) => {
    updateProgress({
      subpaths: { ...progress.subpaths, [subpathId]: true },
      lastRead: { ...progress.lastRead, [subpathId]: Date.now() },
    });

    toast.success("Subpath marked as completed!");
  };

  const markPathAsCompleted = (pathId: string) => {
    updateProgress({
      paths: { ...progress.paths, [pathId]: true },
      lastRead: { ...progress.lastRead, [pathId]: Date.now() },
    });

    toast.success("Learning path marked as completed!");
  };

  const isQuestionRead = (pathId: string, questionId: number): boolean => {
    return !!progress?.questions?.[`${pathId}-${questionId}`]; // Ensures no crash if `questions` is empty
  };

  const isSubpathCompleted = (subpathId: string): boolean => {
    return !!progress?.subpaths?.[subpathId];
  };

  const isPathCompleted = (pathId: string): boolean => {
    return !!progress?.paths?.[pathId]; // Ensures we don't access `undefined`
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
  const syncWithCloud = async (forcePull = false) => {
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

        // 🔹 Always pull latest data if `forcePull` is true
        if (
          forcePull ||
          remoteProgress.lastUpdated > (progress.lastUpdated || 0)
        ) {
          setProgress(remoteProgress);
          localStorage.setItem(storageKey, JSON.stringify(remoteProgress));
          toast.success("Pulled latest progress from cloud.");
        } else {
          await set(progressRef, progress);
          toast.success("Updated cloud with your latest progress.");
        }
      } else {
        await set(progressRef, progress);
        toast.success("Progress synced to cloud for the first time.");
      }
    } catch (error) {
      console.error("Error syncing with Firebase:", error);
      toast.error("Failed to sync progress with cloud.");
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
    syncWithCloud,
    isSyncing,
  };
};

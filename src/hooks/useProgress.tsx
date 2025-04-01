import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  Timestamp,
  collection,
  onSnapshot
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

type ProgressItem = {
  id: string;
  read: boolean;
  timestamp: number;
};

type ProgressData = {
  questions: Record<string, boolean>;
  paths: Record<string, boolean>;
  subpaths: Record<string, boolean>;
  lastRead: Record<string, number>; // Timestamp when item was last read
  lastUpdated: number;
  userEmail?: string; // Store email as identifier
};

export const useProgress = () => {
  const { toast: uiToast } = useToast();
  const { user, isAuthenticated } = useAuth();
  
  // User-specific key for localStorage
  const storageKey = user ? `learning-progress-${user.uid}` : "learning-progress";
  
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
          userEmail: user?.email || undefined
        };
  });
  
  const [isSyncing, setIsSyncing] = useState(false);
  const [firestore, setFirestore] = useState<any>(null);

  // Initialize Firestore when possible
  useEffect(() => {
    if (isAuthenticated) {
      try {
        const firebaseConfig = JSON.parse(localStorage.getItem('firebase_config') || '{}');
        
        // Check if we have the required config
        if (firebaseConfig.apiKey && firebaseConfig.authDomain) {
          const app = initializeApp(firebaseConfig, 'progress-app');
          const db = getFirestore(app);
          setFirestore(db);
        }
      } catch (error) {
        console.error('Error initializing Firebase for progress tracking:', error);
      }
    }
  }, [isAuthenticated]);

  // Load progress data from Firebase when user logs in
  useEffect(() => {
    const fetchProgressFromFirebase = async () => {
      if (!user || !firestore) return;
      
      try {
        setIsSyncing(true);
        // Use user email as part of document ID for clear identification
        const userEmail = user.email || 'unknown';
        const progressRef = doc(firestore, "userProgress", user.uid);
        const progressSnapshot = await getDoc(progressRef);
        
        if (progressSnapshot.exists()) {
          const remoteProgress = progressSnapshot.data() as ProgressData;
          
          // Add user email to progress data if not present
          if (!remoteProgress.userEmail && user.email) {
            remoteProgress.userEmail = user.email;
          }
          
          // Get local progress
          const localProgress = JSON.parse(localStorage.getItem(storageKey) || '{}') as ProgressData;
          
          // Compare timestamps and use the most recent data
          if (remoteProgress.lastUpdated > (localProgress.lastUpdated || 0)) {
            // Remote is newer, update local
            setProgress(remoteProgress);
            localStorage.setItem(storageKey, JSON.stringify(remoteProgress));
            console.log('Loaded newer progress data from Firebase');
          } else if ((localProgress.lastUpdated || 0) > remoteProgress.lastUpdated) {
            // Local is newer, update remote
            await setDoc(progressRef, {
              ...localProgress,
              userEmail: user.email || 'unknown'
            });
            console.log('Updated Firebase with newer local progress data');
          }
        } else {
          // No remote progress, upload the local one if it exists
          const localProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');
          if (localProgress.lastUpdated) {
            await setDoc(progressRef, {
              ...localProgress,
              userEmail: user.email || 'unknown'
            });
            console.log('Created new progress document in Firebase');
          }
        }
      } catch (error) {
        console.error('Error fetching progress from Firebase:', error);
        toast.error('Failed to sync progress with cloud', {
          position: 'top-center',
          duration: 3000
        });
      } finally {
        setIsSyncing(false);
      }
    };

    if (user && firestore) {
      fetchProgressFromFirebase();
    }
  }, [user, firestore, storageKey]);

  // Set up real-time progress updates from Firebase
  useEffect(() => {
    if (!user || !firestore) return;
    
    // Set up real-time listener for progress changes
    const progressRef = doc(firestore, "userProgress", user.uid);
    
    const unsubscribe = onSnapshot(progressRef, 
      (doc) => {
        if (doc.exists()) {
          const remoteData = doc.data() as ProgressData;
          
          // Only update if remote is newer than our current state
          if (remoteData.lastUpdated > progress.lastUpdated) {
            setProgress(remoteData);
            localStorage.setItem(storageKey, JSON.stringify(remoteData));
            console.log('Progress updated from real-time Firebase update');
          }
        }
      }, 
      (error) => {
        console.error('Error in Firebase real-time listener:', error);
      }
    );
    
    // Clean up listener when component unmounts or user changes
    return () => unsubscribe();
  }, [user, firestore, storageKey, progress.lastUpdated]);

  // Update localStorage when progress changes
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
    
    // Sync with Firebase if user is logged in
    const syncToFirebase = async () => {
      if (user && firestore) {
        try {
          const progressRef = doc(firestore, "userProgress", user.uid);
          // Include user email in the stored data
          await setDoc(progressRef, {
            ...progress,
            userEmail: user.email || 'unknown'
          });
        } catch (error) {
          console.error('Error syncing progress to Firebase:', error);
        }
      }
    };
    
    if (user && firestore) {
      syncToFirebase();
    }
  }, [progress, storageKey, user, firestore]);

  // When user changes, reload progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem(storageKey);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      // Reset progress when user changes and no saved data exists
      setProgress({
        questions: {},
        paths: {},
        subpaths: {},
        lastRead: {},
        lastUpdated: Date.now(),
        userEmail: user?.email || undefined
      });
    }
  }, [storageKey, user?.email]);

  const markQuestionAsRead = (pathId: string, questionId: number) => {
    setProgress((prev) => ({
      ...prev,
      questions: {
        ...prev.questions,
        [`${pathId}-${questionId}`]: true,
      },
      lastRead: {
        ...prev.lastRead,
        [`${pathId}-${questionId}`]: Date.now(),
      },
      lastUpdated: Date.now(),
    }));
  };

  const undoMarkQuestionAsRead = (pathId: string, questionId: number) => {
    const key = `${pathId}-${questionId}`;
    setProgress((prev) => {
      const updatedQuestions = { ...prev.questions };
      delete updatedQuestions[key];

      const updatedLastRead = { ...prev.lastRead };
      delete updatedLastRead[key];

      return {
        ...prev,
        questions: updatedQuestions,
        lastRead: updatedLastRead,
        lastUpdated: Date.now(),
      };
    });
  };

  const markSubpathAsCompleted = (
    subpathId: string,
    showToast: boolean = true
  ) => {
    setProgress((prev) => ({
      ...prev,
      subpaths: {
        ...prev.subpaths,
        [subpathId]: true,
      },
      lastRead: {
        ...prev.lastRead,
        [subpathId]: Date.now(),
      },
      lastUpdated: Date.now(),
    }));

    if (showToast) {
      toast.success("Subpath marked as completed", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  const markPathAsCompleted = (pathId: string, showToast: boolean = true) => {
    setProgress((prev) => ({
      ...prev,
      paths: {
        ...prev.paths,
        [pathId]: true,
      },
      lastRead: {
        ...prev.lastRead,
        [pathId]: Date.now(),
      },
      lastUpdated: Date.now(),
    }));

    if (showToast) {
      toast.success("Learning path marked as completed", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  const isQuestionRead = (pathId: string, questionId: number): boolean => {
    return !!progress.questions[`${pathId}-${questionId}`];
  };

  const isSubpathCompleted = (subpathId: string): boolean => {
    return !!progress.subpaths[subpathId];
  };

  const isPathCompleted = (pathId: string): boolean => {
    return !!progress.paths[pathId];
  };

  const getPathProgress = (
    pathId: string,
    questions: any[]
  ): { completed: number; total: number } => {
    try {
      const questionsInPath = questions || [];
      const completedQuestions =
        questionsInPath.filter((_, index) => isQuestionRead(pathId, index))
          .length ?? 0;

      return {
        completed: completedQuestions,
        total: questionsInPath.length,
      };
    } catch {
      return {
        completed: 0,
        total: 0,
      };
    }
  };

  const getLastReadTimestamp = (id: string): number => {
    return progress.lastRead[id] || 0;
  };

  const resetProgress = (showToast: boolean = true) => {
    const newProgress = {
      questions: {},
      paths: {},
      subpaths: {},
      lastRead: {},
      lastUpdated: Date.now(),
      userEmail: user?.email || undefined
    };
    
    setProgress(newProgress);
    
    if (showToast) {
      toast.success("All learning progress has been reset", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  // Sync with Firebase (useful for manual sync)
  const syncWithCloud = async (): Promise<void> => {
    if (!user || !firestore) {
      toast.error("You need to be logged in to sync with the cloud", {
        position: "top-center",
        duration: 3000,
      });
      return;
    }
    
    try {
      setIsSyncing(true);
      
      // Get the current progress from Firebase
      const progressRef = doc(firestore, "userProgress", user.uid);
      const progressSnapshot = await getDoc(progressRef);
      
      if (progressSnapshot.exists()) {
        const remoteProgress = progressSnapshot.data() as ProgressData;
        
        // Compare timestamps
        if (remoteProgress.lastUpdated > progress.lastUpdated) {
          // Remote is newer
          setProgress(remoteProgress);
          localStorage.setItem(storageKey, JSON.stringify(remoteProgress));
          toast.success("Pulled latest progress from cloud", {
            position: "top-center",
            duration: 3000,
          });
        } else {
          // Local is newer or same age
          await setDoc(progressRef, {
            ...progress,
            userEmail: user.email || 'unknown'
          });
          toast.success("Updated cloud with your latest progress", {
            position: "top-center",
            duration: 3000,
          });
        }
      } else {
        // No document exists yet, create it
        await setDoc(progressRef, {
          ...progress,
          userEmail: user.email || 'unknown'
        });
        toast.success("Progress synced to cloud for the first time", {
          position: "top-center",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error syncing progress with cloud:", error);
      toast.error("Failed to sync progress with cloud", {
        position: "top-center",
        duration: 3000,
      });
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

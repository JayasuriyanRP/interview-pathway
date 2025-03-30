import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { toast } from "sonner";

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
};

export const useProgress = () => {
  const { toast: uiToast } = useToast();
  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem("learning-progress");
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

  useEffect(() => {
    localStorage.setItem("learning-progress", JSON.stringify(progress));
  }, [progress]);

  const markQuestionAsRead = (pathId: string, questionId: number) => {
    const key = `${pathId}-${questionId}`;
    setProgress((prev) => ({
      ...prev,
      questions: {
        ...prev.questions,
        [key]: true,
      },
      lastRead: {
        ...prev.lastRead,
        [key]: Date.now(),
      },
      lastUpdated: Date.now(),
    }));
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
    setProgress({
      questions: {},
      paths: {},
      subpaths: {},
      lastRead: {},
      lastUpdated: Date.now(),
    });

    if (showToast) {
      toast.success("All learning progress has been reset", {
        position: "top-center",
        duration: 3000,
      });
    }
  };

  return {
    markQuestionAsRead,
    markSubpathAsCompleted,
    markPathAsCompleted,
    isQuestionRead,
    isSubpathCompleted,
    isPathCompleted,
    getPathProgress,
    getLastReadTimestamp,
    resetProgress,
  };
};

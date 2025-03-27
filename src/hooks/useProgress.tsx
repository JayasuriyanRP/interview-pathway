
import { useState, useEffect } from "react";

type ProgressItem = {
  id: string;
  read: boolean;
  timestamp: number;
};

type ProgressData = {
  questions: Record<string, boolean>;
  paths: Record<string, boolean>;
  subpaths: Record<string, boolean>;
  lastUpdated: number;
};

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const savedProgress = localStorage.getItem("learning-progress");
    return savedProgress
      ? JSON.parse(savedProgress)
      : {
          questions: {},
          paths: {},
          subpaths: {},
          lastUpdated: Date.now(),
        };
  });

  useEffect(() => {
    localStorage.setItem("learning-progress", JSON.stringify(progress));
  }, [progress]);

  const markQuestionAsRead = (pathId: string, questionId: number) => {
    setProgress((prev) => ({
      ...prev,
      questions: {
        ...prev.questions,
        [`${pathId}-${questionId}`]: true,
      },
      lastUpdated: Date.now(),
    }));
  };

  const markSubpathAsCompleted = (subpathId: string) => {
    setProgress((prev) => ({
      ...prev,
      subpaths: {
        ...prev.subpaths,
        [subpathId]: true,
      },
      lastUpdated: Date.now(),
    }));
  };

  const markPathAsCompleted = (pathId: string) => {
    setProgress((prev) => ({
      ...prev,
      paths: {
        ...prev.paths,
        [pathId]: true,
      },
      lastUpdated: Date.now(),
    }));
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
    const questionsInPath = questions || [];
    const completedQuestions = questionsInPath.filter((_, index) =>
      isQuestionRead(pathId, index)
    ).length;

    return {
      completed: completedQuestions,
      total: questionsInPath.length,
    };
  };

  const resetProgress = () => {
    setProgress({
      questions: {},
      paths: {},
      subpaths: {},
      lastUpdated: Date.now(),
    });
  };

  return {
    markQuestionAsRead,
    markSubpathAsCompleted,
    markPathAsCompleted,
    isQuestionRead,
    isSubpathCompleted,
    isPathCompleted,
    getPathProgress,
    resetProgress,
  };
};

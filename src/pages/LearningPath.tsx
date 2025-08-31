import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import QuestionFilter from "../components/QuestionFilter";
import PathHeader from "../components/PathHeader";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { usePathQuestions, useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { getPathSegments, findNestedPath } from "@/utils/pathUtils";

const LearningPath = () => {
  const params = useParams();
  const { paths } = useData();
  
  // Get the actual path ID from nested URL structure
  const pathSegments = getPathSegments(params);
  const actualPathId = pathSegments[pathSegments.length - 1]; // Get the last segment as the actual path ID
  
  const { questions, loading, error } = usePathQuestions(actualPathId);
  const {
    getPathProgress,
    markQuestionAsRead,
    undoMarkQuestionAsRead,
    markSubpathAsCompleted,
    resetSubpathProgress,
    getLastReadQuestionId,
  } = useProgress();

  // Find the actual path object for header display
  const currentPath = paths.length > 0 ? findNestedPath(paths, pathSegments) : null;

  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasScrolledToLastRead, setHasScrolledToLastRead] = useState(false);
  const questionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      searchQuery === "" ||
      question.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof question.answer === "string" &&
        question.answer.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel =
      !levelFilter ||
      question.level === levelFilter ||
      question.level === "All Levels";

    return matchesSearch && matchesLevel;
  });

  const progress = getPathProgress(actualPathId || "", questions);
  const progressPercentage =
    progress.total > 0 ? Math.round((progress.completed / progress.total) * 100) : 0;

  // Handle window resize and scroll restoration
  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, scrollPosition);
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // Auto scroll to last read question
  useEffect(() => {
    if (
      !loading &&
      !error &&
      questions.length > 0 &&
      actualPathId &&
      !hasScrolledToLastRead &&
      Object.keys(questionRefs.current).length > 0
    ) {
      console.log("Attempting to scroll to last read question...");
      
      const lastReadId = getLastReadQuestionId?.(actualPathId);
      console.log("Last read question ID:", lastReadId);
      
      if (lastReadId && questionRefs.current[lastReadId]) {
        console.log("Found question element for ID:", lastReadId);
        
        setTimeout(() => {
          const element = questionRefs.current[lastReadId];
          if (element) {
            console.log("Scrolling to element:", element);
            element.scrollIntoView({ 
              behavior: "smooth", 
              block: "start",
              inline: "nearest"
            });
            setHasScrolledToLastRead(true);
          } else {
            console.log("Element not found in refs for ID:", lastReadId);
          }
        }, 1000);
      } else {
        console.log("No last read question found or element not in refs");
        setHasScrolledToLastRead(true);
      }
    }
  }, [loading, error, questions, actualPathId, hasScrolledToLastRead, getLastReadQuestionId]);

  const handleQuestionRead = (questionId: string) => {
    if (actualPathId) {
      markQuestionAsRead(actualPathId, questionId);
    }
  };

  const handleQuestionUnread = (questionId: string) => {
    if (actualPathId) {
      undoMarkQuestionAsRead(actualPathId, questionId);
    }
  };

  const handleResetProgress = () => {
    if (actualPathId && window.confirm("Are you sure you want to reset all progress for this path?")) {
      resetSubpathProgress(actualPathId);
      setHasScrolledToLastRead(false);
    }
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !currentPath) {
    return <ErrorState />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title={currentPath?.title} showBackButton={true} />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-6">
        <div className="space-y-6">
          <PathHeader
            title={currentPath.title}
            description={currentPath.description || ""}
            level={currentPath.level || ""}
            totalSubpaths={questions.length}
            onResetProgress={handleResetProgress}
          />

          <QuestionFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            levelFilter={levelFilter}
            setLevelFilter={setLevelFilter}
            progressPercentage={progressPercentage}
          />

          <div className="space-y-6">
            {filteredQuestions.map((question, index) => (
              <div
                key={question.id}
                ref={(el) => {
                  questionRefs.current[question.id] = el;
                }}
              >
                <QuestionCard
                  question={question}
                  questionNumber={index + 1}
                  totalQuestions={filteredQuestions.length}
                  pathId={actualPathId || ""}
                  onMarkAsRead={handleQuestionRead}
                  onMarkAsUnread={handleQuestionUnread}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <ScrollToTopButton />
    </div>
  );
};

export default LearningPath;

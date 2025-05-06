import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import QuestionFilter from "../components/QuestionFilter";
import { usePath, usePathQuestions } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { useIsMobile } from "../hooks/use-mobile";
import { ChevronRight, BookOpen, CheckCircle, RotateCcw } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";
import { Button } from "../components/ui/button";
import ScrollToTopButton from "../components/ScrollToTopButton";

const LearningPath = () => {
  const [expandAll, setExpandAll] = useState(false);
  const { pathId } = useParams<{ pathId: string }>();
  const [searchParams] = useSearchParams();
  const highlightedQuestion = searchParams.get("q");
  const isMobile = useIsMobile();
  const scrollPositionRef = useRef(0);
  
  const {
    path,
    loading: pathLoading,
    error: pathError,
    isSubpath,
    parentPath,
  } = usePath(pathId);
  const {
    questions,
    loading: questionsLoading,
    error: questionsError,
  } = usePathQuestions(pathId);

  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const initialRenderRef = useRef(true);
  const orientationChangeRef = useRef(false);

  const {
    markQuestionAsRead,
    undoMarkQuestionAsRead,
    isQuestionRead,
    getPathProgress,
    markSubpathAsCompleted,
    resetProgress,
    getLastReadQuestionId,
  } = useProgress();

  const loading = pathLoading || questionsLoading;
  const error = pathError || questionsError;

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
  };

  // Save scroll position when orientation changes
  useEffect(() => {
    const handleBeforeOrientationChange = () => {
      scrollPositionRef.current = window.scrollY;
      orientationChangeRef.current = true;
    };

    const handleOrientationChange = () => {
      if (orientationChangeRef.current) {
        setTimeout(() => {
          window.scrollTo({
            top: scrollPositionRef.current,
            behavior: "auto"
          });
          orientationChangeRef.current = false;
        }, 100);
      }
    };

    window.addEventListener('orientationchange', handleBeforeOrientationChange);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleBeforeOrientationChange);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    if (!loading && questions) {
      setFilteredQuestions(questions);
    }
  }, [questions, loading]);

  // Handle question highlighting
  useEffect(() => {
    if (highlightedQuestion && !loading) {
      const questionIndex = parseInt(highlightedQuestion);
      const element = document.getElementById(`question-${questionIndex}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [highlightedQuestion, loading]);

  // Auto scroll to last read question
  useEffect(() => {
    if (!loading && pathId && questions.length > 0 && initialRenderRef.current) {
      initialRenderRef.current = false;
      
      if (getLastReadQuestionId && typeof getLastReadQuestionId === 'function') {
        const lastReadId = getLastReadQuestionId(pathId);
        
        if (lastReadId) {
          // Find the question in the filtered list
          const questionIndex = questions.findIndex(q => q.id === lastReadId);
          
          if (questionIndex !== -1) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
              const element = document.getElementById(`question-${questionIndex}`);
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }, 300);
          }
        }
      }
    }
  }, [loading, questions, pathId, getLastReadQuestionId]);

  const handleMarkAsRead = (questionId: string) => {
    if (pathId) {
      markQuestionAsRead(pathId, questionId);
    }
  };
  
  const handleUndoMarkAsRead = (questionId: string) => {
    if (pathId) {
      undoMarkQuestionAsRead(pathId, questionId);
    }
  };

  const handleMarkAllAsRead = () => {
    if (!pathId) return;

    questions.forEach((q, index) => {
      setTimeout(() => {
        markQuestionAsRead(pathId, q.id);
      }, index * 50); // 50ms delay per question
    });

    // If it's a subpath, mark it as completed after all questions are marked
    setTimeout(() => {
      if (isSubpath) {
        markSubpathAsCompleted(pathId);
      }
    }, questions.length * 50);
  };

  const handleResetProgress = () => {
    resetProgress(pathId);
  };

  // Calculate progress
  const progress = pathId
    ? getPathProgress(pathId, questions)
    : { completed: 0, total: 0 };
  const progressPercentage =
    progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Loading..." showBackButton={true} />
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
          <Skeleton className="h-6 w-32 mb-4" />
          <Skeleton className="h-10 w-3/4 mb-6" />
          <Skeleton className="h-6 w-full mb-10" />

          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 w-full rounded-xl mb-6" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-lg font-medium">Error loading data</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!path) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">Learning path not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title={path.title} showBackButton={true} />

      <main className="flex-1 px-0 sm:px-6 md:px-8 lg:px-12 pb-12">
        <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8">
          <div className="flex justify-between items-center mt-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {isSubpath && parentPath && (
                <>
                  <Link
                    to={`/subpaths/${parentPath.id}`}
                    className="hover:text-foreground"
                  >
                    {parentPath.title}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-medium text-foreground">
                    {path.title}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="mb-8 mt-2 animate-fadeIn">
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                {path.level}
              </div>
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {progress.completed} of {progress.total} Completed
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {path.title}
            </h1>
            <p className="text-lg text-muted-foreground">{path.description}</p>

            {/* Progress bar */}
            <div className="mt-6 mb-2">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all duration-500 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                <span>{progressPercentage.toFixed(0)}% Complete</span>
              </div>
              <div className="flex justify-end items-center mt-2 text-sm text-muted-foreground">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetProgress}
                    title="Reset all progress"
                    className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleMarkAllAsRead}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    Mark all as read
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleExpandAll}
                    className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    {expandAll ? "Collapse All" : "Expand All"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Question filter */}
          <QuestionFilter
            questions={questions}
            onFilterChange={setFilteredQuestions}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="space-y-6">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question, index) => {
                // Find the original index in the questions array
                const originalIndex = question.id; //questions.findIndex(q => q.id === question.id);

                return (
                  <div
                    key={question.id}
                    id={`question-${index}`}
                    className={`animate-fadeIn animate-delay-${Math.min(index, 3) * 100
                      } ${highlightedQuestion === originalIndex.toString()
                        ? "ring-2 ring-blue-400 rounded-xl"
                        : ""
                      }`}
                  >
                    <QuestionCard
                      key={question.id}
                      index={index}
                      id={question.id}
                      question={question.question}
                      answer={question.answer}
                      level={question.level}
                      onMarkAsRead={handleMarkAsRead}
                      onUndoRead={handleUndoMarkAsRead}
                      isRead={isQuestionRead(pathId || "", question.id)}
                      highlightQuery={searchQuery}
                      isExpanded={expandAll}
                      onEdit={(id, updatedQuestion, updatedAnswer) => {
                        // Implement your logic to update the question in your state
                        // For example:

                        const updatedQuestions = questions.map((q) =>
                          q.id === id
                            ? {
                              ...q,
                              question: updatedQuestion,
                              answer: updatedAnswer.replace(
                                /^```markdown\n?|```$/g,
                                ""
                              ),
                            }
                            : q
                        );
                        setFilteredQuestions(updatedQuestions);
                        // You might also want to update your backend here
                      }}
                      editable={false}
                    />
                  </div>
                );
              })
            ) : searchQuery ? (
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <p className="text-muted-foreground">
                  No questions match your search criteria.
                </p>
              </div>
            ) : (
              <div className="bg-card rounded-xl p-6 text-center border border-border">
                <p className="text-muted-foreground">
                  No questions available for this path yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <ScrollToTopButton />
    </div>
  );
};

export default LearningPath;

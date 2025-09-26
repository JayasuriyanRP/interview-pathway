import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import QuestionFilter from "../components/QuestionFilter";
import SubPathList from "../components/path/SubPathList";
import ShareButton from "../components/ShareButton";
import CopyUrlButton from "../components/CopyUrlButton";
import { usePathQuestions, useData } from "../hooks/useData";
import { useProgress } from "@/hooks/useProgress";
import { PathNavigator } from "@/utils/pathUtils";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { ChevronRight, BookOpen, RotateCcw } from "lucide-react";

const LearningPath = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [expandAll, setExpandAll] = useState(false);
  const scrollAttemptedRef = useRef(false);

  // Parse nested URL to get the actual pathId
  const pathSegments = location.pathname.replace('/path/', '').split('/').filter(Boolean);
  const pathId = PathNavigator.parseNestedUrl(pathSegments);

  const { paths, loading: pathsLoading } = useData();
  const { questions, loading, error } = usePathQuestions(pathId || "");
  const {
    markQuestionAsRead,
    undoMarkQuestionAsRead,
    markSubpathAsCompleted,
    isQuestionRead,
    isSubpathCompleted,
    getPathProgress,
    getLastReadQuestionId,
    resetProgress,
  } = useProgress();

  // Initialize PathNavigator and get current path info
  useEffect(() => {
    if (paths) {
      PathNavigator.initialize(paths);
    }
  }, [paths]);

  // Initialize filtered questions
  useEffect(() => {
    if (!loading && questions) {
      setFilteredQuestions(questions);
    }
  }, [questions, loading]);

  // Update document title and meta tags for sharing
  useEffect(() => {
    if (pathId && paths && !pathsLoading) {
      const currentPath = PathNavigator.findPath(pathId);
      if (currentPath) {
        const metaData = PathNavigator.generateMetaData(pathId);
        document.title = metaData.title;
        
        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
          metaDescription = document.createElement('meta');
          metaDescription.setAttribute('name', 'description');
          document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', metaData.description);

        // Update Open Graph tags for social sharing
        const updateMetaTag = (property: string, content: string) => {
          let metaTag = document.querySelector(`meta[property="${property}"]`);
          if (!metaTag) {
            metaTag = document.createElement('meta');
            metaTag.setAttribute('property', property);
            document.head.appendChild(metaTag);
          }
          metaTag.setAttribute('content', content);
        };

        updateMetaTag('og:title', metaData.title);
        updateMetaTag('og:description', metaData.description);
        updateMetaTag('og:url', metaData.url);
        updateMetaTag('og:type', 'website');
      }
    }
  }, [pathId, paths, pathsLoading]);

  // All hooks must be called before any conditional logic or early returns
  const currentPath = pathId ? PathNavigator.findPath(pathId) : null;
  const breadcrumbs = pathId ? PathNavigator.generateBreadcrumbs(pathId) : [];
  const hasQuestions = pathId ? PathNavigator.hasQuestions(pathId) : false;

  // Calculate progress
  const progress = pathId
    ? getPathProgress(pathId, questions)
    : { completed: 0, total: 0 };
  const progressPercentage =
    progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  // Handle event functions
  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
  };

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

    // Mark subpath as completed after all questions are marked
    setTimeout(() => {
      markSubpathAsCompleted(pathId);
    }, questions.length * 50);
  };

  const handleResetProgress = () => {
    if (pathId) {
      resetProgress(pathId);
    }
    // Reset scroll attempt flag so we can scroll again after reset
    scrollAttemptedRef.current = false;
  };

  // Now handle conditional logic and early returns after all hooks are called
  // Show loading state while paths or questions are loading
  if (pathsLoading || loading) return <LoadingState />;

  // Only validate path after paths data is fully loaded
  const shouldValidate = !pathsLoading && paths && paths.length > 0;
  if (pathId && shouldValidate && !PathNavigator.validatePath(pathId)) {
    return <Navigate to="/404" replace />;
  }

  // Show subpaths if current path has them and no questions
  if (currentPath && currentPath.subpaths && currentPath.subpaths.length > 0 && !hasQuestions) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header 
          title={currentPath.title}
          showBackButton 
          breadcrumbs={breadcrumbs}
        />
        
        <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">{currentPath.title}</h1>
              <p className="text-muted-foreground mt-2">{currentPath.description}</p>
              <Badge variant="secondary" className="mt-3">
                {currentPath.level}
              </Badge>
            </div>

            <SubPathList 
              subpaths={currentPath.subpaths}
              depth={0}
              onPathClick={(clickedPathId) => {
                // Handle path navigation if needed
                console.log('Path clicked:', clickedPathId);
              }}
            />
          </div>
        </main>
      </div>
    );
  }

  if (error) return <ErrorState />;
  if (!questions || questions.length === 0) {
    return <EmptyState message="No questions available for this path yet." onClearSearch={() => {}} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        title={currentPath?.title || "Learning Path"} 
        showBackButton 
        breadcrumbs={breadcrumbs}
      />

      <main className="flex-1 px-0 sm:px-6 md:px-8 lg:px-12 pb-12">
        <div className="container mx-auto max-w-3xl lg:max-w-5xl xl:max-w-6xl px-4 sm:px-6 md:px-8 lg:px-16 py-6 sm:py-8">
          <div className="mb-8 mt-2 animate-fadeIn">
            <div className="mb-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex flex-wrap gap-3">
                  <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
                    {currentPath?.level || "Unknown"}
                  </div>
                  <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {progress.completed} of {progress.total} Completed
                  </div>
                </div>
                <div className="flex gap-2">
                  {pathId && <CopyUrlButton />}
                  {pathId && <ShareButton pathId={pathId} />}
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {currentPath?.title || "Learning Path"}
            </h1>
            <p className="text-lg text-muted-foreground">{currentPath?.description || "Learn and practice with questions"}</p>

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
              filteredQuestions.map((question, index) => (
                <div
                  key={question.id}
                  id={`question-${index}`}
                  className={`animate-fadeIn animate-delay-${Math.min(index, 3) * 100}`}
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
                    }}
                    editable={false}
                  />
                </div>
              ))
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
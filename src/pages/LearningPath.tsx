
import React, { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { usePath, usePathQuestions } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { ChevronRight, Search, BookOpen, CheckCircle } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";
import SearchDialog from "../components/SearchDialog";
import { Button } from "../components/ui/button";

const LearningPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const [searchParams] = useSearchParams();
  const highlightedQuestion = searchParams.get("q");
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
  const [searchOpen, setSearchOpen] = useState(false);
  const {
    markQuestionAsRead,
    isQuestionRead,
    getPathProgress,
    markSubpathAsCompleted,
  } = useProgress();

  const loading = pathLoading || questionsLoading;
  const error = pathError || questionsError;

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

  const handleMarkAsRead = (questionId: number) => {
    if (pathId) {
      markQuestionAsRead(pathId, questionId);
    }
  };

  const handleMarkAllAsRead = () => {
    if (pathId) {
      questions.forEach((_, index) => {
        markQuestionAsRead(pathId, index);
      });
      if (isSubpath) {
        markSubpathAsCompleted(pathId);
      }
    }
  };

  // Calculate progress
  const progress = pathId ? getPathProgress(pathId, questions) : { completed: 0, total: 0 };
  const progressPercentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header title="Loading..." showBackButton={true} />
        <div className="container mx-auto max-w-3xl px-6 py-8">
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={path.title} showBackButton={true} />

      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-3xl">
          <div className="flex justify-between items-center mt-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              {isSubpath && parentPath && (
                <>
                  <Link
                    to={`/subpaths/${parentPath.id}`}
                    className="hover:text-gray-900"
                  >
                    {parentPath.title}
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="font-medium text-gray-900">{path.title}</span>
                </>
              )}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>

          <div className="mb-8 mt-2 animate-fadeIn">
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                {path.level}
              </div>
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                {questions.length} Questions
              </div>
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                {progress.completed} of {progress.total} Completed
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {path.title}
            </h1>
            <p className="text-lg text-gray-600">{path.description}</p>
            
            {/* Progress bar */}
            <div className="mt-6 mb-2">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-500 ease-in-out" 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <span>{progressPercentage.toFixed(0)}% Complete</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleMarkAllAsRead}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <BookOpen className="h-4 w-4 mr-1" />
                  Mark all as read
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <div
                  key={question.id}
                  id={`question-${index}`}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  } ${highlightedQuestion === index.toString() ? 'ring-2 ring-blue-400 rounded-xl' : ''}`}
                >
                  <QuestionCard
                    id={index}
                    question={question.question}
                    answer={question.answer}
                    onMarkAsRead={handleMarkAsRead}
                    isRead={isQuestionRead(pathId || '', index)}
                  />
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-gray-600">
                  No questions available for this path yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Search Dialog */}
      <SearchDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen} 
        currentPathId={pathId} 
      />
    </div>
  );
};

export default LearningPath;

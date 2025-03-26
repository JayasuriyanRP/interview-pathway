
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { usePath, usePathQuestions } from "../hooks/useData";
import { ChevronRight } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";

const LearningPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
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

  const loading = pathLoading || questionsLoading;
  const error = pathError || questionsError;

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
          {isSubpath && parentPath && (
            <div className="flex items-center gap-2 mt-4 mb-6 text-sm text-gray-600">
              <Link
                to={`/subpaths/${parentPath.id}`}
                className="hover:text-gray-900"
              >
                {parentPath.title}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-gray-900">{path.title}</span>
            </div>
          )}

          <div className="mb-10 mt-2 animate-fadeIn">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
              {path.level} • {questions.length} Questions
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {path.title}
            </h1>
            <p className="text-lg text-gray-600">{path.description}</p>
          </div>

          <div className="space-y-6">
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <div
                  key={question.id}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  }`}
                >
                  <QuestionCard
                    id={index}
                    question={question.question}
                    answer={question.answer}
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
    </div>
  );
};

export default LearningPath;

import React, { useState, useEffect, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { ModernHeader } from "../components/ModernHeader";
import ModernQuestionCard from "../components/ModernQuestionCard";
import QuestionFilter from "../components/QuestionFilter";
import { usePath, usePathQuestions } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { ChevronRight, BookOpen, RotateCcw, TrendingUp } from "lucide-react";
import { Skeleton } from "../components/ui/skeleton";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import ScrollToTopButton from "../components/ScrollToTopButton";

const LearningPath = () => {
  const [expandAll, setExpandAll] = useState(false);
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

  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const {
    markQuestionAsRead,
    undoMarkQuestionAsRead,
    isQuestionRead,
    getPathProgress,
    resetProgress,
  } = useProgress();

  const loading = pathLoading || questionsLoading;
  const error = pathError || questionsError;

  const progress = pathId ? getPathProgress(pathId, questions) : { completed: 0, total: 0 };
  const progressPercentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  const breadcrumbs = [];
  if (isSubpath && parentPath) {
    breadcrumbs.push({ title: parentPath.title, href: `/subpaths/${parentPath.id}` });
  }
  if (path) {
    breadcrumbs.push({ title: path.title });
  }

  useEffect(() => {
    if (!loading && questions) {
      setFilteredQuestions(questions);
    }
  }, [questions, loading]);

  const handleMarkAsRead = (questionId: string) => {
    if (pathId) markQuestionAsRead(pathId, questionId);
  };
  
  const handleUndoMarkAsRead = (questionId: string) => {
    if (pathId) undoMarkQuestionAsRead(pathId, questionId);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4 animate-pulse">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-destructive">Error loading data: {error.message}</p>
        </CardContent>
      </Card>
    );
  }

  if (!path) {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p>Learning path not found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <ModernHeader title={path.title} breadcrumbs={breadcrumbs} />

      {/* Path Header */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{path.level}</Badge>
              <Badge variant="outline">{progress.completed} of {progress.total} completed</Badge>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{path.title}</h1>
              <p className="text-muted-foreground">{path.description}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() => resetProgress(pathId)}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset Progress
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandAll(!expandAll)}
              >
                {expandAll ? "Collapse All" : "Expand All"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Question Filter */}
      <QuestionFilter
        questions={questions}
        onFilterChange={setFilteredQuestions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Questions */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <div key={question.id} id={`question-${index}`}>
              <ModernQuestionCard
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
                editable={false}
              />
            </div>
          ))
        ) : (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground">
                {searchQuery ? "No questions match your search." : "No questions available."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
      
      <ScrollToTopButton />
    </div>
  );
};

export default LearningPath;
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePath, usePathQuestions } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import FilterSearch from "../components/FilterSearch";
import QuestionFilter from "../components/QuestionFilter";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import HeaderWithAuth from "../components/HeaderWithAuth";
import EmptyState from "../components/EmptyState";

const LearningPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading: pathLoading, error: pathError } = usePath(pathId);
  const { questions, loading: questionsLoading, error: questionsError } = usePathQuestions(pathId);
  const { isQuestionRead, markPathAsCompleted } = useProgress();
  
  // Check if Clerk is available
  const hasClerkKey = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const { isSignedIn } = hasClerkKey ? useUser() : { isSignedIn: false };
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState<any[]>([]);
  const [filterState, setFilterState] = useState<string>("all");

  useEffect(() => {
    if (questions) {
      const lowerSearchQuery = searchQuery.toLowerCase();
      const filtered = questions.filter((q) => {
        const matchesSearch = q.question.toLowerCase().includes(lowerSearchQuery);
        const isQuestionReadState = pathId ? isQuestionRead(pathId, questions.indexOf(q)) : false;
        
        if (filterState === "all") return matchesSearch;
        if (filterState === "read") return matchesSearch && isQuestionReadState;
        if (filterState === "unread") return matchesSearch && !isQuestionReadState;
        
        return matchesSearch;
      });
      
      setFilteredQuestions(filtered);
    }
  }, [questions, searchQuery, filterState, pathId, isQuestionRead]);

  const handleMarkComplete = () => {
    if (pathId) {
      markPathAsCompleted(pathId);
    }
  };

  const loading = pathLoading || questionsLoading;
  const error = pathError || questionsError;

  if (loading) {
    return <LoadingState />;
  }

  if (error || !path) {
    return <ErrorState />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {isSignedIn ? (
        <HeaderWithAuth title={path.title} showBackButton={true} />
      ) : (
        <Header title={path.title} showBackButton={true} />
      )}

      <main className="flex-1 container max-w-4xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{path.title}</h1>
              <p className="text-muted-foreground mt-2">{path.description}</p>
            </div>
            
            {isSignedIn && (
              <Link to={`/path/${pathId}/add-question`}>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Question
                </Button>
              </Link>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
            <FilterSearch 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <QuestionFilter 
              filter={filterState}
              setFilter={setFilterState}
            />
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <EmptyState 
            message={
              searchQuery
                ? "No questions match your search criteria."
                : "No questions available for this learning path."
            }
            onClearSearch={searchQuery ? () => setSearchQuery("") : undefined}
            buttonText={isSignedIn ? "Add First Question" : undefined}
            buttonLink={isSignedIn ? `/path/${pathId}/add-question` : undefined}
          />
        ) : (
          <div className="space-y-4">
            {filteredQuestions.map((q, index) => (
              <QuestionCard
                key={index}
                id={index}
                question={q.question}
                answer={q.answer}
                isRead={pathId ? isQuestionRead(pathId, index) : false}
                isEditable={isSignedIn}
              />
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Button onClick={handleMarkComplete} variant="outline">
            Mark Path as Completed
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LearningPath;

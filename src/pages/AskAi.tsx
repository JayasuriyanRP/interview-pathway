
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ErrorState from "@/components/ErrorState";
import LoadingState from "@/components/LoadingState";

const AskAI = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // Check if a question was provided in the URL params
  useEffect(() => {
    const questionId = searchParams.get("q");
    const subpathId = searchParams.get("subpath");
    
    if (questionId && subpathId) {
      // Convert the number to string where there's a type mismatch
      const idx = String(questionId);
      // Load the question from the data provider
      // This is a placeholder and would need to be implemented
      setQuestion(`Question ${questionId} from subpath ${subpathId}`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // This is where you would call an API to get the answer
      // For now, we'll simulate a response with a timeout
      setTimeout(() => {
        setAnswer("This is a simulated AI response to your question.");
        setLoading(false);
      }, 1500);
    } catch (err) {
      setError("Failed to get an answer. Please try again.");
      setLoading(false);
    }
  };

  if (error) {
    return <ErrorState errorMessage={error} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header title="Ask AI" showBackButton={true} />
      <div className="container py-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Ask AI Assistant</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Textarea
              placeholder="Type your question here..."
              className="min-h-[120px]"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Processing..." : "Ask AI"}
          </Button>
        </form>

        {loading && <LoadingState />}

        {answer && !loading && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Answer:</h2>
            <div className="bg-muted p-4 rounded-lg">
              <p className="whitespace-pre-wrap">{answer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;

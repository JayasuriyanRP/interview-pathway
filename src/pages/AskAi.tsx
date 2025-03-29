
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../components/ui/use-toast";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const fetchAnswer = async () => {
    if (!question.trim()) {
      toast({
        title: "Empty Question",
        description: "Please enter a question to ask the AI.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      
      if (!res.ok) {
        throw new Error("Failed to get response from AI service");
      }
      
      const data = await res.json();

      if (data && data.answer) {
        // Add the new response
        setResponses((prev) => [
          ...prev,
          {
            question,
            answer: [{ type: "text", content: data.answer }],
          },
        ]);
        setQuestion(""); // Clear the input
      } else {
        toast({
          title: "AI Response Error",
          description: "The AI service returned an empty or invalid response.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again later.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      fetchAnswer();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="Ask AI" showBackButton={true} />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Ask AI About Technical Interviews
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Get instant answers to your technical interview questions. Our AI is trained on
            interview materials and can provide accurate, relevant information.
          </p>

          <Card className="mt-6">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col space-y-4">
                <Textarea
                  placeholder="Ask a technical interview question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="min-h-32 text-base sm:text-lg resize-none"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={fetchAnswer}
                    disabled={loading || !question.trim()}
                    className="px-4 py-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Thinking...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Ask Question
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Responses */}
          {responses.length > 0 && (
            <div className="mt-8 space-y-6">
              <h2 className="text-xl font-semibold">Responses</h2>
              <div className="space-y-6">
                {responses.map((response, index) => (
                  <QuestionCard
                    key={index}
                    id={index}
                    question={response.question}
                    answer={response.answer}
                    isRead={true}
                  />
                ))}
              </div>
            </div>
          )}

          {responses.length === 0 && !loading && (
            <div className="mt-10 text-center py-10">
              <p className="text-muted-foreground">
                No questions asked yet. Try asking something about technical interviews!
              </p>
            </div>
          )}

          <div className="mt-6 flex justify-center">
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AskAI;

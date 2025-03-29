
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Copy, Check, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { Card, CardContent } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../components/ui/use-toast";

export default function AIConverter() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const fetchAnswer = async () => {
    if (!question.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter content to convert.",
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
        throw new Error("Failed to get response from conversion service");
      }
      
      const data = await res.json();

      if (data && data.answer) {
        try {
          const parsedData = JSON.parse(data.answer);
          console.log("parsedData -", parsedData);
          
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            setResponse(parsedData);
          } else {
            setResponse(null);
            toast({
              title: "Format Error",
              description: "The response couldn't be properly formatted.",
              variant: "destructive",
            });
          }
        } catch (error) {
          console.error("Error parsing AI response JSON:", error);
          setResponse(null);
          toast({
            title: "Parsing Error",
            description: "The response couldn't be parsed as valid JSON.",
            variant: "destructive",
          });
        }
      } else {
        setResponse(null);
        toast({
          title: "Empty Response",
          description: "The service returned an empty response.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      toast({
        title: "Service Error",
        description: "Failed to get response. Try again later.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setCopied(true);
    toast({
      title: "Copied!",
      description: "JSON data copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="AI Converter" showBackButton={true} />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Convert From Skillora.ai Format
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Paste content from Skillora.ai to convert it into our Q&A format
          </p>

          <Card className="mt-6">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col space-y-4">
                <Textarea
                  placeholder="Paste your content from Skillora.ai here..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="min-h-40 text-base resize-none"
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
                        Converting...
                      </>
                    ) : (
                      <>
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Convert
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Converted Content */}
          {response && response.length > 0 && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Converted Result</h2>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{copied ? "Copied!" : "Copy JSON"}</span>
                </Button>
              </div>
              
              <div className="space-y-6">
                {response.map((item, index) => (
                  <QuestionCard
                    key={index}
                    id={index}
                    question={item.question}
                    answer={item.answer}
                    isRead={false}
                  />
                ))}
              </div>
            </div>
          )}

          {!response && !loading && (
            <div className="mt-10 text-center py-10">
              <p className="text-muted-foreground">
                No content converted yet. Paste some content and click Convert.
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

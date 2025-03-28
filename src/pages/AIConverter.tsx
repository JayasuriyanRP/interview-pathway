import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Copy, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import ThemeToggle from "../components/ThemeToggle";
import QuestionCard from "../components/QuestionCard";

export default function AIConverter() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchAnswer = async () => {
    if (!question.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();

      if (data && data.answer) {
        try {
          const parsedData = JSON.parse(data.answer); // First parse the response string
          //   const finalJson = JSON.parse(parsedData);

          console.log("parsedData -", parsedData);
          //   console.log("finalJson -", finalJson);
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            setResponse(parsedData); // Take the first question-answer pair
          } else {
            setResponse(null);
          }
          //   }
          //   // Extract JSON block from ```json ... ```
          //   const match = data.answer.match(/```json\s*([\s\S]*?)\s*```/);
          //   if (match && match[1]) {
          //     let cleanedJson = match[1].trim(); // Extract JSON

          //     // Fix multiline code blocks by replacing """ with valid JSON format
          //     cleanedJson = cleanedJson.replace(
          //       /"""([\s\S]*?)"""/g,
          //       (match, code) => {
          //         return JSON.stringify(code.replace(/\r?\n/g, "\\n")); // Convert to JSON-friendly string
          //       }
          //     );

          //     // Parse the fixed JSON
          //     const parsedAnswer = JSON.parse(data.answer);

          //     if (Array.isArray(parsedAnswer) && parsedAnswer.length > 0) {
          //       setResponse(parsedAnswer[0]); // Take the first question-answer pair
          //     } else {
          //       setResponse(null);
          //     }
          //   } else {
          //     console.error("No valid JSON found in response.");
          //     setResponse(null);
          //   }
        } catch (error) {
          console.error("Error parsing AI response JSON:", error);
          setResponse(null);
        }
      } else {
        setResponse(null);
      }
    } catch (error) {
      console.error("Error fetching answer:", error);
      setResponse({ error: "Failed to get response. Try again." });
    }
    setLoading(false);
  };

  const handleCopy = () => {
    if (!response) return;
    navigator.clipboard.writeText(JSON.stringify(response, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6 transition-colors duration-300">
      {/* Header Section */}
      <div className="w-full max-w-3xl flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Q&A JSON Formatter</h1>
        <ThemeToggle />
      </div>

      {/* Question Input */}
      <textarea
        className="w-full max-w-lg p-3 border rounded-md shadow-sm bg-card border-border focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
      />

      {/* Submit Button */}
      <Button
        onClick={fetchAnswer}
        disabled={loading}
        className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
      >
        {loading && <Loader2 className="animate-spin h-5 w-5" />}
        {loading ? "Generating..." : "Submit"}
      </Button>

      {/* AI Response in QuestionCard */}
      {response && response.length > 0 && (
        <div className="w-full max-w-lg mt-6">
          {response.map((item, index) => (
            <QuestionCard
              key={index}
              id={index}
              question={item.question}
              answer={item.answer}
              isRead={false}
            />
          ))}

          {/* Copy Button */}
          <div className="relative mt-2 flex justify-end">
            <button
              onClick={handleCopy}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded flex items-center gap-1"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              <span className="text-sm">
                {copied ? "Copied!" : "Copy JSON"}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Back to Home Button */}
      <Link to="/">
        <Button variant="outline" className="mt-6">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

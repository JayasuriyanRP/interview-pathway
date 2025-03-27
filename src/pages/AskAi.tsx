import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import ThemeToggle from "../components/ThemeToggle";

export default function AskAI() {
    const [question, setQuestion] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

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
            setResponse(data);
        } catch (error) {
            console.error("Error fetching answer:", error);
            setResponse({ error: "Failed to get response. Try again." });
        }
        setLoading(false);
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

            {/* AI Response */}
            {response && (
                <div className="mt-6 p-4 bg-gray-800 text-white rounded-lg text-sm w-full max-w-lg overflow-auto">
                    <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Loader2,
  Copy,
  Check,
  ArrowRight,
  Upload,
  Download,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";

export default function AIConverter() {
  const [file, setFile] = useState(null);
  const [responseFile, setResponseFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const fetchAnswer = async () => {
    if (!file) {
      toast({
        title: "No File Selected",
        description: "Please upload a JSON file to process.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to get response from processing service");
      }

      const blob = await res.blob();
      const fileURL = window.URL.createObjectURL(blob);
      setResponseFile(fileURL);
      toast({ title: "Success", description: "File processed successfully!" });
    } catch (error) {
      console.error("Error processing file:", error);
      toast({
        title: "Service Error",
        description: "Failed to process file. Try again later.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="AI Converter" showBackButton={true} />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Upload JSON for AI Processing
          </h1>

          <Card className="mt-6">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col space-y-4">
                <label htmlFor="file-upload" className="sr-only">
                  Upload JSON file
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".json"
                  onChange={handleFileChange}
                  title="Upload a JSON file"
                  aria-label="Upload JSON file"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={fetchAnswer}
                    disabled={loading || !file}
                    className="px-4 py-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload & Process
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {responseFile && (
            <div className="mt-8 space-y-6 text-center">
              <h2 className="text-xl font-semibold">Download Processed File</h2>
              <Button
                asChild
                variant="outline"
                className="flex items-center gap-2"
              >
                <a href={responseFile} download="processed_questions.json">
                  <Download className="w-4 h-4" /> Download JSON
                </a>
              </Button>
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
}

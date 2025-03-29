
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, RefreshCcw, Check, ArrowRight } from "lucide-react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";
import EmptyState from "../components/EmptyState";

const ImportFromDrive = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  // Simulate connecting to Google Drive
  const handleConnect = () => {
    setIsLoading(true);
    // In a real implementation, this would authenticate with Google Drive API
    setTimeout(() => {
      setIsLoading(false);
      setFiles([
        { id: '1', name: 'learning_paths.json', modifiedTime: '2023-06-15T14:30:00Z' },
        { id: '2', name: 'react_questions.json', modifiedTime: '2023-07-22T09:45:00Z' },
        { id: '3', name: 'nodejs_paths.json', modifiedTime: '2023-08-05T16:20:00Z' }
      ]);
      toast({
        title: "Connected to Google Drive",
        description: "Select a JSON file to import.",
      });
    }, 1500);
  };

  const handleImport = () => {
    if (!selectedFile) return;
    
    setIsLoading(true);
    // In a real implementation, this would download and process the file
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "File imported successfully",
        description: "The learning paths have been added to your account.",
      });
      navigate("/dashboard");
    }, 1500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="Import from Google Drive" showBackButton />
      
      <main className="flex-1 container mx-auto max-w-3xl px-4 py-8">
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Import Learning Paths from Google Drive</h1>
            <p className="text-muted-foreground">
              Select a JSON file containing learning paths or questions to import into your account.
            </p>
          </div>

          {files.length === 0 ? (
            <Card className="p-8 flex flex-col items-center justify-center text-center">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Connect to Google Drive</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Connect to your Google Drive account to access your JSON files.
              </p>
              <Button onClick={handleConnect} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  "Connect to Google Drive"
                )}
              </Button>
            </Card>
          ) : (
            <>
              <h2 className="text-lg font-semibold mt-6 mb-3">Available JSON Files</h2>
              <div className="space-y-3">
                {files.map((file) => (
                  <Card
                    key={file.id}
                    className={`cursor-pointer transition-all ${
                      selectedFile === file.id
                        ? "border-indigo-500 ring-1 ring-indigo-500"
                        : "hover:border-indigo-300"
                    }`}
                    onClick={() => setSelectedFile(file.id)}
                  >
                    <CardContent className="flex items-center p-4">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-indigo-500 mr-2" />
                          <span className="font-medium">{file.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Last modified: {formatDate(file.modifiedTime)}
                        </p>
                      </div>
                      {selectedFile === file.id && (
                        <Check className="h-5 w-5 text-indigo-500" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  onClick={handleImport}
                  disabled={!selectedFile || isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCcw className="mr-2 h-4 w-4 animate-spin" />
                      Importing...
                    </>
                  ) : (
                    <>
                      Import Selected File
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ImportFromDrive;

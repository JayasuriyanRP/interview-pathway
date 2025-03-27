import React, { useState } from "react";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { Search, RotateCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  const { paths, loading, error } = useData();
  const { getPathProgress, isPathCompleted, resetProgress } = useProgress();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter paths based on search query
  const getFilteredPaths = () => {
    if (!searchQuery.trim()) return paths;
    
    const terms = searchQuery.toLowerCase().split(" ");
    
    return paths.filter(path => {
      return terms.every(term => 
        path.title.toLowerCase().includes(term) || 
        path.description.toLowerCase().includes(term)
      );
    });
  };

  const filteredPaths = getFilteredPaths();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-pulse">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center text-red-500">
          <p className="text-lg font-medium">Error loading data</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 mt-8">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground animate-fadeIn">
              Interview Preparation
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn text-foreground">
                Master Your Technical Interviews
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fadeIn animate-delay-100">
                Comprehensive learning paths with expert-curated questions and answers to help you prepare for your next technical interview.
              </p>
              <div className="flex flex-wrap justify-center gap-3 animate-fadeIn animate-delay-200">
                <Button 
                  onClick={() => resetProgress()}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset Progress
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          {/* Search input */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search across all topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg w-full rounded-lg border border-input"
              />
            </div>
            {searchQuery && filteredPaths.length === 0 && (
              <div className="mt-4 p-6 text-center bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">No learning paths match your search criteria.</p>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery("")}
                  className="mt-2"
                >
                  Clear search
                </Button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredPaths.map((path, index) => {
              // Get subpaths count directly from the JSON data
              const subpathCount = path.subpaths ? path.subpaths.length : 0;
              const hasSubpaths = subpathCount > 0;
              
              // For main paths, progress is calculated differently
              const isCompleted = isPathCompleted(path.id);
              const subpathsCompleted = path.subpaths 
                ? path.subpaths.filter(subpath => isPathCompleted(subpath.id)).length 
                : 0;
              
              return (
                <div
                  key={path.id}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  }`}
                >
                  <PathCard 
                    {...path} 
                    hasSubpaths={hasSubpaths}
                    isCompleted={isCompleted}
                    completed={subpathsCompleted}
                    total={subpathCount}
                    count={subpathCount} // Use the actual count from JSON
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

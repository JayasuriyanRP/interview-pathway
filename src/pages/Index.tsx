
import React, { useState } from "react";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import SearchDialog from "../components/SearchDialog";

const Index = () => {
  const { paths, loading, error } = useData();
  const { getPathProgress, isPathCompleted } = useProgress();
  const [searchOpen, setSearchOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-lg font-medium">Error loading data</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 mt-8">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-800 animate-fadeIn">
              Interview Preparation
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                Master Your Technical Interviews
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 animate-fadeIn animate-delay-100">
                Comprehensive learning paths with expert-curated questions and answers to help you prepare for your next technical interview.
              </p>
              <Button 
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 animate-fadeIn animate-delay-200"
              >
                <Search className="h-4 w-4" />
                Search across all topics
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {paths.map((path, index) => {
              // Get subpaths count
              const hasSubpaths = path.subpaths && path.subpaths.length > 0;
              
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
                    total={path.subpaths ? path.subpaths.length : 0}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </main>
      
      {/* Search Dialog */}
      <SearchDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
      />
    </div>
  );
};

export default Index;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { usePath, useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { Search, RotateCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import { Input } from "@/components/ui/input";
import ThemeToggle from "../components/ThemeToggle";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading: pathLoading, error } = usePath(pathId);
  const { questions, loading: questionsLoading } = useData();
  const { getPathProgress, isSubpathCompleted, resetProgress } = useProgress();
  const [searchQuery, setSearchQuery] = useState("");
  
  const loading = pathLoading || questionsLoading;

  // Group subpaths by their first segment to create nested structure
  const getGroupedSubpaths = () => {
    if (!path || !path.subpaths) return {};
    
    const grouped: Record<string, any[]> = {};
    
    path.subpaths.forEach(subpath => {
      const parts = subpath.id.split('-');
      if (parts.length > 2) {
        // This is a nested subpath
        const groupKey = parts.slice(0, 2).join('-');
        if (!grouped[groupKey]) {
          grouped[groupKey] = [];
        }
        grouped[groupKey].push(subpath);
      } else {
        // This is a top-level subpath
        const groupKey = subpath.id;
        if (!grouped[groupKey]) {
          grouped[groupKey] = [];
        }
      }
    });
    
    return grouped;
  };

  const groupedSubpaths = getGroupedSubpaths();
  
  // Get parent subpaths (those that have children)
  const getParentSubpaths = () => {
    if (!path || !path.subpaths) return [];
    
    const uniqueParents = new Set<string>();
    path.subpaths.forEach(subpath => {
      const parts = subpath.id.split('-');
      if (parts.length > 2) {
        const parentId = parts.slice(0, 2).join('-');
        uniqueParents.add(parentId);
      }
    });
    
    return path.subpaths.filter(subpath => 
      uniqueParents.has(subpath.id) || !Array.from(uniqueParents).some(parent => 
        subpath.id.startsWith(parent) && subpath.id !== parent
      )
    );
  };

  const parentSubpaths = getParentSubpaths();

  // Filter subpaths based on search query
  const getFilteredSubpaths = () => {
    if (!searchQuery.trim()) return parentSubpaths;
    
    const terms = searchQuery.toLowerCase().split(" ");
    
    return parentSubpaths.filter(subpath => {
      return terms.every(term => 
        subpath.title.toLowerCase().includes(term) || 
        subpath.description.toLowerCase().includes(term)
      );
    });
  };

  const filteredSubpaths = getFilteredSubpaths();

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Loading..." showBackButton={true} />
        <div className="container mx-auto max-w-5xl px-6 py-8">
          <div className="mb-10">
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-10 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
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

  if (!path || !path.subpaths || path.subpaths.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">
            No subpaths found for this learning path
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title={path.title} showBackButton={true} />

      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center mt-4 mb-6">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              {path.level} • {path.subpaths.length} Subpaths
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => resetProgress()}
                title="Reset all progress"
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          <div className="mb-8 mt-2 animate-fadeIn">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {path.title}
            </h1>
            <p className="text-lg text-muted-foreground">{path.description}</p>
          </div>

          {/* Search input */}
          <div className="mb-6 relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search subpaths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-input"
              />
            </div>
            {searchQuery && filteredSubpaths.length === 0 && (
              <div className="mt-4 p-6 text-center bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">No subpaths match your search criteria.</p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSubpaths.map((subpath, index) => {
              // Get actual question count from questions object
              const actualCount = questions[subpath.id] ? questions[subpath.id].length : 0;
              const hasChildren = groupedSubpaths[subpath.id] && groupedSubpaths[subpath.id].length > 0;
              
              // Calculate progress
              const { completed, total } = getPathProgress(subpath.id, questions[subpath.id] || []);
              const isCompleted = isSubpathCompleted(subpath.id);
              
              // If this is a subpath with children, count should be the number of children
              const count = hasChildren ? groupedSubpaths[subpath.id].length : actualCount;
              
              return (
                <div
                  key={subpath.id}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  }`}
                >
                  <PathCard 
                    {...subpath} 
                    count={count}
                    icon="List" 
                    hasSubpaths={hasChildren}
                    completed={completed}
                    total={total}
                    isCompleted={isCompleted}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubpathsList;

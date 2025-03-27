
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { usePath, useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Skeleton } from "../components/ui/skeleton";
import SearchDialog from "../components/SearchDialog";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading: pathLoading, error } = usePath(pathId);
  const { questions, loading: questionsLoading } = useData();
  const { getPathProgress, isSubpathCompleted } = useProgress();
  const [searchOpen, setSearchOpen] = useState(false);
  
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={path.title} showBackButton={true} />

      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center mt-4 mb-6">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
              {path.level} • {path.subpaths.length} Subpaths
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1"
            >
              <Search className="h-4 w-4" />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>

          <div className="mb-8 mt-2 animate-fadeIn">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {path.title}
            </h1>
            <p className="text-lg text-gray-600">{path.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {parentSubpaths.map((subpath, index) => {
              // Get actual question count from questions object
              const actualCount = questions[subpath.id] ? questions[subpath.id].length : 0;
              const hasChildren = groupedSubpaths[subpath.id] && groupedSubpaths[subpath.id].length > 0;
              
              // Calculate progress
              const { completed, total } = getPathProgress(subpath.id, questions[subpath.id] || []);
              const isCompleted = isSubpathCompleted(subpath.id);
              
              return (
                <div
                  key={subpath.id}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  }`}
                >
                  <PathCard 
                    {...subpath} 
                    count={actualCount}
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
      
      {/* Search Dialog */}
      <SearchDialog 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
        currentPathId={pathId}
      />
    </div>
  );
};

export default SubpathsList;

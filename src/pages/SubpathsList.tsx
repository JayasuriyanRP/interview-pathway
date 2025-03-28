
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NestedPathCard from "../components/NestedPathCard";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import FilterSearch from "../components/FilterSearch";
import PathHeader from "../components/PathHeader";
import EmptyState from "../components/EmptyState";
import { usePath, useData } from "../hooks/useData";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading, error } = usePath(pathId);
  const { paths } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [breadcrumbPath, setBreadcrumbPath] = useState<{ id: string; title: string }[]>([]);

  // Build breadcrumb path
  useEffect(() => {
    if (paths && pathId) {
      const buildPath = (
        allPaths: any[],
        targetId: string,
        currentPath: { id: string; title: string }[] = []
      ): { id: string; title: string }[] | null => {
        // Check in top-level paths
        for (const item of allPaths) {
          if (item.id === targetId) {
            return [...currentPath, { id: item.id, title: item.title }];
          }
          
          // Check in subpaths if they exist
          if (item.subpaths && item.subpaths.length > 0) {
            const pathWithSubpath = buildPath(
              item.subpaths,
              targetId,
              [...currentPath, { id: item.id, title: item.title }]
            );
            if (pathWithSubpath) return pathWithSubpath;
          }
        }
        return null;
      };
      
      const result = buildPath(paths, pathId);
      if (result) {
        // Remove the last item as it's the current path
        setBreadcrumbPath(result.slice(0, -1));
      }
    }
  }, [paths, pathId]);

  const handlePathClick = (newPathId: string) => {
    // This helps with tracking navigation through nested paths
    console.log(`Navigating to path: ${newPathId}`);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !path || !path.subpaths || path.subpaths.length === 0) {
    return <ErrorState />;
  }

  // Filter subpaths based on search query
  const filteredSubpaths = searchQuery.trim()
    ? path.subpaths.filter(
        (subpath) =>
          subpath.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          subpath.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : path.subpaths;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header 
        title={path?.title} 
        showBackButton={true} 
        path={breadcrumbPath}
      />

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-6">
        <div className="space-y-6">
          {/* Header Section */}
          <PathHeader 
            title={path.title}
            description={path.description}
            level={path.level}
            totalSubpaths={filteredSubpaths.length}
          />

          {/* Search and Filter */}
          <FilterSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Empty State */}
          {filteredSubpaths.length === 0 && (
            <EmptyState 
              message="No subpaths found matching your search criteria."
              onClearSearch={() => setSearchQuery("")}
            />
          )}

          {/* Nested Subpath Cards */}
          <div className="space-y-4">
            {filteredSubpaths.map((subpath) => (
              <NestedPathCard 
                key={subpath.id} 
                path={subpath} 
                onPathClick={handlePathClick}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubpathsList;

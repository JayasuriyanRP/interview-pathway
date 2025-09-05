
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SubPathList from "../components/path/SubPathList";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import FilterSearch from "../components/FilterSearch";
import PathHeader from "../components/PathHeader";
import EmptyState from "../components/EmptyState";
import { usePath, useData } from "../hooks/useData";
import { PathNavigator } from "@/utils/pathUtils";
import { levelOrder } from "@/lib/utils";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading, error } = usePath(pathId);
  const { paths } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  // Initialize PathNavigator and get breadcrumbs
  useEffect(() => {
    if (paths) {
      PathNavigator.initialize(paths);
    }
  }, [paths]);

  const breadcrumbs = pathId ? PathNavigator.generateBreadcrumbs(pathId) : [];

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

  // Ensure all subpaths have the required count property
  const subpathsWithCount = path.subpaths.map(subpath => ({
    ...subpath,
    count: subpath.count || 0
  }));

  const sortedSubpaths = subpathsWithCount.sort((a, b) => {
    return levelOrder[a.level] - levelOrder[b.level];
  });

  // Filter subpaths based on search query and level filter
  const filteredSubpaths = sortedSubpaths.filter((subpath) => {
    const matchesSearch =
      searchQuery === "" ||
      subpath.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      subpath.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel =
      !levelFilter ||
      subpath.level === levelFilter ||
      subpath.level === "All Levels";

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header title={path?.title} showBackButton={true} breadcrumbs={breadcrumbs} />

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-6">
        <div className="space-y-6">
          {/* Header Section */}
          <PathHeader
            title={path.title}
            description={path.description}
            level={path.level}
            totalSubpaths={path.subpaths.length}
          />

          {/* Search and Filter */}
          <FilterSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            levelFilter={levelFilter}
            setLevelFilter={setLevelFilter}
          />

          {/* Empty State */}
          {filteredSubpaths.length === 0 && (
            <EmptyState
              message="No subpaths found matching your search criteria."
              onClearSearch={() => {
                setSearchQuery("");
                setLevelFilter(null);
              }}
            />
          )}

          {/* Nested Subpath Cards */}
          <div className="space-y-4">
            <SubPathList 
              subpaths={filteredSubpaths}
              depth={0}
              onPathClick={handlePathClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubpathsList;

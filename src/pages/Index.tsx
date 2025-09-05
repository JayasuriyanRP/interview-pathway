import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RootPathCard from "../components/path/RootPathCard";
import { useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { PathNavigator } from "@/utils/pathUtils";
import { Search, RotateCcw, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const Index = () => {
  const { paths, loading, error } = useData();
  const { getPathProgress, isPathCompleted, resetProgress } = useProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  // Initialize PathNavigator with paths data
  useEffect(() => {
    if (paths) {
      PathNavigator.initialize(paths);
    }
  }, [paths]);

  // Filter paths based on search query and level filter
  const getFilteredPaths = () => {
    if (!paths) return [];

    return paths.filter((path) => {
      const matchesSearch =
        !searchQuery.trim() ||
        path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        path.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel =
        !levelFilter || path.level.toLowerCase() === levelFilter.toLowerCase();

      return matchesSearch && matchesLevel;
    });
  };

  const filteredPaths = getFilteredPaths();

  const clearFilters = () => {
    setSearchQuery("");
    setLevelFilter(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-pulse">
          <div className="h-8 w-32 bg-secondary rounded-md mx-auto mb-4"></div>
          <div className="h-4 w-48 bg-secondary rounded-md mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-100 text-red-600 mx-auto mb-4">
              <span className="text-xl">!</span>
            </div>
            <h2 className="text-lg font-medium mb-2">Error loading data</h2>
            <CardDescription>{error.message}</CardDescription>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="mt-4"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 animate-fadeIn">
              Interview Preparation
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn text-foreground">
                Master Your Technical Interviews
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fadeIn animate-delay-100">
                Comprehensive learning paths with expert-curated questions and
                answers to help you prepare for your next technical interview.
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

                <Link to="/ask-ai">
                  <Button
                    variant="default"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Ask AI - With Local LLM
                  </Button>
                </Link>
                <Link to="/convert-ai">
                  <Button
                    variant="default"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Convert from skillora.ai with Local LLM
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Search and filter section */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search across all topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg w-full rounded-lg border border-input"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="self-stretch sm:self-auto gap-2"
                  >
                    <Filter className="h-4 w-4" />
                    <span>
                      {levelFilter
                        ? `Level: ${levelFilter}`
                        : "Filter by Level"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLevelFilter(null)}>
                    All Levels
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("Beginner")}>
                    Beginner
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLevelFilter("Intermediate")}
                  >
                    Intermediate
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("Advanced")}>
                    Advanced
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Empty state */}
            {searchQuery || levelFilter ? (
              <div className="flex justify-between items-center mt-3 text-sm">
                <div className="text-muted-foreground">
                  {filteredPaths.length}{" "}
                  {filteredPaths.length === 1 ? "path" : "paths"} found
                </div>
                {(searchQuery || levelFilter) && (
                  <Button variant="link" size="sm" onClick={clearFilters}>
                    Clear filters
                  </Button>
                )}
              </div>
            ) : null}

            {filteredPaths.length === 0 && (searchQuery || levelFilter) && (
              <div className="mt-4 p-6 text-center bg-card rounded-xl border border-border">
                <p className="text-muted-foreground">
                  No learning paths match your search criteria.
                </p>
                <Button variant="link" onClick={clearFilters} className="mt-2">
                  Clear filters
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path, index) => {
              // Get subpaths count directly from the JSON data
              const subpathCount = path.subpaths ? path.subpaths.length : 0;
              const hasSubpaths = subpathCount > 0;

              // For main paths, progress is calculated differently
              const isCompleted = isPathCompleted(path.id);
              const subpathsCompleted = path.subpaths
                ? path.subpaths.filter((subpath) => isPathCompleted(subpath.id))
                    .length
                : 0;

              return (
                <div
                  key={path.id}
                  className={`animate-fadeIn animate-delay-${
                    Math.min(index, 3) * 100
                  }`}
                >
                  <RootPathCard
                    path={path}
                    progressData={{
                      completed: subpathsCompleted,
                      total: subpathCount
                    }}
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

export default Index;

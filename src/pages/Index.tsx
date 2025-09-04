import React, { useState } from "react";
import { ModernHeader } from "../components/ModernHeader";
import ModernPathCard from "../components/ModernPathCard";
import { useData } from "../hooks/useData";
import { useProgress } from "../hooks/useProgress";
import { Search, RotateCcw, Filter, TrendingUp, BookOpen, Users, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const { paths, loading, error } = useData();
  const { getPathProgress, isPathCompleted, resetProgress } = useProgress();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

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

  // Calculate stats
  const totalPaths = paths?.length || 0;
  const completedPaths = paths?.filter(path => isPathCompleted(path.id)).length || 0;
  const completionRate = totalPaths > 0 ? Math.round((completedPaths / totalPaths) * 100) : 0;

  const clearFilters = () => {
    setSearchQuery("");
    setLevelFilter(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 animate-pulse">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="h-6 w-32 bg-muted rounded mx-auto"></div>
            <div className="h-4 w-48 bg-muted rounded mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive mx-auto mb-4 flex items-center justify-center">
              <span className="text-xl">!</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Error loading data</h2>
            <p className="text-muted-foreground mb-4">{error.message}</p>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ModernHeader />

      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <Badge variant="secondary" className="px-4 py-2">
            🚀 Interview Preparation Platform
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
            Master Your Technical Interviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive learning paths with expert-curated questions and answers to help you ace your next technical interview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{totalPaths}</div>
              <div className="text-sm text-muted-foreground">Learning Paths</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">{completionRate}%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardContent className="pt-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-amber-600" />
              <div className="text-2xl font-bold">{completedPaths}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => resetProgress()}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Progress
          </Button>

          <Link to="/ask-ai">
            <Button className="gap-2">
              Ask AI Assistant
            </Button>
          </Link>
          
          <Link to="/convert-ai">
            <Button variant="secondary" className="gap-2">
              Convert from Skillora.ai
            </Button>
          </Link>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2 min-w-[140px] h-12">
                    <Filter className="w-4 h-4" />
                    {levelFilter || "All Levels"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLevelFilter(null)}>
                    All Levels
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("Beginner")}>
                    Beginner
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("Intermediate")}>
                    Intermediate
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLevelFilter("Advanced")}>
                    Advanced
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {(searchQuery || levelFilter) && (
                <Button variant="ghost" onClick={clearFilters} className="h-12">
                  Clear
                </Button>
              )}
            </div>
          </div>

          {(searchQuery || levelFilter) && (
            <div className="mt-4 text-sm text-muted-foreground">
              {filteredPaths.length} {filteredPaths.length === 1 ? 'path' : 'paths'} found
            </div>
          )}
        </CardContent>
      </Card>

      {/* Learning Paths Grid */}
      {filteredPaths.length === 0 ? (
        <Card className="border-dashed border-2">
          <CardContent className="pt-12 pb-12 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No learning paths found</h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery || levelFilter 
                ? "Try adjusting your search criteria"
                : "No learning paths available at the moment"
              }
            </p>
            {(searchQuery || levelFilter) && (
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredPaths.map((path, index) => {
            const subpathCount = path.subpaths ? path.subpaths.length : 0;
            const hasSubpaths = subpathCount > 0;
            const isCompleted = isPathCompleted(path.id);
            const subpathsCompleted = path.subpaths
              ? path.subpaths.filter((subpath) => isPathCompleted(subpath.id)).length
              : 0;

            return (
              <div
                key={path.id}
                className={`animate-fadeIn`}
                style={{ animationDelay: `${Math.min(index, 6) * 100}ms` }}
              >
                <ModernPathCard
                  {...path}
                  hasSubpaths={hasSubpaths}
                  isCompleted={isCompleted}
                  completed={subpathsCompleted}
                  total={subpathCount}
                  count={subpathCount}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Index;

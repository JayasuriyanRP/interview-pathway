
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { useUser } from "@clerk/clerk-react";
import { useData } from "../hooks/useData";
import LoadingState from "../components/LoadingState";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header";
import HeaderWithAuth from "../components/HeaderWithAuth";
import PathCard from "../components/PathCard";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";

const Index = () => {
  const { paths, loading, error } = useData();
  const { isPathCompleted, getPathProgress } = useProgress();
  
  // Check if Clerk is available before using useUser
  const hasClerkKey = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  const userHook = hasClerkKey ? useUser() : { isSignedIn: false };
  const { isSignedIn } = userHook;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPaths, setFilteredPaths] = useState<any[]>([]);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    level: [] as string[],
    completed: null as boolean | null,
  });

  useEffect(() => {
    if (paths) {
      const lowerSearchQuery = searchQuery.toLowerCase();
      
      // Apply search and filters
      const filtered = paths.filter((path) => {
        // Search matching
        const matchesSearch =
          path.title.toLowerCase().includes(lowerSearchQuery) ||
          path.description.toLowerCase().includes(lowerSearchQuery);
        
        // Level filter matching
        const matchesLevel =
          filters.level.length === 0 || filters.level.includes(path.level);
        
        // Completion status matching
        const isCompleted = isPathCompleted(path.id);
        const matchesCompleted =
          filters.completed === null || filters.completed === isCompleted;
        
        return matchesSearch && matchesLevel && matchesCompleted;
      });
      
      setFilteredPaths(filtered);
    }
  }, [paths, searchQuery, filters, isPathCompleted]);

  const handleLevelFilter = (level: string) => {
    setFilters((prev) => {
      const currentLevels = [...prev.level];
      if (currentLevels.includes(level)) {
        return {
          ...prev,
          level: currentLevels.filter((l) => l !== level),
        };
      } else {
        return {
          ...prev,
          level: [...currentLevels, level],
        };
      }
    });
  };

  const handleCompletedFilter = (completed: boolean | null) => {
    setFilters((prev) => ({
      ...prev,
      completed,
    }));
  };

  const resetFilters = () => {
    setFilters({
      level: [],
      completed: null,
    });
    setFilterDialogOpen(false);
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error || !paths) {
    return <ErrorState />;
  }

  // Determine if any filters are active
  const filtersActive =
    filters.level.length > 0 || filters.completed !== null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {isSignedIn ? (
        <HeaderWithAuth />
      ) : (
        <Header />
      )}

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Learning Paths</h1>
              <p className="text-muted-foreground mt-1">
                Explore structured learning paths to master different technologies
              </p>
            </div>

            {isSignedIn && (
              <Link to="/dashboard">
                <Button>My Dashboard</Button>
              </Link>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant={filtersActive ? "default" : "outline"}
                  className="flex-shrink-0"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {filtersActive ? "Filters Active" : "Filter"}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Filter Learning Paths</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Difficulty Level</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Beginner", "Intermediate", "Advanced"].map((level) => (
                        <Button
                          key={level}
                          variant={
                            filters.level.includes(level)
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() => handleLevelFilter(level)}
                        >
                          {level}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Completion Status</h3>
                    <div className="flex gap-2">
                      <Button
                        variant={
                          filters.completed === true ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => handleCompletedFilter(true)}
                      >
                        Completed
                      </Button>
                      <Button
                        variant={
                          filters.completed === false ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => handleCompletedFilter(false)}
                      >
                        Not Completed
                      </Button>
                      <Button
                        variant={
                          filters.completed === null ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => handleCompletedFilter(null)}
                      >
                        All
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button variant="ghost" onClick={resetFilters}>
                      Reset Filters
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {filteredPaths.length === 0 ? (
          <EmptyState
            message={
              filtersActive
                ? "No paths match your current filters."
                : "No learning paths found matching your search."
            }
            onClearSearch={() => {
              setSearchQuery("");
              resetFilters();
            }}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPaths.map((path) => {
              const hasSubpaths = path.subpaths && path.subpaths.length > 0;
              const { questions } = path;
              const progress = getPathProgress(path.id, questions);
              const isCompleted = isPathCompleted(path.id);

              return (
                <PathCard
                  key={path.id}
                  id={path.id}
                  title={path.title}
                  description={path.description}
                  icon={path.icon || "Code"}
                  count={hasSubpaths ? path.subpaths.length : (questions?.length || 0)}
                  level={path.level}
                  hasSubpaths={hasSubpaths}
                  completed={progress.completed}
                  total={progress.total}
                  isCompleted={isCompleted}
                />
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;

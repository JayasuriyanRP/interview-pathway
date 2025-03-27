import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import NestedPathCard from "../components/NestedPathCard";
import { usePath } from "../hooks/useData";
import { Skeleton } from "../components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search, RotateCcw } from "lucide-react";
import { Button } from "../components/ui/button";
import ThemeToggle from "../components/ThemeToggle";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading, error } = usePath(pathId);
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header title="Loading..." showBackButton={true} />
        <div className="container mx-auto max-w-5xl px-6 py-8">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-48 w-full rounded-xl mt-4" />
        </div>
      </div>
    );
  }

  if (error || !path || !path.subpaths || path.subpaths.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-medium">
          No subpaths found for this learning path
        </p>
      </div>
    );
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
      <Header title={path?.title} showBackButton={true} />

      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center mt-4 mb-6">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground">
              {path.level} • {filteredSubpaths.length} Subpaths
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                title="Reset all progress"
                className="text-red-600 hover:text-red-800"
              >
                <RotateCcw className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Reset</span>
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Search input */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search subpaths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full rounded-lg border"
              />
            </div>
          </div>

          {/* Nested Subpath Cards */}
          <div className="space-y-4">
            {filteredSubpaths.map((subpath) => (
              <NestedPathCard key={subpath.id} path={subpath} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubpathsList;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NestedPathCard from "../components/NestedPathCard";
import { usePath, useData } from "../hooks/useData";
import { Skeleton } from "../components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search, RotateCcw, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading, error } = usePath(pathId);
  const { paths } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [breadcrumbPath, setBreadcrumbPath] = useState<{ id: string; title: string }[]>([]);
  const navigate = useNavigate();

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
    return (
      <div className="min-h-screen bg-background">
        <Header title="Loading..." showBackButton={true} />
        <div className="container mx-auto max-w-5xl px-4 py-8">
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/3 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-48 w-full rounded-xl" />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (error || !path || !path.subpaths || path.subpaths.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header showBackButton={true} />
        <div className="container mx-auto max-w-5xl px-4 py-8 flex items-center justify-center">
          <Card>
            <CardHeader>
              <CardTitle>No Subpaths Found</CardTitle>
              <CardDescription>
                This learning path doesn't have any subpaths yet.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate(-1)}>Go Back</Button>
            </CardContent>
          </Card>
        </div>
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
      <Header 
        title={path?.title} 
        showBackButton={true} 
        path={breadcrumbPath}
      />

      <main className="flex-1 container mx-auto max-w-5xl px-4 py-6">
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{path.title}</h1>
              <p className="text-muted-foreground mt-1">{path.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                  {path.level}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {filteredSubpaths.length} Subpaths
                </span>
              </div>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              title="Reset all progress"
              className="text-red-600 hover:text-red-800 self-end"
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Reset Progress</span>
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search subpaths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setSearchQuery("")}>
                  All Levels
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchQuery("beginner")}>
                  Beginner
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchQuery("intermediate")}>
                  Intermediate
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchQuery("advanced")}>
                  Advanced
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Empty State */}
          {filteredSubpaths.length === 0 && (
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-8">
                <Search className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  No subpaths found matching your search criteria.
                </p>
                <Button 
                  variant="link" 
                  onClick={() => setSearchQuery("")} 
                  className="mt-2"
                >
                  Clear search
                </Button>
              </CardContent>
            </Card>
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

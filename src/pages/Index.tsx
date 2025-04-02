import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "@/hooks/useData";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Circle, BookOpenCheck, GraduationCap } from "lucide-react";
import Header from "@/components/Header";

const levelBadgeVariant = {
  Beginner: "secondary",
  Intermediate: "default",
  Advanced: "destructive",
};

const Index = () => {
  const { paths, isLoading, error } = useData();
  const [expandedPath, setExpandedPath] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    }
  }, [error]);

  const togglePath = (pathId: string) => {
    setExpandedPath((prev) => (prev === pathId ? null : pathId));
  };

  if (isLoading) {
    return (
      <div>
        <Header title="Learning Paths" />
        <div className="container py-6">
          <h1 className="text-2xl font-bold mb-4">Learning Paths</h1>
          <div className="grid gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="p-4 rounded-md shadow-sm border border-border"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header title="Learning Paths" />
        <div className="container py-6">
          <div className="text-red-500">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header title="Learning Paths" />
      <div className="container py-6">
        <h1 className="text-2xl font-bold mb-4">Learning Paths</h1>
        <div className="grid gap-4">
          {paths.map((path) => (
            <div
              key={path.id}
              className="p-4 rounded-md shadow-sm border border-border"
            >
              <div className="flex items-center space-x-4 mb-2">
                {path.icon === "Circle" && (
                  <Circle className="h-10 w-10 text-blue-500" />
                )}
                {path.icon === "BookOpenCheck" && (
                  <BookOpenCheck className="h-10 w-10 text-green-500" />
                )}
                {path.icon === "GraduationCap" && (
                  <GraduationCap className="h-10 w-10 text-orange-500" />
                )}
                <div>
                  <h2 className="text-lg font-semibold">{path.title}</h2>
                  <p className="text-sm text-gray-500">{path.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {path.level && (
                    <Badge variant={levelBadgeVariant[path.level] || "default"}>
                      {path.level}
                    </Badge>
                  )}
                  <Badge variant="secondary">{path.count} paths</Badge>
                </div>
                <Link
                  to={`/subpaths/${path.id}`}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                >
                  View paths
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;

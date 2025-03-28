
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ChevronDown,
  Code,
  Server,
  GitBranch,
  Network,
  ArrowRight,
  List,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
}

interface NestedPathCardProps {
  path: Subpath;
  isCompleted?: boolean;
  isNested?: boolean;
  level?: number;
  onPathClick?: (pathId: string) => void;
}

const NestedPathCard: React.FC<NestedPathCardProps> = ({
  path,
  isCompleted = false,
  isNested = false,
  level = 0,
  onPathClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasNestedPaths = path.subpaths && path.subpaths.length > 0;
  
  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const getIcon = (icon: string = "List") => {
    switch (icon) {
      case "Code":
        return <Code className="h-5 w-5" />;
      case "Server":
        return <Server className="h-5 w-5" />;
      case "GitBranch":
        return <GitBranch className="h-5 w-5" />;
      case "Network":
        return <Network className="h-5 w-5" />;
      case "List":
        return <List className="h-5 w-5" />;
      default:
        return <List className="h-5 w-5" />;
    }
  };

  const cardBg = level === 0 
    ? "bg-card" 
    : level === 1 
      ? "bg-card/90" 
      : "bg-card/80";

  return (
    <Card
      className={cn(
        `w-full transition-all duration-200 hover:shadow-md ${isNested ? `ml-${Math.min(level * 3, 8)}` : ""}`,
        isCompleted ? "border-indigo-200 dark:border-indigo-900" : "",
        cardBg,
        level > 0 && "border-l-4 border-l-indigo-500"
      )}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            {hasNestedPaths && (
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-auto rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
                onClick={handleToggleExpand}
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            )}
            <div
              className={cn(
                "p-2 rounded-lg inline-flex items-center justify-center w-10 h-10",
                isCompleted 
                  ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" 
                  : "bg-secondary"
              )}
            >
              {isCompleted ? (
                <CheckCircle className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
              ) : (
                getIcon()
              )}
            </div>
          </div>
          <Badge 
            variant={level === 0 ? "default" : "secondary"} 
            className={cn(
              "text-xs",
              level === 0 ? "bg-indigo-500 hover:bg-indigo-600" : ""
            )}
          >
            {path.level}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">{path.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {path.description}
        </CardDescription>
      </CardHeader>

      {isExpanded && hasNestedPaths && (
        <CardContent className="pt-0 pb-2 transition-all duration-300">
          <div className="mt-4 space-y-3">
            {path.subpaths!.map((subpath) => (
              <NestedPathCard
                key={subpath.id}
                path={subpath}
                isNested={true}
                level={level + 1}
                onPathClick={onPathClick}
              />
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter className="flex justify-between pt-2 border-t">
        <span className="text-sm text-muted-foreground">
          {hasNestedPaths 
            ? `${path.subpaths?.length} subpaths` 
            : `${path.count} questions`}
        </span>
        <div className="flex items-center gap-2">
          {hasNestedPaths ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-auto"
                onClick={handleToggleExpand}
              >
                {isExpanded ? "Collapse" : "Expand"}
              </Button>
              <Link
                to={`/subpaths/${path.id}`}
                className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400"
                onClick={() => onPathClick && onPathClick(path.id)}
              >
                View
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </>
          ) : (
            <Link
              to={`/path/${path.id}`}
              className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400"
              onClick={() => onPathClick && onPathClick(path.id)}
            >
              Start learning
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default NestedPathCard;

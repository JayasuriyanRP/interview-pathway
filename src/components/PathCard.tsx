
import React from "react";
import { Link } from "react-router-dom";
import { Code, Server, GitBranch, Network, ArrowRight, List, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface PathCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  level: string;
  hasSubpaths?: boolean;
  completed?: number;
  total?: number;
  isCompleted?: boolean;
}

const PathCard: React.FC<PathCardProps> = ({
  id,
  title,
  description,
  icon,
  count,
  level,
  hasSubpaths = false,
  completed = 0,
  total = 0,
  isCompleted = false,
}) => {
  const getIcon = () => {
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
        return <Code className="h-5 w-5" />;
    }
  };

  const linkTo = hasSubpaths ? `/subpaths/${id}` : `/path/${id}`;
  const actionText = hasSubpaths ? "View subpaths" : "Start learning";

  // Calculate progress percentage
  const progressPercentage = total > 0 ? (completed / total) * 100 : 0;

  // Level-based badge style
  const getBadgeClass = () => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'badge-beginner';
      case 'intermediate':
        return 'badge-intermediate';
      case 'advanced':
        return 'badge-advanced';
      default:
        return '';
    }
  };

  return (
    <Link
      to={linkTo}
      className={cn(
        "path-card block rounded-xl p-3 border shadow-sm hover:shadow-md transition-all duration-300",
        "sm:p-4 md:p-5 lg:p-6", // Adjust padding for different screen sizes
        "border-border", // Default border
        isCompleted ? "border-indigo-200 dark:border-indigo-900" : "" // Conditional border
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          {/* Icon + Title in a single row */}
          <div className="flex items-center gap-3 flex-1">
            <div className={cn(
              "p-3 rounded-lg inline-flex items-center justify-center w-12 h-12",
              isCompleted
                ? "bg-indigo-50 dark:bg-indigo-900/20"
                : "bg-indigo-100 dark:bg-indigo-900/30"
            )}>
              {isCompleted ? (
                <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              ) : getIcon()}
            </div>

            <div>
              <Badge className={cn("mb-1", getBadgeClass())}>
                {level}
              </Badge>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Completed Badge (Right-Aligned) */}
          {isCompleted && (
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              Completed
            </Badge>
          )}
        </div>

        {/* Progress bar */}
        {!hasSubpaths && total > 0 && (
          <div className="w-full mt-2 mb-4">
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-muted-foreground">
                {completed} of {total} completed
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {hasSubpaths ? `${count} subpaths` : `${count} questions`}
          </div>
          <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {actionText}
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PathCard;

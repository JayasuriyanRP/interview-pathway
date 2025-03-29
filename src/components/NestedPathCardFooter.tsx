
import React from "react";
import { CardFooter } from "./ui/card";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface NestedPathCardFooterProps {
  pathId: string;
  hasNestedPaths: boolean;
  isExpanded: boolean;
  subpathsCount: number;
  questionsCount: number;
  progress?: { completed: number; total: number };
  handleToggleExpand: (e: React.MouseEvent) => void;
  onPathClick?: (pathId: string) => void;
}

const NestedPathCardFooter: React.FC<NestedPathCardFooterProps> = ({
  pathId,
  hasNestedPaths,
  isExpanded,
  subpathsCount,
  questionsCount,
  progress,
  handleToggleExpand,
  onPathClick,
}) => {
  const progressPercentage = progress?.total ? 
    Math.round((progress.completed / progress.total) * 100) : 0;

  return (
    <CardFooter className="pt-0 pb-3 px-4 flex flex-col">
      {/* Progress bar for non-expanded cards without subpaths */}
      {!hasNestedPaths && progress && progress.total > 0 && (
        <div className="w-full mt-2 mb-2">
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full transition-all duration-500 ease-in-out",
                progressPercentage === 100
                  ? "bg-green-500"
                  : progressPercentage > 0
                  ? "bg-indigo-500"
                  : "bg-secondary"
              )}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-muted-foreground">
              {progress.completed} of {progress.total} questions
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {progressPercentage}%
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between pt-2 w-full">
        <div className="text-sm text-muted-foreground">
          {hasNestedPaths
            ? `${subpathsCount} subpath${subpathsCount !== 1 ? 's' : ''}`
            : `${questionsCount} question${questionsCount !== 1 ? 's' : ''}`}
        </div>

        {hasNestedPaths ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleExpand}
            className="p-0 h-auto hover:bg-transparent"
          >
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mr-1">
              {isExpanded ? "Collapse" : "Expand"}
            </span>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            ) : (
              <ChevronRight className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            )}
          </Button>
        ) : (
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            View
          </span>
        )}
      </div>
    </CardFooter>
  );
};

export default NestedPathCardFooter;

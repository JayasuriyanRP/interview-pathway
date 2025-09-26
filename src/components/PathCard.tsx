
import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  GitBranch,
  Network,
  ArrowRight,
  List,
  CheckCircle,
  Users,
  Folder,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { cn, getBadgeClass } from "@/lib/utils";
import { usePathQuestions } from "@/hooks/useData";
import { useProgress } from "@/hooks/useProgress";
import { getIconComponent, getSkillIcon } from "@/utils/iconUtils";

interface PathCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
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
  const { questions } = usePathQuestions(id);
  const { getPathProgress, isPathCompleted, isSubpathCompleted } =
    useProgress();

  // Get actual progress data
  const progress = getPathProgress(id, questions);

  // Use provided completion status or calculate it
  const actualIsCompleted =
    isCompleted || isPathCompleted(id) || isSubpathCompleted(id);

  // Calculate progress percentage - use either passed props or calculated values
  const actualCompleted = completed > 0 ? completed : progress.completed;
  const actualTotal = total > 0 ? total : progress.total;
  const progressPercentage =
    actualTotal > 0 ? (actualCompleted / actualTotal) * 100 : 0;

  const linkTo = hasSubpaths ? `/${id}` : `/topic/${id}`;
  const actionText = hasSubpaths ? "View subpaths" : "Start learning";

  // Get the appropriate icon based on title and provided icon
  const IconComponent = getIconComponent(getSkillIcon(title) || icon || "Folder");

  return (
    <Link
      to={linkTo}
      className={cn(
        "path-card block rounded-xl p-3 border shadow-sm hover:shadow-md transition-all duration-300",
        "sm:p-4 md:p-5 lg:p-6", // Adjust padding for different screen sizes
        "border-border", // Default border
        actualIsCompleted ? "border-indigo-200 dark:border-indigo-900" : "" // Conditional border
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center">
          {/* Icon + Title in a single row */}
          <div className="flex items-center gap-3 flex-1">
            <div
              className={cn(
                "p-3 rounded-lg inline-flex items-center justify-center w-12 h-12",
                actualIsCompleted
                  ? "bg-indigo-50 dark:bg-indigo-900/20"
                  : "bg-indigo-100 dark:bg-indigo-900/30"
              )}
            >
              {actualIsCompleted ? (
                <CheckCircle className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              ) : (
                <IconComponent className="h-5 w-5" />
              )}
            </div>

            <div>
              <Badge className={cn("mb-1", getBadgeClass(level))}>
                {level}
              </Badge>
              <h3 className="text-xl font-medium">{title}</h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {description}
              </p>
            </div>
          </div>

          {/* Completed Badge (Right-Aligned) */}
          {actualIsCompleted && (
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              Completed
            </Badge>
          )}
        </div>

        {/* Progress bar */}
        {!hasSubpaths && actualTotal > 0 && (
          <div className="w-full mt-2 mb-4">
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 transition-all duration-500 ease-in-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-muted-foreground">
                {actualCompleted} of {actualTotal} completed
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border">
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

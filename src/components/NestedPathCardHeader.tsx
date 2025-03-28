
import React from "react";
import { ChevronRight, ChevronDown, CheckCircle } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn, getBadgeClass } from "@/lib/utils";
import { getIconComponent } from "@/utils/iconUtils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NestedPathCardHeaderProps {
  title: string;
  description: string;
  level: string;
  hasNestedPaths: boolean;
  isExpanded: boolean;
  isCompleted?: boolean;
  handleToggleExpand: (e: React.MouseEvent) => void;
  icon?: string;
}

const NestedPathCardHeader: React.FC<NestedPathCardHeaderProps> = ({
  title,
  description,
  level,
  hasNestedPaths,
  isExpanded,
  isCompleted = false,
  handleToggleExpand,
  icon = "List",
}) => {
  const IconComponent = getIconComponent(icon);
  const isMobile = useIsMobile();

  return (
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
              "p-2 rounded-lg inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10",
              isCompleted
                ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                : "bg-secondary"
            )}
          >
            {isCompleted ? (
              <CheckCircle className="h-4 w-4 text-indigo-500 dark:text-indigo-400" />
            ) : (
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </div>
        </div>
        <Badge className={cn("mb-1", getBadgeClass(level))}>
          {level}
        </Badge>
      </div>
      <CardTitle className={cn("mt-2", isMobile ? "text-base" : "text-lg")}>{title}</CardTitle>
      <CardDescription className="line-clamp-2 text-xs sm:text-sm">
        {description}
      </CardDescription>
    </CardHeader>
  );
};

export default NestedPathCardHeader;

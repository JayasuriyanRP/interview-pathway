
import React from "react";
import { ChevronRight, ChevronDown, CheckCircle } from "lucide-react";
import { CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn, getBadgeClass } from "@/lib/utils";
import { getIconComponent, getSkillIcon } from "@/utils/iconUtils";
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
  // Get the appropriate icon based on title and provided icon
  const IconComponent = getIconComponent(getSkillIcon(title) || icon);
  const isMobile = useIsMobile();

  return (
    <CardHeader className="p-2">
      <div className="flex justify-end items-start">
        <Badge className={cn("mb-1", getBadgeClass(level))}>{level}</Badge>
      </div>
      <div className="flex items-center gap-3">
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
        <div className="flex flex-col">
          <CardTitle
            className={cn("text-lg", isMobile ? "text-base" : "text-lg")}
          >
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-xs sm:text-sm">
            {description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
  );
};

export default NestedPathCardHeader;

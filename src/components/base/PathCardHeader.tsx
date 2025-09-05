import React from "react";
import { CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronRight, BookOpen } from "lucide-react";
import { PathItem } from "@/utils/pathUtils";

interface PathCardHeaderProps {
  path: PathItem;
  hasSubpaths: boolean;
  isCompleted?: boolean;
  showExpandIcon?: boolean;
}

// Header component following Single Responsibility Principle
const PathCardHeader: React.FC<PathCardHeaderProps> = ({
  path,
  hasSubpaths,
  isCompleted = false,
  showExpandIcon = false
}) => {
  return (
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            {hasSubpaths ? (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            ) : (
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="truncate">{path.title}</span>
            {showExpandIcon && (
              <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto transition-transform" />
            )}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {path.description}
          </CardDescription>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <Badge variant="secondary" className="text-xs">
          {path.level}
        </Badge>
        {isCompleted && (
          <Badge variant="default" className="text-xs bg-green-600 hover:bg-green-700">
            Completed
          </Badge>
        )}
      </div>
    </CardHeader>
  );
};

export default PathCardHeader;
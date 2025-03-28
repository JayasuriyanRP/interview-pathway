
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface PathHeaderProps {
  title: string;
  description: string;
  level: string;
  totalSubpaths: number;
  onResetProgress?: () => void;
}

const PathHeader: React.FC<PathHeaderProps> = ({
  title,
  description,
  level,
  totalSubpaths,
  onResetProgress,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
            {level}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {totalSubpaths} Subpaths
          </span>
        </div>
      </div>
      
      {onResetProgress && (
        <Button
          variant="outline"
          size="sm"
          title="Reset all progress"
          className="text-red-600 hover:text-red-800 self-end"
          onClick={onResetProgress}
        >
          <RotateCcw className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Reset Progress</span>
        </Button>
      )}
    </div>
  );
};

export default PathHeader;

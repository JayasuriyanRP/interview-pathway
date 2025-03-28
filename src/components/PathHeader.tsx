
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h1 className={`${isMobile ? "text-xl" : "text-2xl md:text-3xl"} font-bold`}>{title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">{description}</p>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className="text-xs bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
            {level}
          </Badge>
          <span className="text-xs sm:text-sm text-muted-foreground">
            {totalSubpaths} Subpaths
          </span>
        </div>
      </div>
      
      {onResetProgress && (
        <Button
          variant="outline"
          size="sm"
          title="Reset all progress"
          className="text-red-600 hover:text-red-800 self-end text-xs sm:text-sm"
          onClick={onResetProgress}
        >
          <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
          <span className="hidden sm:inline">Reset Progress</span>
        </Button>
      )}
    </div>
  );
};

export default PathHeader;

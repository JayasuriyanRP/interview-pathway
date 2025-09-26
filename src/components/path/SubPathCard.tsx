import React from "react";
import { Link } from "react-router-dom";
import { CardContent, CardFooter } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import BasePathCard from "../base/BasePathCard";
import PathCardHeader from "../base/PathCardHeader";
import { PathItem, PathNavigator } from "@/utils/pathUtils";
import { useProgress } from "@/hooks/useProgress";
import { usePathQuestions } from "@/hooks/useData";

interface SubPathCardProps {
  path: PathItem;
  depth: number;
  onPathClick?: (pathId: string) => void;
}

// Subpath card component following Single Responsibility Principle
const SubPathCard: React.FC<SubPathCardProps> = ({ 
  path, 
  depth, 
  onPathClick 
}) => {
  const { isPathCompleted, getPathProgress } = useProgress();
  const { questions } = usePathQuestions(path.id);
  const hasSubpaths = path.subpaths && path.subpaths.length > 0;
  const isCompleted = isPathCompleted(path.id);
  
  const progress = getPathProgress(path.id, questions);
  const progressPercentage = progress.total > 0
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  const targetUrl = hasSubpaths 
    ? PathNavigator.generateNestedUrl(path.id)
    : PathNavigator.generateNestedUrl(path.id);

  const handleClick = () => {
    if (onPathClick) {
      onPathClick(path.id);
    }
  };

  // Dynamic margin based on depth
  const marginClass = depth > 0 ? `ml-${Math.min(depth * 4, 12)}` : "";
  const borderClass = depth > 0 ? "border-l-4 border-l-primary/30" : "";

  return (
    <div className={marginClass}>
      <BasePathCard 
        path={path} 
        isCompleted={isCompleted}
        className={borderClass}
        onClick={handleClick}
      >
        <PathCardHeader 
          path={path} 
          hasSubpaths={hasSubpaths} 
          isCompleted={isCompleted}
          showExpandIcon={hasSubpaths}
        />
        
        {!hasSubpaths && questions && questions.length > 0 && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              <Progress value={progressPercentage} className="h-1.5" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{progress.completed}/{progress.total} completed</span>
                <span>{progressPercentage}%</span>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter className="pt-2">
          {hasSubpaths ? (
            <div className="w-full text-sm text-muted-foreground">
              <span>{path.subpaths!.length} subtopics</span>
            </div>
          ) : (
            <Link to={targetUrl} className="w-full">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                Start Learning
              </Button>
            </Link>
          )}
        </CardFooter>
      </BasePathCard>
    </div>
  );
};

export default SubPathCard;
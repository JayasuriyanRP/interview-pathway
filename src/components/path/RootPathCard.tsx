import React from "react";
import { Link } from "react-router-dom";
import { CardContent, CardFooter } from "../ui/card";
import { Progress } from "../ui/progress";
import BasePathCard from "../base/BasePathCard";
import PathCardHeader from "../base/PathCardHeader";
import { PathItem, PathNavigator } from "@/utils/pathUtils";
import { useProgress } from "@/hooks/useProgress";

interface RootPathCardProps {
  path: PathItem;
  progressData?: {
    completed: number;
    total: number;
  };
}

// Root path card component following Single Responsibility Principle
const RootPathCard: React.FC<RootPathCardProps> = ({ path, progressData }) => {
  const { isPathCompleted } = useProgress();
  const hasSubpaths = path.subpaths && path.subpaths.length > 0;
  const isCompleted = isPathCompleted(path.id);
  
  const targetUrl = hasSubpaths 
    ? PathNavigator.generateNestedUrl(path.id)
    : `/${path.id}`;

  const progressPercentage = progressData && progressData.total > 0
    ? Math.round((progressData.completed / progressData.total) * 100)
    : 0;

  return (
    <Link to={targetUrl} className="block">
      <BasePathCard path={path} isCompleted={isCompleted}>
        <PathCardHeader 
          path={path} 
          hasSubpaths={hasSubpaths} 
          isCompleted={isCompleted} 
        />
        
        {progressData && (
          <CardContent className="pt-0">
            <div className="space-y-2">
              <Progress value={progressPercentage} className="h-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{progressData.completed} completed</span>
                <span>{progressData.total} total</span>
              </div>
            </div>
          </CardContent>
        )}

        <CardFooter className="pt-2">
          <div className="w-full text-sm text-muted-foreground">
            {hasSubpaths ? (
              <span>{path.subpaths!.length} topics available</span>
            ) : (
              <span>Start learning →</span>
            )}
          </div>
        </CardFooter>
      </BasePathCard>
    </Link>
  );
};

export default RootPathCard;
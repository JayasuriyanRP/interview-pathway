
import React from "react";
import { CardContent } from "./ui/card";
import NestedPathCard from "./NestedPathCard";
import { Progress } from "./ui/progress";
import { useProgress } from "@/hooks/useProgress";
import { usePathQuestions } from "@/hooks/useData";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
}

interface NestedPathCardContentProps {
  isExpanded: boolean;
  hasNestedPaths: boolean;
  subpaths: Subpath[];
  level: number;
  onPathClick?: (pathId: string) => void;
}

const NestedPathCardContent: React.FC<NestedPathCardContentProps> = ({
  isExpanded,
  hasNestedPaths,
  subpaths,
  level,
  onPathClick,
}) => {
  const { isSubpathCompleted, getPathProgress } = useProgress();
  
  if (!isExpanded || !hasNestedPaths) {
    return null;
  }

  return (
    <CardContent className="pt-0 pb-2 transition-all duration-300">
      <div className="mt-4 space-y-3">
        {subpaths.map((subpath) => (
          <div key={subpath.id} className="space-y-2">
            <NestedPathCard
              path={subpath}
              isCompleted={isSubpathCompleted(subpath.id)}
              isNested={true}
              level={level + 1}
              onPathClick={onPathClick}
            />
            {!subpath.subpaths || subpath.subpaths.length === 0 ? (
              <div className="ml-6 px-2">
                <ProgressDisplay pathId={subpath.id} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </CardContent>
  );
};

// New component to display progress for a path
const ProgressDisplay = ({ pathId }: { pathId: string }) => {
  const { questions } = usePathQuestions(pathId);
  const { getPathProgress } = useProgress();
  
  const progress = getPathProgress(pathId, questions);
  const progressPercentage = progress.total > 0 
    ? Math.round((progress.completed / progress.total) * 100) 
    : 0;
  
  return (
    <div className="space-y-1">
      <Progress value={progressPercentage} className="h-1" />
      <div className="text-xs text-muted-foreground text-right">
        {progress.completed}/{progress.total} completed
      </div>
    </div>
  );
};

export default NestedPathCardContent;

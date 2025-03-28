
import React, { useState } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import NestedPathCardHeader from "./NestedPathCardHeader";
import NestedPathCardContent from "./NestedPathCardContent";
import NestedPathCardFooter from "./NestedPathCardFooter";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
}

interface NestedPathCardProps {
  path: Subpath;
  isCompleted?: boolean;
  isNested?: boolean;
  level?: number;
  onPathClick?: (pathId: string) => void;
}

const NestedPathCard: React.FC<NestedPathCardProps> = ({
  path,
  isCompleted = false,
  isNested = false,
  level = 0,
  onPathClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasNestedPaths = path.subpaths && path.subpaths.length > 0;
  
  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const cardBg = level === 0 
    ? "bg-card" 
    : level === 1 
      ? "bg-card/90" 
      : "bg-card/80";

  return (
    <Card
      className={cn(
        `w-full transition-all duration-200 hover:shadow-md ${isNested ? `ml-${Math.min(level * 3, 8)}` : ""}`,
        isCompleted ? "border-indigo-200 dark:border-indigo-900" : "",
        cardBg,
        level > 0 && "border-l-4 border-l-indigo-500"
      )}
    >
      <NestedPathCardHeader
        title={path.title}
        description={path.description}
        level={path.level}
        hasNestedPaths={hasNestedPaths}
        isExpanded={isExpanded}
        isCompleted={isCompleted}
        handleToggleExpand={handleToggleExpand}
      />

      <NestedPathCardContent
        isExpanded={isExpanded}
        hasNestedPaths={hasNestedPaths}
        subpaths={path.subpaths || []}
        level={level}
        onPathClick={onPathClick}
      />

      <NestedPathCardFooter
        pathId={path.id}
        hasNestedPaths={hasNestedPaths}
        isExpanded={isExpanded}
        subpathsCount={path.subpaths?.length || 0}
        questionsCount={path.count}
        handleToggleExpand={handleToggleExpand}
        onPathClick={onPathClick}
      />
    </Card>
  );
};

export default NestedPathCard;

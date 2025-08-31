import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import NestedPathCardHeader from "./NestedPathCardHeader";
import NestedPathCardContent from "./NestedPathCardContent";
import NestedPathCardFooter from "./NestedPathCardFooter";
import { cn } from "@/lib/utils";
import { buildPathUrl } from "@/utils/pathUtils";

interface Subpath {
  id: string;
  title: string;
  description: string;
  count: number;
  level: string;
  subpaths?: Subpath[];
  icon?: string;
}

interface NestedPathCardProps {
  path: Subpath;
  isCompleted?: boolean;
  isNested?: boolean;
  level?: number;
  onPathClick?: (pathId: string) => void;
  parentPathSegments?: string[];
}

const NestedPathCard: React.FC<NestedPathCardProps> = ({
  path,
  isCompleted = false,
  isNested = false,
  level = 0,
  onPathClick,
  parentPathSegments = [],
}) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const hasNestedPaths = path.subpaths && path.subpaths.length > 0;
  const currentPathSegments = [...parentPathSegments, path.id];

  const handleCardClick = () => {
    if (hasNestedPaths) {
      navigate(`/subpaths/${path.id}`);
    } else {
      // Build the proper nested URL
      const pathUrl = buildPathUrl(currentPathSegments);
      navigate(pathUrl);
    }
    onPathClick?.(path.id);
  };

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasNestedPaths) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md cursor-pointer",
        isNested && "ml-4 border-l-2 border-l-indigo-200 dark:border-l-indigo-800",
        isCompleted && "border-indigo-200 dark:border-indigo-800"
      )}
      onClick={handleCardClick}
    >
      <NestedPathCardHeader
        title={path.title}
        description={path.description}
        level={path.level}
        hasNestedPaths={hasNestedPaths}
        isExpanded={isExpanded}
        isCompleted={isCompleted}
        handleToggleExpand={handleToggleExpand}
        icon={path.icon}
      />

      <NestedPathCardContent
        isExpanded={isExpanded}
        hasNestedPaths={hasNestedPaths}
        subpaths={path.subpaths || []}
        level={level}
        onPathClick={onPathClick}
      />

      <NestedPathCardFooter
        count={path.count}
        hasNestedPaths={hasNestedPaths}
        isExpanded={isExpanded}
        handleToggleExpand={handleToggleExpand}
      />
    </Card>
  );
};

export default NestedPathCard;

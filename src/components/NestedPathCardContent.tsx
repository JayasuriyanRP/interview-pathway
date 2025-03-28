
import React from "react";
import { CardContent } from "./ui/card";
import NestedPathCard from "./NestedPathCard";

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
  if (!isExpanded || !hasNestedPaths) {
    return null;
  }

  return (
    <CardContent className="pt-0 pb-2 transition-all duration-300">
      <div className="mt-4 space-y-3">
        {subpaths.map((subpath) => (
          <NestedPathCard
            key={subpath.id}
            path={subpath}
            isNested={true}
            level={level + 1}
            onPathClick={onPathClick}
          />
        ))}
      </div>
    </CardContent>
  );
};

export default NestedPathCardContent;

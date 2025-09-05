import React from "react";
import SubPathCard from "./SubPathCard";
import { PathItem } from "@/utils/pathUtils";

interface SubPathListProps {
  subpaths: PathItem[];
  depth: number;
  onPathClick?: (pathId: string) => void;
}

// List component following Single Responsibility Principle and DRY
const SubPathList: React.FC<SubPathListProps> = ({ 
  subpaths, 
  depth, 
  onPathClick 
}) => {
  return (
    <div className="space-y-3">
      {subpaths.map((subpath) => (
        <div key={subpath.id} className="space-y-2">
          <SubPathCard 
            path={subpath} 
            depth={depth}
            onPathClick={onPathClick}
          />
          {/* Recursive rendering for nested subpaths */}
          {subpath.subpaths && subpath.subpaths.length > 0 && (
            <SubPathList 
              subpaths={subpath.subpaths}
              depth={depth + 1}
              onPathClick={onPathClick}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SubPathList;
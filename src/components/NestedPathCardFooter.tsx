
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { usePathQuestions } from "@/hooks/useData";
import { useIsMobile } from "@/hooks/use-mobile";

interface NestedPathCardFooterProps {
  pathId: string;
  hasNestedPaths: boolean;
  isExpanded: boolean;
  subpathsCount: number;
  questionsCount: number;
  handleToggleExpand: (e: React.MouseEvent) => void;
  onPathClick?: (pathId: string) => void;
}

const NestedPathCardFooter: React.FC<NestedPathCardFooterProps> = ({
  pathId,
  hasNestedPaths,
  isExpanded,
  subpathsCount,
  questionsCount,
  handleToggleExpand,
  onPathClick,
}) => {
  const { questions } = usePathQuestions(pathId);
  const actualQuestionCount = questions?.length || 0;
  const isMobile = useIsMobile();

  return (
    <CardFooter className="flex justify-between pt-2 border-t">
      <span className="text-xs sm:text-sm text-muted-foreground">
        {hasNestedPaths
          ? `${subpathsCount} subpaths`
          : `${actualQuestionCount} questions`}
      </span>
      <div className="flex items-center gap-1 sm:gap-2">
        {hasNestedPaths ? (
          <Link
            to={`/subpaths/${pathId}`}
            className="flex items-center text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400"
            onClick={() => onPathClick && onPathClick(pathId)}
          >
            View
            <ExternalLink className="ml-1 h-3 w-3" />
          </Link>
        ) : (
          <Link
            to={`/path/${pathId}`}
            className="flex items-center text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400"
            onClick={() => onPathClick && onPathClick(pathId)}
          >
            Start learning
            <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        )}
      </div>
    </CardFooter>
  );
};

export default NestedPathCardFooter;

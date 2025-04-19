import React, { useState } from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import NestedPathCardHeader from "./NestedPathCardHeader";
import NestedPathCardContent from "./NestedPathCardContent";
import NestedPathCardFooter from "./NestedPathCardFooter";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { usePathQuestions } from "@/hooks/useData";
import { useProgress } from "@/hooks/useProgress";
import { Link } from "react-router-dom";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const hasNestedPaths = path.subpaths && path.subpaths.length > 0;
  const { getPathProgress, isSubpathCompleted, isPathCompleted } =
    useProgress();
  const { questions } = usePathQuestions(path.id);

  // Calculate the actual progress
  const progress = getPathProgress(path.id, questions);
  const isPathActuallyCompleted =
    isCompleted || isSubpathCompleted(path.id) || isPathCompleted(path.id);

  const handleToggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // setIsExpanded(!isExpanded);
  };

  const handlePathClick = () => {
    if (onPathClick) {
      onPathClick(path.id);
    }
  };

  const cardBg =
    level === 0 ? "bg-card" : level === 1 ? "bg-card/90" : "bg-card/80";

  // For paths without subpaths, use a sheet for better mobile experience
  if (!hasNestedPaths && level > 0) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Card
            className={cn(
              `w-full transition-all duration-200 cursor-pointer hover:shadow-md border-2 ${isNested ? `ml-${Math.min(level * 3, 8)}` : ""
              }`,
              isPathActuallyCompleted
                ? "bg-green-200 dark:bg-green-950 border-green-400 dark:border-green-800"
                : "border-blue-400 dark:border-blue-800",
              cardBg,
              level > 0 ? "border-l-4 border-l-indigo-500" : "border-2",
              hasNestedPaths ? "bg-blue-100 dark:bg-blue-500" : ""
            )}
            onClick={handlePathClick}
          >
            <NestedPathCardHeader
              title={path.title}
              description={path.description}
              level={path.level}
              hasNestedPaths={hasNestedPaths}
              isExpanded={isExpanded}
              isCompleted={isPathActuallyCompleted}
              handleToggleExpand={handleToggleExpand}
            />

            <NestedPathCardFooter
              pathId={path.id}
              hasNestedPaths={hasNestedPaths}
              isExpanded={isExpanded}
              subpathsCount={path.subpaths?.length || 0}
              questionsCount={questions?.length || 0}
              progress={progress}
              handleToggleExpand={handleToggleExpand}
              onPathClick={onPathClick}
            />
          </Card>
        </SheetTrigger>
        <SheetContent>
          <div className="pt-6">
            <h2 className="text-xl font-bold">{path.title}</h2>
            <p className="mt-2 text-muted-foreground">{path.description}</p>

            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2">Questions</h3>
              <ul className="space-y-2">
                {questions && questions.length > 0 ? (
                  questions.map((q, i) => (
                    <li key={i} className="border-b pb-2">
                      {q.question}
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground">
                    No questions available
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-6">
              <Link to={`/path/${path.id}`} className="w-full inline-block">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                  Start Learning
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Make the entire card clickable if it has subpaths
  const CardWrapper = hasNestedPaths
    ? ({ children }: { children: React.ReactNode }) => (
      <Link to={`/subpaths/${path.id}`} onClick={handlePathClick}>
        {children}
      </Link>
    )
    : ({ children }: { children: React.ReactNode }) => (
      <Link to={`/path/${path.id}`} onClick={handlePathClick}>
        {children}
      </Link>
    );

  // For top-level paths and paths with subpaths, use the regular card view
  return (
    <CardWrapper>
      <Card
        className={cn(
          `w-full transition-all duration-200 hover:shadow-md ${isNested ? `ml-${Math.min(level * 3, 8)}` : ""
          }`,
          isPathActuallyCompleted
            ? "bg-green-200 dark:bg-green-950 border-green-400 dark:border-green-800"
            : "border-blue-400 dark:border-blue-800",
          cardBg,
          level > 0 ? "border-l-4 border-l-indigo-500" : "border-2",
          hasNestedPaths
            ? "bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:hover:bg-blue-900 border-l-4 border-blue-600 dark:border-blue-500"
            : ""
        )}
      >
        <NestedPathCardHeader
          title={path.title}
          description={path.description}
          level={path.level}
          hasNestedPaths={hasNestedPaths}
          isExpanded={isExpanded}
          isCompleted={isPathActuallyCompleted}
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
          questionsCount={questions?.length || 0}
          progress={progress}
          handleToggleExpand={handleToggleExpand}
          onPathClick={onPathClick}
        />
      </Card>
    </CardWrapper>
  );
};

export default NestedPathCard;

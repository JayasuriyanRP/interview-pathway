
import React from "react";
import { Link } from "react-router-dom";
import { Code, Server, GitBranch, Network, ArrowRight, List, CheckCircle } from "lucide-react";

interface PathCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  level: string;
  hasSubpaths?: boolean;
  completed?: number;
  total?: number;
  isCompleted?: boolean;
}

const PathCard: React.FC<PathCardProps> = ({
  id,
  title,
  description,
  icon,
  count,
  level,
  hasSubpaths = false,
  completed = 0,
  total = 0,
  isCompleted = false,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-5 w-5" />;
      case "Server":
        return <Server className="h-5 w-5" />;
      case "GitBranch":
        return <GitBranch className="h-5 w-5" />;
      case "Network":
        return <Network className="h-5 w-5" />;
      case "List":
        return <List className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const linkTo = hasSubpaths ? `/subpaths/${id}` : `/path/${id}`;
  const actionText = hasSubpaths ? "View subpaths" : "Start learning";
  
  // Calculate progress percentage
  const progressPercentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <Link
      to={linkTo}
      className={`path-card block bg-card rounded-xl p-6 border ${
        isCompleted ? "border-green-200 dark:border-green-900" : "border-border"
      } shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between">
          <div className={`mb-4 p-3 ${
            isCompleted ? "bg-green-50 dark:bg-green-900/20" : "bg-secondary"
          } rounded-lg inline-flex items-center justify-center w-12 h-12`}>
            {isCompleted ? <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" /> : getIcon()}
          </div>
          {isCompleted && (
            <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
              Completed
            </span>
          )}
        </div>
        
        <div className="flex-1">
          <div className="inline-block px-2.5 py-0.5 mb-2 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
            {level}
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* Progress bar */}
        {!hasSubpaths && total > 0 && (
          <div className="w-full mt-2 mb-4">
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-500 ease-in-out" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-muted-foreground">
                {completed} of {total} completed
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {progressPercentage.toFixed(0)}%
              </span>
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {hasSubpaths ? `${count} subpaths` : `${count} questions`}
          </div>
          <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
            {actionText}
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PathCard;

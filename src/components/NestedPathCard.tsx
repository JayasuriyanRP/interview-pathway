
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, Code, Server, GitBranch, Network, ArrowRight, List, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
}

const NestedPathCard: React.FC<NestedPathCardProps> = ({
  path,
  isCompleted = false,
  isNested = false,
  level = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const hasNestedPaths = path.subpaths && path.subpaths.length > 0;
  
  const getIcon = (icon: string = "List") => {
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
        return <List className="h-5 w-5" />;
    }
  };

  return (
    <Card className={`w-full mb-4 ${isNested ? 'ml-6' : ''} ${
      isCompleted ? "border-green-200 dark:border-green-900" : ""
    }`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            {hasNestedPaths && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1 h-auto"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
              </Button>
            )}
            <div className={`p-2 ${
              isCompleted ? "bg-green-50 dark:bg-green-900/20" : "bg-secondary"
            } rounded-lg inline-flex items-center justify-center w-10 h-10`}>
              {isCompleted ? 
                <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" /> : 
                getIcon()
              }
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {path.level}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">{path.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {path.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 pb-2">
        {isExpanded && hasNestedPaths && (
          <div className="mt-4 border-l-2 border-gray-200 dark:border-gray-800 pl-4">
            {path.subpaths!.map((subpath) => (
              <NestedPathCard 
                key={subpath.id}
                path={subpath}
                isNested={true}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2 border-t">
        <span className="text-sm text-muted-foreground">
          {path.count} {hasNestedPaths ? 'subpaths' : 'questions'}
        </span>
        <Link 
          to={hasNestedPaths ? `/subpaths/${path.id}` : `/path/${path.id}`}
          className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
        >
          {hasNestedPaths ? "View subpaths" : "Start learning"}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NestedPathCard;

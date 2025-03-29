
import React from "react";
import { Link } from "react-router-dom";
import { FileQuestion, Inbox, Search } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  message?: string;
  icon?: "search" | "inbox" | "question";
  buttonText?: string;
  buttonLink?: string;
  onClearSearch?: () => void;
  secondaryAction?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "No results found",
  icon = "search",
  buttonText,
  buttonLink,
  onClearSearch,
  secondaryAction,
}) => {
  const IconComponent = {
    search: Search,
    inbox: Inbox,
    question: FileQuestion,
  }[icon];

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="bg-muted rounded-full p-4 mb-4">
        <IconComponent className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">{message}</h3>
      
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {onClearSearch && (
          <Button onClick={onClearSearch} variant="outline">
            Clear Search
          </Button>
        )}
        
        {buttonText && buttonLink && (
          <Link to={buttonLink}>
            <Button>{buttonText}</Button>
          </Link>
        )}
        
        {secondaryAction}
      </div>
    </div>
  );
};

export default EmptyState;

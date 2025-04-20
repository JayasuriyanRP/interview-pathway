import React, { useState, useEffect } from "react";
import { ChevronRight, Undo, Edit, Clipboard, ClipboardCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface QuestionProps {
  index: number;
  id: string;
  question: string;
  level: string;
  answer: any;
  onMarkAsRead?: (id: string) => void;
  onUndoRead?: (id: string) => void;
  isRead?: boolean;
  highlightQuery?: string;
  isExpanded: boolean;
  onEdit?: (id: string, updatedQuestion: string, updatedAnswer: string) => void;
  editable?: boolean;
  isActive?: boolean;
  onSelect?: () => void;
  useCompactView?: boolean;
}

const levelBadgeVariant = {
  Beginner: "secondary",
  Intermediate: "default",
  Advanced: "destructive",
};

const Question: React.FC<QuestionProps> = ({
  index,
  id,
  question,
  level,
  onMarkAsRead,
  onUndoRead,
  isRead = false,
  highlightQuery = "",
  isActive = false,
  onSelect,
  useCompactView = false,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(question);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClick = () => {
    if (onSelect) {
      onSelect();
    }
    if (!isRead && onMarkAsRead) {
      onMarkAsRead(id);
    }
  };

  const handleUndoRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onUndoRead) {
      onUndoRead(id);
    }
  };

  return (
    <div
      className={cn(
        "bg-card rounded-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer",
        isRead
          ? "bg-green-200/50 dark:bg-green-950/50 border-green-400 dark:border-green-800"
          : "border-blue-400 dark:border-blue-800",
        isActive && "ring-2 ring-primary",
        useCompactView ? "p-2" : "p-3"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <h3 className="font-mono text-sm text-muted-foreground">
          {index + 1}.
        </h3>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className={cn("font-medium tracking-tight", 
              useCompactView ? "text-sm" : "text-sm sm:text-base"
            )}>
              {question}
            </h3>
            <button
              onClick={handleCopy}
              title="Copy question"
              className="text-muted-foreground hover:text-foreground p-1 rounded"
            >
              {copied ? <ClipboardCheck size={14} /> : <Clipboard size={14} />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {level && (
            <Badge 
              variant={levelBadgeVariant[level] || "default"} 
              className={cn("py-0.5", useCompactView ? "px-1.5 text-xs" : "px-2")}
            >
              {level}
            </Badge>
          )}
          {isRead && (
            <button
              type="button"
              title="Undo mark as read"
              className="text-muted-foreground hover:text-foreground"
              onClick={handleUndoRead}
            >
              <Undo size={14} />
            </button>
          )}
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default Question;

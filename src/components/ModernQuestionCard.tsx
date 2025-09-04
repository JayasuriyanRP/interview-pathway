import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  CheckCircle2,
  Undo2,
  Edit3,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Answer from "./Answer";
import MarkdownView from "./MarkdownView";
import EnhancedQAEditor from "./QuestionAnswerEditor";

interface ModernQuestionCardProps {
  index: number;
  id: string;
  question: string;
  level: string;
  answer: any;
  onMarkAsRead?: (id: string) => void;
  onUndoRead?: (id: string) => void;
  isRead?: boolean;
  highlightQuery?: string;
  isExpanded?: boolean;
  onEdit?: (id: string, updatedQuestion: string, updatedAnswer: string) => void;
  editable?: boolean;
}

const levelVariants = {
  Beginner: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800",
  Intermediate: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800", 
  Advanced: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-800",
};

const ModernQuestionCard: React.FC<ModernQuestionCardProps> = ({
  index,
  id,
  question,
  answer,
  level,
  onMarkAsRead,
  onUndoRead,
  isRead = false,
  highlightQuery = "",
  isExpanded = false,
  onEdit,
  editable = false,
}) => {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(question);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !isRead && onMarkAsRead) {
      onMarkAsRead(id);
    }
  };

  const handleUndoRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onUndoRead) {
      onUndoRead(id);
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveEdit = (updatedQuestion: string, updatedAnswer: string) => {
    if (onEdit) {
      onEdit(id, updatedQuestion, updatedAnswer);
    }
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const isMarkdown = typeof answer === "string";

  if (isEditing) {
    return (
      <Card className="border-blue-200 dark:border-blue-800 shadow-sm">
        <CardContent className="p-6">
          <EnhancedQAEditor
            initialQuestion={question}
            initialAnswer={answer.replace(/^```markdown\n?|```$/g, "")}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn(
      "group transition-all duration-300 hover:shadow-md",
      isRead 
        ? "border-green-200 bg-green-50/30 dark:border-green-800 dark:bg-green-950/10" 
        : "border-border hover:border-primary/30 hover:shadow-primary/5"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="outline" className="text-xs font-medium">
                #{index + 1}
              </Badge>
              <Badge 
                variant="secondary" 
                className={cn("text-xs", levelVariants[level] || levelVariants.Intermediate)}
              >
                {level}
              </Badge>
              {isRead && (
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
              )}
            </div>
            <h3 
              className="font-medium text-base leading-relaxed cursor-pointer hover:text-primary transition-colors pr-4"
              onClick={toggleAnswer}
            >
              {question}
            </h3>
          </div>
          
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBookmark}
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
            >
              {bookmarked ? 
                <BookmarkCheck className="w-4 h-4 text-primary" /> : 
                <Bookmark className="w-4 h-4" />
              }
            </Button>

            {editable && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditClick}
                className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            )}

            {isRead && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleUndoRead}
                className="h-8 w-8 p-0"
                title="Mark as unread"
              >
                <Undo2 className="w-4 h-4" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={toggleAnswer}
              className="h-8 w-8 p-0"
            >
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-200",
                isOpen && "rotate-180"
              )} />
            </Button>
          </div>
        </div>
      </CardHeader>

      {isOpen && (
        <>
          <Separator />
          <CardContent className="pt-4 pb-6">
            <div className="prose prose-sm max-w-none dark:prose-invert">
              {isMarkdown ? (
                <MarkdownView
                  content={answer.replace(/^```markdown\n?|```$/g, "")}
                />
              ) : (
                <Answer
                  answer={answer}
                  highlightQuery={highlightQuery}
                />
              )}
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default ModernQuestionCard;
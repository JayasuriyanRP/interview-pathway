
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ChevronDown, ChevronUp, Edit, Trash } from "lucide-react";
import { cn } from "@/lib/utils";
import CodeBlock from "./CodeBlock";
import { Link, useParams } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";
import { useUser } from "@clerk/clerk-react";
import { useToast } from "./ui/use-toast";

interface QuestionCardProps {
  id: number;
  question: string;
  answer: Array<{
    type: string;
    content: string;
    url?: string;
    language?: string;
  }>;
  isRead?: boolean;
  isEditable?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  answer,
  isRead = false,
  isEditable = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { pathId } = useParams<{ pathId: string }>();
  const { markQuestionAsRead } = useProgress();
  const { isSignedIn } = useUser();
  const { toast } = useToast();

  const handleToggle = () => {
    setExpanded(!expanded);
    if (pathId && !isRead) {
      markQuestionAsRead(pathId, id);
    }
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast({
      title: "Coming soon",
      description: "Delete functionality will be available soon.",
    });
  };

  // Render the answer parts based on their type
  const renderAnswerPart = (part: any, index: number) => {
    switch (part.type) {
      case "code":
        return (
          <CodeBlock
            key={index}
            language={part.language || "javascript"}
            code={part.content}
          />
        );
      case "link":
        return (
          <div key={index} className="mt-4 flex items-center">
            <a
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center"
            >
              {part.content || "Learn more"}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        );
      case "text":
      default:
        return (
          <div
            key={index}
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: part.content.replace(/\n/g, "<br />") }}
          />
        );
    }
  };

  return (
    <Card
      className={cn(
        "transition-all duration-300 overflow-hidden",
        isRead ? "border-muted" : "border-primary",
        expanded ? "shadow-md" : "hover:shadow-sm"
      )}
    >
      <CardContent
        className="p-5 cursor-pointer flex justify-between items-start"
        onClick={handleToggle}
      >
        <div className="flex-1 pr-4">
          <p
            className={cn(
              "text-lg font-medium transition-all",
              isRead ? "text-muted-foreground" : ""
            )}
          >
            {question}
          </p>
        </div>
        <div className="flex items-center">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-5 w-5 text-muted-foreground" />
          )}
        </div>
      </CardContent>

      {expanded && (
        <>
          <CardContent className="px-5 pt-0 pb-4">
            <div className="border-t pt-4 space-y-4">
              {Array.isArray(answer) ? (
                answer.map((part, i) => renderAnswerPart(part, i))
              ) : (
                <p>{answer}</p>
              )}
            </div>
          </CardContent>
          
          {isSignedIn && isEditable && pathId && (
            <CardFooter className="px-5 py-3 border-t flex justify-end gap-2 bg-muted/30">
              <Link to={`/path/${pathId}/edit-question/${id}`}>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleDeleteClick}
              >
                <Trash className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </CardFooter>
          )}
        </>
      )}
    </Card>
  );
};

export default QuestionCard;

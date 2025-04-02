import React, { useEffect, useState } from "react";
import { ChevronDown, CheckCircle2, Undo, Edit } from "lucide-react";
import Answer from "./Answer";
import MarkdownView from "./MarkdownView";
import { Badge } from "./ui/badge";
import EnhancedQAEditor from "./QuestionAnswerEditor";
import { Button } from "./ui/button";

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

  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

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

  const isMarkdown =
    typeof answer === "string" && answer.trim().startsWith("```markdown");

  if (isEditing) {
    return (
      <div className="mb-6 bg-card rounded-xl overflow-hidden border border-blue-200 dark:border-blue-800 shadow-sm p-4">
        <EnhancedQAEditor
          initialQuestion={question}
          initialAnswer={answer.replace(/^```markdown\n?|```$/g, "")}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      </div>
    );
  }
  
  return (
    <div
      className={`mb-6 bg-card rounded-xl overflow-hidden border ${isRead
        ? "border-gray-100 dark:border-gray-800"
        : "border-blue-100 dark:border-blue-800"
        } shadow-sm transition-all duration-300`}
    >
      <div
        className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-3"
        onClick={toggleAnswer}
      >
        <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex items-center gap-2">
            {isRead && (
              <CheckCircle2
                size={16}
                className="text-green-500 flex-shrink-0"
              />
            )}
            {editable && (
              <Button
                variant="ghost"
                size="sm"
                className="p-1 h-6 w-6"
                onClick={handleEditClick}
                title="Edit question"
              >
                <Edit size={16} />
              </Button>
            )}
            <h3 className="font-medium text-gray-500 dark:text-gray-400">
              {index + 1}.
            </h3>
            <h3 className="font-medium leading-tight">
              <code className="rounded">
                {question}
              </code>
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 mt-2 sm:mt-0">
          {level && (
            <Badge
              variant={levelBadgeVariant[level] || "default"}
              className="py-0.5 px-2"
            >
              {level}
            </Badge>
          )}
          {isRead && (
            <button
              type="button"
              title="Undo mark as read"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={handleUndoRead}
            >
              <Undo size={16} />
            </button>
          )}
          <ChevronDown
            className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
              }`}
          />
        </div>
      </div>

      {isOpen && (
        <div className="px-2 sm:px-6 pb-4 sm:pb-6 pt-1 sm:pt-2 border-t border-border animate-slideUp">
          {isMarkdown ? (
            <MarkdownView
              content={answer.replace(/^```markdown\n?|```$/g, "")}
            />
          ) : (
            <Answer answer={answer} highlightQuery={highlightQuery} />
          )}
        </div>
      )}
    </div>
  );
};

export default Question;

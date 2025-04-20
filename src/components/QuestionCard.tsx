
import React, { useEffect, useState } from "react";
import { ChevronRight, CheckCircle2, Undo, Edit, Clipboard, ClipboardCheck } from "lucide-react";
import Answer from "./Answer";
import MarkdownView from "./MarkdownView";
import { Badge } from "./ui/badge";
import EnhancedQAEditor from "./QuestionAnswerEditor";
import { Button } from "./ui/button";
import AnswerSidePanel from "./AnswerSidePanel";

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
  onSidePanelToggle?: (id: string, isOpen: boolean) => void;
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
  onSidePanelToggle,
}) => {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsOpen(isExpanded);
  }, [isExpanded]);

  useEffect(() => {
    // Notify parent component about side panel state changes
    if (onSidePanelToggle) {
      onSidePanelToggle(id, isOpen);
    }
  }, [isOpen, id, onSidePanelToggle]);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(question);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

  const isMarkdown = typeof answer === "string";

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
    <>
      <div
        className={`mb-4 bg-card rounded-xl border-2 overflow-hidden border ${
          isRead
            ? "bg-green-200/50 dark:bg-green-950/50 border-green-400 dark:border-green-800"
            : "border-blue-400 dark:border-blue-800"
        } shadow-sm transition-all duration-300 hover:shadow-md`}
      >
        <div
          className="p-3 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-2"
          onClick={toggleAnswer}
        >
          <div className="flex flex-1 flex-row justify-between sm:flex-row sm:items-center gap-2">
            <div className="flex items-center gap-2">
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
              <h3 className="font-mono text-sm text-muted-foreground">
                {index + 1}.
              </h3>
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm sm:text-base tracking-tight">
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
          </div>
          
          <div className="flex items-center gap-2 ml-auto">
            {level && (
              <Badge variant={levelBadgeVariant[level] || "default"} className="py-0.5 px-2">
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
            <ChevronRight
              className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <AnswerSidePanel
        question={question}
        answer={answer}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        highlightQuery={highlightQuery}
      />
    </>
  );
};

export default Question;

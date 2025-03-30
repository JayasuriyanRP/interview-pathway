import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import Answer from "./Answer";
import MarkdownView from "./MarkdownView";

interface QuestionProps {
  id: number;
  question: string;
  answer: any;
  onMarkAsRead?: (id: number) => void;
  isRead?: boolean;
  highlightQuery?: string;
}

const Question: React.FC<QuestionProps> = ({
  id,
  question,
  answer,
  onMarkAsRead,
  isRead = false,
  highlightQuery = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
    if (!isOpen && !isRead && onMarkAsRead) {
      onMarkAsRead(id);
    }
  };

  const isMarkdown =
    typeof answer === "string" && answer.trim().startsWith("```markdown");

  return (
    <div
      className={`mb-6 bg-card rounded-xl overflow-hidden border ${
        isRead
          ? "border-gray-100 dark:border-gray-800"
          : "border-blue-100 dark:border-blue-800"
      } shadow-sm transition-all duration-300`}
    >
      <div
        className="p-4 sm:p-6 cursor-pointer flex flex-row justify-between items-center gap-3"
        onClick={toggleAnswer}
      >
        <div className="flex items-center gap-3">
          {isRead && (
            <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
          )}
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            {id + 1} - {question}
          </h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
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

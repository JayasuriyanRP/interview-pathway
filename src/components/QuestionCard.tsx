import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import CodeBlock from "./CodeBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TableContent {
  type: "table";
  columns: string[];
  rows: string[][];
}

interface ContentBlock {
  type: "text" | "code" | "list" | "table" | "image" | "quote" | "note";
  content?: string;
  language?: string; // For code blocks
  items?: string[]; // For list blocks
  columns?: string[]; // For tables
  rows?: string[][]; // For tables
  imageUrl?: string; // For image blocks
  alt?: string; // For image blocks
  highlight?: boolean; // For highlighting important text or notes
}

interface QuestionCardProps {
  id: number;
  question: string;
  answer: ContentBlock[] | any;
  onMarkAsRead?: (id: number) => void;
  isRead?: boolean;
  highlightQuery?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
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

  // Format inline code and bold text in strings with search highlighting
  const formatText = (text: string) => {
    // First handle the search highlight if query exists
    if (highlightQuery.trim()) {
      const terms = highlightQuery.toLowerCase().split(" ");
      let processedText = text;

      // Apply highlighting for each search term
      terms.forEach((term) => {
        if (!term.trim()) return;
        const regex = new RegExp(`(${term})`, "gi");
        processedText = processedText.replace(
          regex,
          '<span class="bg-yellow-200 dark:bg-yellow-900 rounded px-0.5">$1</span>'
        );
      });

      // Split by code blocks
      const parts = processedText.split(/(`[^`]+`)/g);

      return parts.map((part, index) => {
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={index}
              className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
            >
              {part.slice(1, -1)}
            </code>
          );
        }

        // Handle bold text within each part
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);

        return boldParts.map((boldPart, boldIndex) => {
          if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
            return (
              <strong key={`${index}-${boldIndex}`} className="font-semibold">
                {boldPart.slice(2, -2)}
              </strong>
            );
          }

          // For normal text, allow the HTML to be rendered for highlighting
          return (
            <span
              key={`${index}-${boldIndex}`}
              dangerouslySetInnerHTML={{ __html: boldPart }}
            />
          );
        });
      });
    }

    // If no search query, use the original formatting
    const parts = text.split(/(`[^`]+`)/g);

    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={index}
            className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      // Handle bold text
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);

      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          return (
            <strong key={`${index}-${boldIndex}`} className="font-semibold">
              {boldPart.slice(2, -2)}
            </strong>
          );
        }
        return boldPart;
      });
    });
  };

  // Render a single content block
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "code":
        return (
          <CodeBlock
            key={index}
            language={block.language || "text"}
            content={block.content!}
          />
        );
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 mb-4 space-y-1.5">
            {block.items?.map((item, i) => (
              <li key={i} className="mb-1.5">
                {formatText(item)}
              </li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={index} className="overflow-x-auto my-4">
            <table className="table-auto border-collapse border border-gray-200 dark:border-gray-700 w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  {block.columns?.map((col, colIndex) => (
                    <th
                      key={colIndex}
                      className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left"
                    >
                      {formatText(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows?.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 dark:border-gray-700 px-4 py-2"
                      >
                        {formatText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "image":
        return (
          <figure key={index} className="my-4">
            <img
              src={block.imageUrl}
              alt={block.alt || "Image"}
              className="rounded-lg max-w-full h-auto mx-auto"
            />
            {block.content && (
              <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                {formatText(block.content)}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="pl-4 border-l-4 border-gray-300 dark:border-gray-700 italic my-4 text-gray-700 dark:text-gray-300"
          >
            {formatText(block.content!)}
          </blockquote>
        );
      case "note":
        return (
          <div
            key={index}
            className={`p-4 my-4 rounded-lg ${
              block.highlight
                ? "bg-amber-50 border border-amber-200 dark:bg-amber-900/30 dark:border-amber-800"
                : "bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800"
            }`}
          >
            <p className="text-sm font-medium mb-1">
              {block.highlight ? "Important Note:" : "Note:"}
            </p>
            <div>{formatText(block.content!)}</div>
          </div>
        );
      case "text":
      default:
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {formatText(block.content!)}
          </p>
        );
    }
  };

  const renderAnswer = () => {
    if (typeof answer === "string") {
      return <p className="mb-4 leading-relaxed">{formatText(answer)}</p>;
    }

    if (Array.isArray(answer)) {
      return (
        <div className="prose prose-sm max-w-none dark:prose-invert">
          {answer.map((block, index) => renderContentBlock(block, index))}
        </div>
      );
    }

    return (
      <p className="text-gray-500 dark:text-gray-400">No content available</p>
    );
  };

  return (
    <div
      className={`mb-6 bg-card rounded-xl overflow-hidden border ${
        isRead
          ? "border-gray-100 dark:border-gray-800"
          : "border-blue-100 dark:border-blue-800"
      } shadow-sm transition-all duration-300`}
    >
      <div
        className="p-4 sm:p-6 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0"
        onClick={toggleAnswer}
      >
        <div className="flex items-center gap-3">
          {isRead && (
            <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
          )}
          <h3 className="text-lg font-medium">
            {id + 1} - {formatText(question)}
          </h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-border animate-slideUp">
          {renderAnswer()}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

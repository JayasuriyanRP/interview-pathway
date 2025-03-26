
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CodeBlock from "./CodeBlock";

interface ContentBlock {
  type: "text" | "code" | "list";
  content: string;
  language?: string; // For code blocks
  items?: string[]; // For list blocks
}

interface QuestionCardProps {
  id: number;
  question: string;
  answer: ContentBlock[] | any; // Support both old and new formats
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  id,
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  // Format inline code and bold text in strings
  const formatText = (text: string) => {
    // First split by backticks to handle code blocks
    const parts = text.split(/(`[^`]+`)/g);
    
    return parts.map((part, index) => {
      // If this is a code segment, render it as code
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} className="bg-gray-200 text-sm px-1 rounded">
            {part.slice(1, -1)}
          </code>
        );
      }
      
      // Otherwise, look for bold text within this segment
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
          return (
            <strong key={`${index}-${boldIndex}`}>
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
        return <CodeBlock key={index} language={block.language || "text"} content={block.content} />;
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {block.items?.map((item, i) => (
              <li key={i} className="mb-2">{formatText(item)}</li>
            ))}
          </ul>
        );
      case "text":
      default:
        return (
          <p key={index} className="mb-4">
            {formatText(block.content)}
          </p>
        );
    }
  };

  // Render the answer (supporting both old and new formats)
  const renderAnswer = () => {
    // Handle the legacy format (object with type "code")
    if (typeof answer === "object" && answer.type === "code") {
      return <CodeBlock language={answer.language} content={answer.content} />;
    }

    // Handle the legacy format (plain string with paragraphs)
    if (typeof answer === "string") {
      return (
        <div className="prose prose-sm max-w-none">
          {answer.split("\n\n").map((paragraph: string, index: number) => (
            <p key={index} className="mb-4">
              {formatText(paragraph)}
            </p>
          ))}
        </div>
      );
    }

    // Handle the new format (array of content blocks)
    if (Array.isArray(answer)) {
      return (
        <div className="prose prose-sm max-w-none">
          {answer.map((block, index) => renderContentBlock(block, index))}
        </div>
      );
    }

    // Fallback for empty or invalid content
    return <p className="text-gray-500">No content available</p>;
  };

  return (
    <div className="mb-6 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300">
      <div
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-medium">
          {id + 1} - {formatText(question)}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100 animate-slideUp">
          {renderAnswer()}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

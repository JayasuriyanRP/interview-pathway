import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CodeBlock from "./CodeBlock";

interface TableContent {
  type: "table";
  columns: string[];
  rows: string[][];
}

interface ContentBlock {
  type: "text" | "code" | "list" | "table";
  content?: string;
  language?: string; // For code blocks
  items?: string[]; // For list blocks
  columns?: string[]; // For tables
  rows?: string[][]; // For tables
}

interface QuestionCardProps {
  id: number;
  question: string;
  answer: ContentBlock[] | any;
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
    const parts = text.split(/(`[^`]+`)/g);

    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={index} className="bg-gray-200 text-sm px-1 rounded">
            {part.slice(1, -1)}
          </code>
        );
      }

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
        return <CodeBlock key={index} language={block.language || "text"} content={block.content!} />;
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 mb-4">
            {block.items?.map((item, i) => (
              <li key={i} className="mb-2">{formatText(item)}</li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={index} className="overflow-x-auto my-4">
            <table className="table-auto border-collapse border border-gray-200 w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  {block.columns?.map((col, colIndex) => (
                    <th key={colIndex} className="border border-gray-300 px-4 py-2 text-left">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows?.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                        {formatText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "text":
      default:
        return (
          <p key={index} className="mb-4">
            {formatText(block.content!)}
          </p>
        );
    }
  };

  const renderAnswer = () => {
    if (typeof answer === "string") {
      return <p className="mb-4">{formatText(answer)}</p>;
    }

    if (Array.isArray(answer)) {
      return (
        <div className="prose prose-sm max-w-none">
          {answer.map((block, index) => renderContentBlock(block, index))}
        </div>
      );
    }

    return <p className="text-gray-500">No content available</p>;
  };

  return (
    <div className="mb-6 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300">
      <div className="p-6 cursor-pointer flex justify-between items-center" onClick={toggleAnswer}>
        <h3 className="text-lg font-medium">{id + 1} - {formatText(question)}</h3>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} />
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

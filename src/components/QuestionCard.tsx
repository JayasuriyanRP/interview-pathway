
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CodeBlock from "./CodeBlock";

interface QuestionCardProps {
  id: string;
  question: string;
  answer: any;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  const renderAnswer = () => {
    if (typeof answer === "object" && answer.type === "code") {
      return <CodeBlock language={answer.language} content={answer.content} />;
    }

    return (
      <div className="prose prose-sm max-w-none">
        {answer.split("\n\n").map((paragraph: string, index: number) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="mb-6 bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300">
      <div
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-medium">{question}</h3>
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

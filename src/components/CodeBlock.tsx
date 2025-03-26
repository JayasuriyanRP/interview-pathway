
import React from "react";

interface CodeBlockProps {
  language: string;
  content: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, content }) => {
  return (
    <div className="my-4 overflow-hidden rounded-lg shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300">
        <span className="text-xs font-medium">{language}</span>
      </div>
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;

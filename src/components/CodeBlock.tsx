
import React, { useEffect, useRef, useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-java";
import "prismjs/components/prism-go";
import "prismjs/components/prism-csharp";

interface CodeBlockProps {
  language: string;
  content: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, content }) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [content, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-700 shadow-sm">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300">
        <span className="text-xs font-medium uppercase">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs font-medium hover:text-white transition"
          aria-label="Copy code"
        >
          {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code block */}
      <pre className="bg-gray-900 p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {content}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;

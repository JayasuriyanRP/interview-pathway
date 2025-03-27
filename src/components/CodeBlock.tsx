
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
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-markup"; // HTML
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

interface CodeBlockProps {
  language: string;
  content: string;
  filename?: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  language, 
  content, 
  filename,
  showLineNumbers = true 
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  // Map common language aliases to Prism's language names
  const languageMap: Record<string, string> = {
    js: "javascript",
    jsx: "javascript",
    ts: "typescript",
    tsx: "typescript",
    py: "python",
    sh: "bash",
    shell: "bash",
    html: "markup",
    xml: "markup",
    yml: "yaml",
    cs: "csharp",
    golang: "go"
  };

  const normalizedLanguage = languageMap[language] || language;

  useEffect(() => {
    if (codeRef.current) {
      if (showLineNumbers && codeRef.current.parentElement) {
        codeRef.current.parentElement.classList.add("line-numbers");
      }
      Prism.highlightElement(codeRef.current);
    }
  }, [content, normalizedLanguage, showLineNumbers]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-700 shadow-sm">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase">{normalizedLanguage}</span>
          {filename && (
            <span className="text-xs text-gray-400 italic">{filename}</span>
          )}
        </div>
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
      <div className={`bg-gray-900 overflow-x-auto ${showLineNumbers ? 'line-numbers' : ''}`}>
        <pre className="p-4" style={{ margin: 0 }}>
          <code ref={codeRef} className={`language-${normalizedLanguage}`}>
            {content}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;

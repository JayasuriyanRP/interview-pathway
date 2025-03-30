import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Clipboard, ClipboardCheck } from "lucide-react";

const MarkdownView = ({ content }: { content: string }) => {
  const [copiedMap, setCopiedMap] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  const handleCopy = (codeText: string, key: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedMap((prev) => ({ ...prev, [key]: true }));
  
    setTimeout(() => {
      setCopiedMap((prev) => {
        const newMap = { ...prev };
        delete newMap[key]; // Clean up state
        return newMap;
      });
      Prism.highlightAll(); // Reapply highlighting
    }, 2000);
  };
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({
            node,
            inline = false,
            className,
            children,
            ...props
          }: {
            node: any;
            inline?: boolean;
            className?: string;
            children: React.ReactNode;
          }) {
            const match = /language-(\w+)/.exec(className || "");
            const codeText = String(children).replace(/\n$/, "");
            const uniqueKey = `${codeText}-${match?.[1] || "plain"}`;

            return !inline && match ? (
              <div className="relative">
                <button
                  onClick={() => handleCopy(codeText, uniqueKey)}
                  className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600"
                >
                  {copiedMap[uniqueKey] ? (
                    <ClipboardCheck size={16} />
                  ) : (
                    <Clipboard size={16} />
                  )}
                </button>
                <pre className="rounded-lg p-4 overflow-auto bg-gray-900 text-white">
                  <code className={`language-${match[1]}`} {...props}>
                    {codeText}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="bg-gray-200 px-1 rounded" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;

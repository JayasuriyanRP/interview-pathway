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
              <code className=" px-1 rounded" {...props}>
                {children}
              </code>
            );
          },
          h1: ({ children }) => <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
          p: ({ children }) => <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600 dark:text-gray-400">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a href={href} className="text-blue-500 hover:underline">
              {children}
            </a>
          ),
          strong: ({ children }) => <strong className="font-bold text-gray-900 dark:text-gray-100">{children}</strong>,
          em: ({ children }) => <em className="italic text-gray-800 dark:text-gray-200">{children}</em>,
          hr: () => <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;
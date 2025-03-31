import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Clipboard, ClipboardCheck } from "lucide-react";

const MarkdownView = ({ content }: { content: string }) => {
  const copiedMapRef = useRef<{ [key: string]: boolean }>({});
  const copyTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  const handleCopy = (
    codeText: string,
    key: string,
    codeElement: HTMLElement | null
  ) => {
    navigator.clipboard.writeText(codeText);
    copiedMapRef.current[key] = true;

    if (copyTimeouts.current[key]) {
      clearTimeout(copyTimeouts.current[key]);
    }

    copyTimeouts.current[key] = setTimeout(() => {
      copiedMapRef.current[key] = false;
      if (codeElement) {
        Prism.highlightElement(codeElement);
      }
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
                  onClick={(e) => {
                    e.preventDefault();
                    const codeElement = e.currentTarget
                      .nextSibling as HTMLElement;
                    handleCopy(codeText, uniqueKey, codeElement);
                  }}
                  className="absolute top-2 right-2 bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600"
                >
                  {copiedMapRef.current[uniqueKey] ? (
                    <ClipboardCheck size={16} />
                  ) : (
                    <Clipboard size={16} />
                  )}
                </button>
                <pre className="rounded-lg p-4 overflow-auto bg-gray-900 text-white whitespace-pre-wrap break-words">
                  <code className={`language-${match[1]}`} {...props}>
                    {codeText}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="px-1 rounded" {...props}>
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h1 className="font-bold mt-4 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-semibold mt-4 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-medium mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
          ol: ({ children }) => (
            <ol className="list-decimal pl-6">{children}</ol>
          ),
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
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-gray-800 dark:text-gray-200">
              {children}
            </em>
          ),
          hr: () => (
            <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full text-sm">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;

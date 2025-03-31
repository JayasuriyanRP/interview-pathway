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
                <pre className="rounded-lg p-4 overflow-auto bg-gray-900 text-white">
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
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownView;

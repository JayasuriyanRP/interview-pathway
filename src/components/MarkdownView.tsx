import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Clipboard, ClipboardCheck, WrapText } from "lucide-react";
import { Button } from "./ui/button";

const MarkdownView = ({ content }: { content: string }) => {
  const copiedMapRef = useRef<{ [key: string]: boolean }>({});
  const copyTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const [wrapEnabled, setWrapEnabled] = useState<{ [key: string]: boolean }>(
    {}
  );

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

  const toggleWrap = (key: string) => {
    setWrapEnabled((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="prose prose-lg max-w-none font-sans tracking-wide dark:prose-invert">
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
            const uniqueKey = `${codeText.substring(0, 20)}-${
              match?.[1] || "plain"
            }`;

            return !inline && match ? (
              <div className="relative">
                <div className="absolute top-2 right-2 flex space-x-1 z-10">
                  <button
                    onClick={() => toggleWrap(uniqueKey)}
                    className="bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600"
                    title="Toggle word wrap"
                  >
                    <WrapText size={16} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      const codeElement =
                        e.currentTarget.parentElement?.nextElementSibling?.querySelector(
                          "code"
                        ) as HTMLElement;
                      handleCopy(codeText, uniqueKey, codeElement);
                    }}
                    className="bg-gray-700 text-white p-1 rounded-md hover:bg-gray-600"
                    title="Copy code"
                  >
                    {copiedMapRef.current[uniqueKey] ? (
                      <ClipboardCheck size={16} />
                    ) : (
                      <Clipboard size={16} />
                    )}
                  </button>
                </div>
                <pre
                  className={`rounded-lg p-4 overflow-auto bg-gray-900 text-white ${
                    wrapEnabled[uniqueKey]
                      ? "whitespace-pre-wrap break-words"
                      : ""
                  }`}
                >
                  <code className={`language-${match[1]}`} {...props}>
                    {codeText}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="font-mono text-sm tracking-normal dark:bg-gray-800 px-1 rounded">
                {children}
              </code>
            );
          },
          h1: ({ children }) => (
            <h1 className="font-heading font-bold text-2xl tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-bold text-xl mt-5 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-semibold text-lg mt-4 mb-2">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-sm sm:text-base md:text-[1rem] text-gray-700 dark:text-gray-300 leading-relaxed">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="text-sm sm:text-base md:text-[1rem] list-disc pl-6 marker:text-gray-700 dark:marker:text-gray-300">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="text-sm sm:text-base md:text-[1rem] list-decimal pl-6 marker:text-gray-700 dark:marker:text-gray-300">
              {children}
            </ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="text-sm sm:text-base md:text-[1rem] border-l-4 border-gray-500 pl-4 italic text-gray-600 dark:text-gray-400">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-sm sm:text-base md:text-[1rem] text-blue-500 hover:underline"
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-gray-900 dark:text-gray-100">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-sm sm:text-base md:text-[1rem] text-gray-800 dark:text-gray-200">
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
            <th className="border text-sm sm:text-base md:text-[1rem] border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border text-sm sm:text-base md:text-[1rem] border-gray-300 dark:border-gray-700 px-4 py-2">
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

import React from "react";
import { ExternalLink } from "lucide-react";
import CodeBlock from "./CodeBlock";
import MarkdownView from "./MarkdownView";

interface ExternalLink {
  title: string;
  url: string;
}

interface ContentBlock {
  type: "text" | "code" | "list" | "table" | "image" | "quote" | "note";
  content?: string;
  language?: string;
  items?: string[];
  columns?: string[];
  rows?: string[][];
  imageUrl?: string;
  alt?: string;
  highlight?: boolean;
  links?: ExternalLink[];
}

interface AnswerProps {
  answer: ContentBlock[] | string;
  highlightQuery?: string;
}

const Answer: React.FC<AnswerProps> = ({ answer, highlightQuery = "" }) => {
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "code":
        return (
          (block.language != "markdown") ?
            <CodeBlock
              key={index}
              language={block.language || "text"}
              content={block.content || ""}
            /> :
            <MarkdownView
              content={block.content.replace(/^```markdown\n?|```$/g, "")}
            />
        );
      case "list":
        return (
          <ul key={index} className="list-disc pl-5 mb-4 space-y-1.5">
            {block.items?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      case "table":
        return (
          <div key={index} className="overflow-x-auto my-4">
            <table className="table-auto border-collapse border border-gray-200 dark:border-gray-700 w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  {block.columns?.map((col, colIndex) => (
                    <th
                      key={colIndex}
                      className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows?.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="border border-gray-300 dark:border-gray-700 px-4 py-2"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "image":
        return (
          <figure key={index} className="my-4">
            <img
              src={block.imageUrl}
              alt={block.alt || "Image"}
              className="rounded-lg max-w-full h-auto mx-auto"
            />
            {block.content && (
              <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
                {block.content}
              </figcaption>
            )}
          </figure>
        );
      case "quote":
        return (
          <blockquote
            key={index}
            className="pl-4 border-l-4 border-gray-300 dark:border-gray-700 italic my-4 text-gray-700 dark:text-gray-300"
          >
            {block.content}
          </blockquote>
        );
      case "note":
        return (
          <div
            key={index}
            className={`p-4 my-4 rounded-lg ${block.highlight
              ? "bg-amber-50 border border-amber-200 dark:bg-amber-900/30 dark:border-amber-800"
              : "bg-blue-50 border border-blue-200 dark:bg-blue-900/30 dark:border-blue-800"
              }`}
          >
            <p className="text-sm font-medium mb-1">
              {block.highlight ? "Important Note:" : "Note:"}
            </p>
            <div>{block.content}</div>
          </div>
        );
      case "text":
      default:
        return (
          <p key={index} className="mb-4 leading-relaxed">
            {block.content}
          </p>
        );
    }
  };

  const getExternalLinks = (): ExternalLink[] => {
    if (typeof answer === "string") return [];
    return answer.flatMap((block) => block.links || []);
  };

  const allLinks = getExternalLinks();

  return (
    <div className="prose prose-sm max-w-none dark:prose-invert">
      {typeof answer === "string" ? (
        <p className="mb-4 leading-relaxed">{answer}</p>
      ) : (
        answer.map((block, index) => renderContentBlock(block, index))
      )}

      {allLinks.length > 0 && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <h4 className="text-sm font-medium mb-2 flex items-center">
            <ExternalLink className="w-4 h-4 mr-2" />
            External Resources
          </h4>
          <ul className="space-y-2">
            {allLinks.map((link, i) => (
              <li key={i} className="text-sm">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  {link.title}
                  <ExternalLink className="w-3 h-3 ml-1 inline-block" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Answer;

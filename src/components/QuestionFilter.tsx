
import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface QuestionFilterProps {
  questions: any[];
  onFilterChange: (filteredQuestions: any[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Helper to highlight all terms in a text
function highlightText(text: string, terms: string[]): string {
  if (!terms.length || !text) return text;
  let pattern = terms
    .filter(t => t.trim())
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  if (!pattern) return text;
  const regex = new RegExp(`(${pattern})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({
  questions,
  onFilterChange,
  searchQuery,
  setSearchQuery,
}) => {
  const [filteredCount, setFilteredCount] = useState(questions.length);

  useEffect(() => {
    if (!searchQuery.trim()) {
      onFilterChange(questions);
      setFilteredCount(questions.length);
      return;
    }

    const terms = searchQuery.toLowerCase().split(" ").filter(Boolean);
    const filtered = questions.filter((q) => {
      const questionMatches = terms.every(term =>
        q.question.toLowerCase().includes(term)
      );

      const answerMatches =
        typeof q.answer === "string"
          ? terms.every(term => q.answer.toLowerCase().includes(term))
          : Array.isArray(q.answer)
            ? terms.every(term =>
                q.answer.some(
                  block =>
                    block.type === "text" &&
                    block.content &&
                    block.content.toLowerCase().includes(term)
                )
              )
            : false;

      return questionMatches || answerMatches;
    });

    // Generate highlighted questions/answers
    const highlightedFiltered = filtered.map(q => {
      // Clone original
      const newQ = { ...q };
      newQ._highlightedQuestion = highlightText(q.question, terms);

      if (typeof q.answer === "string") {
        newQ._highlightedAnswer = highlightText(q.answer, terms);
      } else if (Array.isArray(q.answer)) {
        newQ._highlightedAnswer = q.answer.map((block) => {
          if (block.type === "text" && block.content) {
            return {
              ...block,
              content: highlightText(block.content, terms),
            };
          }
          return block;
        });
      } else {
        newQ._highlightedAnswer = q.answer;
      }

      return newQ;
    });

    onFilterChange(highlightedFiltered);
    setFilteredCount(filtered.length);
  }, [searchQuery, questions, onFilterChange]);

  return (
    <div className="relative mb-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Filter questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 py-2 w-full rounded-lg border border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      {searchQuery && (
        <div className="mt-2 text-sm text-gray-500">
          Found {filteredCount} matching questions
        </div>
      )}
    </div>
  );
};

export default QuestionFilter;


import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface QuestionFilterProps {
  questions: any[];
  onFilterChange: (filteredQuestions: any[]) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({
  questions,
  onFilterChange,
  searchQuery,
  setSearchQuery,
}) => {
  // Filter questions based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      onFilterChange(questions);
      return;
    }

    const terms = searchQuery.toLowerCase().split(" ");
    const filtered = questions.filter((q) => {
      // Search in question text
      const questionMatches = terms.every(term => 
        q.question.toLowerCase().includes(term)
      );
      
      // Search in answer text if it's a string
      const answerMatches = typeof q.answer === "string" 
        ? terms.every(term => q.answer.toLowerCase().includes(term)) 
        : Array.isArray(q.answer)
          ? terms.every(term => 
              q.answer.some(block => 
                block.type === "text" && block.content && 
                block.content.toLowerCase().includes(term)
              )
            )
          : false;
      
      return questionMatches || answerMatches;
    });
    
    onFilterChange(filtered);
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
          Found {filtered?.length || 0} matching questions
        </div>
      )}
    </div>
  );
};

export default QuestionFilter;

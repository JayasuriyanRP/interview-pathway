
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckIcon, Filter } from "lucide-react";

interface QuestionFilterProps {
  filter: string; // Added this prop
  setFilter: (filter: string) => void; // Added this prop
  questions?: any[]; // Made optional
  onFilterChange?: (filteredQuestions: any[]) => void; // Made optional
  searchQuery?: string; // Made optional
  setSearchQuery?: (query: string) => void; // Made optional
}

const QuestionFilter: React.FC<QuestionFilterProps> = ({
  filter,
  setFilter,
  questions,
  onFilterChange,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Filter className="h-3.5 w-3.5" />
          <span>
            {filter === "all"
              ? "All"
              : filter === "read"
              ? "Read"
              : "Unread"}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setFilter("all")}>
          <span className="flex items-center">
            All
            {filter === "all" && <CheckIcon className="ml-2 h-4 w-4" />}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilter("read")}>
          <span className="flex items-center">
            Read
            {filter === "read" && <CheckIcon className="ml-2 h-4 w-4" />}
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setFilter("unread")}>
          <span className="flex items-center">
            Unread
            {filter === "unread" && <CheckIcon className="ml-2 h-4 w-4" />}
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default QuestionFilter;

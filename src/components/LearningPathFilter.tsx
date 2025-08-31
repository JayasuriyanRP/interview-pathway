import React from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

interface LearningPathFilterProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  levelFilter: string | null;
  setLevelFilter: (level: string | null) => void;
  progressPercentage: number;
}

const LearningPathFilter: React.FC<LearningPathFilterProps> = ({
  searchQuery,
  setSearchQuery,
  levelFilter,
  setLevelFilter,
  progressPercentage,
}) => {
  return (
    <div className="space-y-4 mb-6">
      {/* Progress Bar */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Progress
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {progressPercentage}%
          </span>
        </div>
        <Progress value={progressPercentage} className="w-full" />
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>

        {/* Level Filter */}
        <div className="w-full sm:w-48">
          <Select
            value={levelFilter || "all"}
            onValueChange={(value) => setLevelFilter(value === "all" ? null : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
              <SelectItem value="Expert">Expert</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default LearningPathFilter;

import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search subpaths..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 w-full"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSearchQuery("")}>
            All Levels
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSearchQuery("beginner")}>
            Beginner
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSearchQuery("intermediate")}>
            Intermediate
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSearchQuery("advanced")}>
            Advanced
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterSearch;

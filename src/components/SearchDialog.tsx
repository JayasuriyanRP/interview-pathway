
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/hooks/useData";
import { Search, X, FileText, Book, Folders, MessagesSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchResult {
  id: string;
  type: "path" | "subpath" | "question";
  title: string;
  parentPath?: string;
  questionId?: number;
  path?: string;
  matchScore?: number;
  highlight?: string;
}

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPathId?: string;
}

const SearchDialog: React.FC<SearchDialogProps> = ({
  open,
  onOpenChange,
  currentPathId,
}) => {
  const { paths, questions } = useData();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem("recent-searches");
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  // Save recent searches to localStorage
  useEffect(() => {
    localStorage.setItem("recent-searches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  // Function to generate a snippet with highlighted match
  const generateHighlight = (text: string, query: string): string => {
    if (!text || !query) return text;
    
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);
    
    if (index === -1) return text.substring(0, 100) + "...";
    
    const start = Math.max(0, index - 30);
    const end = Math.min(text.length, index + query.length + 30);
    let snippet = text.substring(start, end);
    
    if (start > 0) snippet = "..." + snippet;
    if (end < text.length) snippet += "...";
    
    return snippet;
  };

  // Debounced search function
  const debouncedSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        return;
      }

      const queryTerms = query.toLowerCase().split(" ");
      const results: SearchResult[] = [];

      // Search in paths
      paths.forEach((path) => {
        const titleMatches = queryTerms.every(term => 
          path.title.toLowerCase().includes(term)
        );
        
        const descMatches = queryTerms.every(term => 
          path.description.toLowerCase().includes(term)
        );
        
        if (titleMatches || descMatches) {
          results.push({
            id: path.id,
            type: "path",
            title: path.title,
            path: `/subpaths/${path.id}`,
            matchScore: titleMatches ? 10 : 5,
            highlight: descMatches 
              ? generateHighlight(path.description, query)
              : path.title
          });
        }

        // Search in subpaths
        if (path.subpaths) {
          path.subpaths.forEach((subpath) => {
            const subpathTitleMatches = queryTerms.every(term => 
              subpath.title.toLowerCase().includes(term)
            );
            
            const subpathDescMatches = queryTerms.every(term => 
              subpath.description.toLowerCase().includes(term)
            );
            
            if (subpathTitleMatches || subpathDescMatches) {
              results.push({
                id: subpath.id,
                type: "subpath",
                title: subpath.title,
                parentPath: path.title,
                path: `/path/${subpath.id}`,
                matchScore: subpathTitleMatches ? 8 : 4,
                highlight: subpathDescMatches 
                  ? generateHighlight(subpath.description, query)
                  : subpath.title
              });
            }

            // Search in questions
            const subpathQuestions = questions[subpath.id] || [];
            subpathQuestions.forEach((question, index) => {
              const questionMatches = queryTerms.every(term => 
                question.question.toLowerCase().includes(term)
              );
              
              const answerMatches = typeof question.answer === "string" && 
                queryTerms.every(term => question.answer.toLowerCase().includes(term));
              
              if (questionMatches || answerMatches) {
                results.push({
                  id: `${subpath.id}-q-${index}`,
                  type: "question",
                  title: question.question,
                  parentPath: subpath.title,
                  questionId: index,
                  path: `/path/${subpath.id}?q=${index}`,
                  matchScore: questionMatches ? 6 : 2,
                  highlight: answerMatches && typeof question.answer === "string"
                    ? generateHighlight(question.answer, query)
                    : question.question
                });
              }
            });
          });
        }
      });

      // Sort results by match score (higher is better)
      results.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
      
      // Limit to top 15 results
      setSearchResults(results.slice(0, 15));
      
      // Add to recent searches if there are results
      if (results.length > 0 && !recentSearches.includes(query) && query.length > 2) {
        setRecentSearches(prev => [query, ...prev.slice(0, 4)]);
      }
    },
    [paths, questions, recentSearches]
  );

  // Search when query changes
  useEffect(() => {
    const timer = setTimeout(() => {
      debouncedSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearch]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.path as string);
    onOpenChange(false);
    setSearchQuery("");
  };

  const handleRecentSearch = (query: string) => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <Command className="rounded-lg border shadow-md">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <CommandInput
              placeholder="Search for paths, topics, or questions..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="h-4 w-4 opacity-50 hover:opacity-100"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {/* Recent searches */}
            {searchQuery.length === 0 && recentSearches.length > 0 && (
              <CommandGroup heading="Recent Searches">
                {recentSearches.map((query) => (
                  <CommandItem
                    key={`recent-${query}`}
                    onSelect={() => handleRecentSearch(query)}
                    className="flex items-center px-4 py-2"
                  >
                    <div className="mr-2 text-gray-400">
                      <Search size={16} />
                    </div>
                    <span>{query}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {/* Search results */}
            {searchResults.length > 0 && (
              <CommandGroup heading="Search Results">
                {searchResults.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex items-center px-4 py-2"
                  >
                    <div className="mr-2">
                      {result.type === "question" ? (
                        <MessagesSquare
                          size={16}
                          className="text-blue-500"
                        />
                      ) : result.type === "subpath" ? (
                        <Book
                          size={16}
                          className="text-green-500"
                        />
                      ) : (
                        <Folders
                          size={16}
                          className="text-purple-500"
                        />
                      )}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-medium truncate">{result.title}</span>
                      {result.parentPath && (
                        <span className="text-xs text-gray-500">
                          {result.parentPath}
                        </span>
                      )}
                      {result.highlight && result.highlight !== result.title && (
                        <span className="text-xs text-gray-600 truncate mt-1">
                          {result.highlight}
                        </span>
                      )}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;

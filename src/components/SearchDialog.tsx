
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "@/hooks/useData";
import { Search, X, FileText } from "lucide-react";
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
  const navigate = useNavigate();

  // Build search index
  useEffect(() => {
    if (!open || !searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search in paths
    paths.forEach((path) => {
      if (
        path.title.toLowerCase().includes(query) ||
        path.description.toLowerCase().includes(query)
      ) {
        results.push({
          id: path.id,
          type: "path",
          title: path.title,
          path: `/subpaths/${path.id}`,
        });
      }

      // Search in subpaths
      if (path.subpaths) {
        path.subpaths.forEach((subpath) => {
          if (
            subpath.title.toLowerCase().includes(query) ||
            subpath.description.toLowerCase().includes(query)
          ) {
            results.push({
              id: subpath.id,
              type: "subpath",
              title: subpath.title,
              parentPath: path.title,
              path: `/path/${subpath.id}`,
            });
          }

          // Search in questions if we're in a subpath
          const subpathQuestions = questions[subpath.id] || [];
          subpathQuestions.forEach((question, index) => {
            if (
              question.question.toLowerCase().includes(query) ||
              (typeof question.answer === "string" &&
                question.answer.toLowerCase().includes(query))
            ) {
              results.push({
                id: `${subpath.id}-q-${index}`,
                type: "question",
                title: question.question,
                parentPath: subpath.title,
                questionId: index,
                path: `/path/${subpath.id}?q=${index}`,
              });
            }
          });
        });
      }
    });

    setSearchResults(results);
  }, [searchQuery, open, paths, questions, currentPathId]);

  const handleSelect = (result: SearchResult) => {
    navigate(result.path as string);
    onOpenChange(false);
    setSearchQuery("");
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
            {searchResults.length > 0 && (
              <CommandGroup heading="Search Results">
                {searchResults.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => handleSelect(result)}
                    className="flex items-center px-4 py-2"
                  >
                    <div className="mr-2">
                      <FileText
                        size={16}
                        className={
                          result.type === "question"
                            ? "text-blue-500"
                            : result.type === "subpath"
                            ? "text-green-500"
                            : "text-purple-500"
                        }
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{result.title}</span>
                      {result.parentPath && (
                        <span className="text-xs text-gray-500">
                          {result.parentPath}
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

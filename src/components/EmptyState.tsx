
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyStateProps {
  message: string;
  onClearSearch: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, onClearSearch }) => {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center py-8">
        <Search className="h-10 w-10 text-muted-foreground mb-4" />
        <p className="text-muted-foreground text-center">{message}</p>
        <Button 
          variant="link" 
          onClick={onClearSearch} 
          className="mt-2"
        >
          Clear search
        </Button>
      </CardContent>
    </Card>
  );
};

export default EmptyState;

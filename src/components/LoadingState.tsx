
import React from "react";
import Header from "./Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const LoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header title="Loading..." showBackButton={true} />
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-1/3 mb-2" />
            <Skeleton className="h-4 w-full" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-48 w-full rounded-xl" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoadingState;

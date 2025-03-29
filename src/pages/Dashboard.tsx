
import React, { useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { PlusCircle, Edit, Trash, FolderPlus } from "lucide-react";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { useToast } from "../components/ui/use-toast";
import EmptyState from "../components/EmptyState";
import LoadingState from "../components/LoadingState";
import { useData } from "../hooks/useData";

const Dashboard = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const { paths, loading } = useData();
  const { toast } = useToast();
  const [userPaths, setUserPaths] = useState<any[]>([]);

  // This would need to be expanded to actually fetch user's content
  React.useEffect(() => {
    // For now, just show the demo paths from useData
    setUserPaths(paths);
  }, [paths]);

  if (!isLoaded || loading) {
    return <LoadingState />;
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header title="Dashboard" />
        <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
          <EmptyState 
            message="Please sign in to access your dashboard"
            buttonText="Sign In"
            buttonLink="/sign-in"
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="Dashboard" />
      
      <main className="flex-1 container mx-auto max-w-5xl px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Learning Paths</h1>
          <div className="flex space-x-2">
            <Link to="/create-path">
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Path
              </Button>
            </Link>
            <Link to="/import-drive">
              <Button variant="outline">
                <FolderPlus className="mr-2 h-4 w-4" />
                Import from Drive
              </Button>
            </Link>
          </div>
        </div>

        {userPaths.length === 0 ? (
          <EmptyState 
            message="You haven't created any learning paths yet."
            buttonText="Create Your First Path"
            buttonLink="/create-path"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userPaths.map((path) => (
              <Card key={path.id} className="flex flex-col">
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium">{path.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {path.level}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 line-clamp-2">
                    {path.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4 mt-auto">
                  <Link 
                    to={path.subpaths && path.subpaths.length > 0 
                      ? `/subpaths/${path.id}` 
                      : `/path/${path.id}`
                    }
                  >
                    <Button variant="ghost" size="sm">View</Button>
                  </Link>
                  <div className="flex gap-2">
                    <Link to={`/edit-path/${path.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Coming soon",
                          description: "Delete functionality will be available soon."
                        });
                      }}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const isPathRoute = location.pathname.includes('/path/');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            {isPathRoute ? "Learning Path Not Found" : "Page Not Found"}
          </h2>
          <p className="text-muted-foreground">
            {isPathRoute 
              ? "The learning path you're looking for doesn't exist or may have been moved."
              : "The page you're looking for doesn't exist."
            }
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          {isPathRoute && (
            <Link to="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Search className="h-4 w-4 mr-2" />
                Browse Learning Paths
              </Button>
            </Link>
          )}
        </div>

        {isPathRoute && (
          <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
            <p className="font-medium mb-2">Tip for sharing URLs:</p>
            <p>
              Make sure to copy the full URL from your browser's address bar when sharing learning paths. 
              Each path has a unique nested URL structure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;

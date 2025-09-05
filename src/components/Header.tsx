import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft, Home, ChevronRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import FirebaseConfigModal from "./FirebaseConfigModal";
import { useAuth } from "@/context/AuthContext";
import { BreadcrumbItem as BreadcrumbItemType } from "@/utils/pathUtils";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  breadcrumbs?: BreadcrumbItemType[];
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  breadcrumbs = [],
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            )}

            {/* Enhanced breadcrumb navigation */}
            <nav className="flex items-center space-x-1 text-sm">
              {breadcrumbs.length > 0 ? (
                breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.id}>
                    {index > 0 && (
                      <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                    )}
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-foreground font-medium px-2 py-1 rounded-md bg-muted/50">
                        {crumb.title}
                      </span>
                    ) : (
                      <Link
                        to={crumb.url}
                        className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
                      >
                        {crumb.id === 'home' && <Home className="h-4 w-4" />}
                        <span>{crumb.title}</span>
                      </Link>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <Link
                  to="/"
                  className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
                >
                  <Home className="h-4 w-4" />
                  <span>Interview Pathway</span>
                </Link>
              )}
            </nav>

            {/* Title for smaller screens */}
            {title && (
              <h1 className="text-lg font-semibold text-foreground sm:hidden">
                {title}
              </h1>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <FirebaseConfigModal />
            {user && <UserMenu />}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

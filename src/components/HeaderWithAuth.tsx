
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Home, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useUser, useClerk } from "@clerk/clerk-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  id: string;
  title: string;
}

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  path?: BreadcrumbItem[];
}

const HeaderWithAuth: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  path = [],
}) => {
  const navigate = useNavigate();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto max-w-screen-xl px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBack}
              className="mr-1"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          <Link
            to="/"
            className={cn(
              "font-semibold text-xl flex items-center",
              showBackButton ? "hidden sm:flex" : ""
            )}
          >
            Learning Paths
          </Link>

          {/* Show breadcrumbs if available */}
          {path.length > 0 && (
            <div className="hidden sm:flex items-center text-sm text-muted-foreground">
              {path.map((item, index) => (
                <React.Fragment key={item.id}>
                  <span className="mx-1">/</span>
                  <Link
                    to={`/subpaths/${item.id}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                </React.Fragment>
              ))}
              {title && (
                <>
                  <span className="mx-1">/</span>
                  <span className="font-medium text-foreground">{title}</span>
                </>
              )}
            </div>
          )}

          {/* Show title on mobile */}
          {title && !path.length && (
            <h1 className="text-lg font-medium ml-1">{title}</h1>
          )}
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center gap-1">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Button>
            </Link>
            <Link to="/ask-ai">
              <Button variant="ghost" size="sm">
                AI Help
              </Button>
            </Link>
            {isSignedIn ? (
              <Link to="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            ) : null}
          </nav>

          <ThemeToggle />

          {isSignedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="User menu"
                >
                  {user?.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.fullName || "User"}
                      className="h-8 w-8 rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium">
                  {user?.fullName || user?.emailAddresses[0]?.emailAddress || "User"}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => signOut()}
                >
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/sign-in">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/sign-up">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderWithAuth;

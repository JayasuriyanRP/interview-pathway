
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import FirebaseConfigModal from "./FirebaseConfigModal";
import { useAuth } from "@/context/AuthContext";
import { useData } from "@/hooks/useData";
import { buildBreadcrumbPath, getPathSegments, buildPathUrl } from "@/utils/pathUtils";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  path?: { id: string; title: string }[];
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  path = [],
}) => {
  const navigate = useNavigate();
  const params = useParams();
  const { isAuthenticated } = useAuth();
  const { paths } = useData();

  // Build breadcrumb path from URL parameters
  const pathSegments = getPathSegments(params);
  const breadcrumbPath = paths.length > 0 ? buildBreadcrumbPath(paths, pathSegments) : path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <div className="flex flex-1 items-center gap-2">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="mr-2"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          )}

          <div className="hidden md:flex">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {index === breadcrumbPath.length - 1 ? (
                        <BreadcrumbPage>{item.title}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link to={buildPathUrl(pathSegments.slice(0, index + 1))}>
                            {item.title}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}

                {title && breadcrumbPath.length === 0 && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="md:hidden">
            {title ? (
              <h1 className="text-base font-semibold truncate max-w-[200px]">
                {title}
              </h1>
            ) : (
              <Link to="/" className="flex items-center">
                <span className="text-base font-semibold">
                  Interview Pathways
                </span>
              </Link>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FirebaseConfigModal />
          <UserMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

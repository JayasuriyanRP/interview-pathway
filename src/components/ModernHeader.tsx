import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import FirebaseConfigModal from "@/components/FirebaseConfigModal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ModernHeaderProps {
  title?: string;
  breadcrumbs?: { title: string; href?: string }[];
}

export function ModernHeader({ title, breadcrumbs = [] }: ModernHeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          {!isHomePage && <SidebarTrigger />}
          
          <div className="flex items-center gap-2">
            {breadcrumbs.length > 0 ? (
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center gap-1 hover:text-foreground">
                        <Home className="h-4 w-4" />
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {breadcrumbs.map((crumb, index) => (
                    <React.Fragment key={index}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        {crumb.href && index < breadcrumbs.length - 1 ? (
                          <BreadcrumbLink asChild>
                            <Link to={crumb.href}>{crumb.title}</Link>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage className="font-medium">
                            {crumb.title}
                          </BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            ) : isHomePage ? (
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Home className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-bold text-lg">Interview Pathways</h1>
                </div>
              </Link>
            ) : (
              title && (
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.history.back()}
                    className="lg:hidden"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <h1 className="font-semibold text-xl truncate">{title}</h1>
                </div>
              )
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
}
import { NavLink, useLocation } from "react-router-dom";
import { Home, BookOpen, Brain, Code, Users, Settings, HelpCircle } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Ask AI", url: "/ask-ai", icon: Brain },
  { title: "AI Converter", url: "/convert-ai", icon: Code },
];

const quickLinks = [
  { title: "Frontend", url: "/subpaths/frontend" },
  { title: "Backend", url: "/subpaths/backend" },
  { title: "Data Structures", url: "/subpaths/data-structures-and-algorithms" },
  { title: "System Design", url: "/subpaths/architecture" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    return location.pathname.startsWith(path) && path !== "/";
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-border/40">
        <div className="flex items-center gap-3 px-3 py-4">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-semibold text-sm">Interview Prep</h2>
              <p className="text-xs text-muted-foreground">Learning Platform</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`w-full justify-start ${
                      isActive(item.url) 
                        ? "bg-primary/10 text-primary border-r-2 border-primary" 
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <NavLink to={item.url}>
                      <item.icon className="w-4 h-4" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!isCollapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {quickLinks.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={`w-full justify-start text-sm ${
                        isActive(item.url) 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-muted/50 text-muted-foreground"
                      }`}
                    >
                      <NavLink to={item.url}>
                        <span className="w-2 h-2 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
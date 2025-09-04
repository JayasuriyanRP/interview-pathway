import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { ModernHeader } from '@/components/ModernHeader';

export function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-background to-muted/20">
        {!isHomePage && <AppSidebar />}
        
        <div className="flex-1 flex flex-col">
          <ModernHeader />
          
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
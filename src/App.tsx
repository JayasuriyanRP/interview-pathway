import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import LearningPath from "./pages/LearningPath";
import NotFound from "./pages/NotFound";
import SubpathsList from "./pages/SubpathsList";
import NestedPathExample from "./components/NestedPathExample";
import AskAI from "./pages/AskAi";
import AIConverter from "./pages/AIConverter";
import { AuthProvider } from "./context/AuthContext";
import React from "react"; // Add explicit React import

// Create a new QueryClient instance outside the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <AuthProvider>
            <Sonner />
            <BrowserRouter basename="/interview-pathway/">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/path/*" element={<LearningPath />} />
                <Route path="/subpaths/:pathId" element={<SubpathsList />} />
                <Route path="/examples" element={<LearningPath />} />
                <Route path="/nested-example" element={<NestedPathExample />} />
                <Route path="/ask-ai" element={<AskAI />} />
                <Route path="/convert-ai" element={<AIConverter />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;

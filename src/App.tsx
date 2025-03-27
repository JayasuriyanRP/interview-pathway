
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/path/:pathId" element={<LearningPath />} />
            <Route path="/subpaths/:pathId" element={<SubpathsList />} />
            <Route path="/examples" element={<LearningPath />} />
            <Route path="/nested-example" element={<NestedPathExample />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Index from "./pages/Index";
import LearningPath from "./pages/LearningPath";
import NotFound from "./pages/NotFound";
import SubpathsList from "./pages/SubpathsList";
import NestedPathExample from "./components/NestedPathExample";
import AskAI from "./pages/AskAi";
import AIConverter from "./pages/AIConverter";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PathEditor from "./pages/PathEditor";
import QuestionEditor from "./pages/QuestionEditor";
import ImportFromDrive from "./pages/ImportFromDrive";

const queryClient = new QueryClient();

// Check if Clerk is available
const hasClerkKey = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Protected route component that works with or without Clerk
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // If Clerk is not available, show the children directly
  if (!hasClerkKey) {
    return <>{children}</>;
  }

  // If Clerk is available, use SignedIn/SignedOut components
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/path/:pathId" element={<LearningPath />} />
            <Route path="/subpaths/:pathId" element={<SubpathsList />} />
            <Route path="/examples" element={<LearningPath />} />
            <Route path="/nested-example" element={<NestedPathExample />} />
            <Route path="/ask-ai" element={<AskAI />} />
            <Route path="/convert-ai" element={<AIConverter />} />
            
            {/* Auth routes - only render if Clerk is available */}
            {hasClerkKey && (
              <>
                <Route path="/sign-in/*" element={<SignIn />} />
                <Route path="/sign-up/*" element={<SignUp />} />
              </>
            )}
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/create-path" element={
              <ProtectedRoute>
                <PathEditor />
              </ProtectedRoute>
            } />
            <Route path="/edit-path/:pathId" element={
              <ProtectedRoute>
                <PathEditor />
              </ProtectedRoute>
            } />
            <Route path="/path/:pathId/add-question" element={
              <ProtectedRoute>
                <QuestionEditor />
              </ProtectedRoute>
            } />
            <Route path="/path/:pathId/edit-question/:questionId" element={
              <ProtectedRoute>
                <QuestionEditor />
              </ProtectedRoute>
            } />
            <Route path="/import-drive" element={
              <ProtectedRoute>
                <ImportFromDrive />
              </ProtectedRoute>
            } />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

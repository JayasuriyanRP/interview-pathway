
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx'
import './index.css'

// Make sure to set your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if we have a publishable key
const hasClerkKey = !!PUBLISHABLE_KEY;

// If no key is provided, we'll render the app without Clerk
if (!hasClerkKey) {
  console.warn("Missing Clerk Publishable Key - Authentication features will be disabled");
}

const root = createRoot(document.getElementById("root")!);

// Conditionally render with or without ClerkProvider
if (hasClerkKey) {
  root.render(
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      clerkJSVersion="5.56.0-snapshot.v20250312225817"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/"
      signInForceRedirectUrl="/dashboard"
      signUpForceRedirectUrl="/"
      afterSignOutUrl="/"
    >
      <App />
    </ClerkProvider>
  );
} else {
  // Render without Clerk when no key is available
  root.render(<App />);
}

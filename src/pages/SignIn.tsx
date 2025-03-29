
import React from "react";
import { SignIn as ClerkSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="Sign In" showBackButton={true} />
      
      <main className="flex-1 container mx-auto max-w-md px-4 py-8 flex items-center justify-center">
        <div className="w-full bg-card rounded-lg shadow-sm border p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>
          <ClerkSignIn 
            signUpUrl="/sign-up"
            redirectUrl="/dashboard"
            afterSignInUrl="/dashboard"
          />
        </div>
      </main>
    </div>
  );
};

export default SignIn;


import React from "react";
import { SignUp as ClerkSignUp } from "@clerk/clerk-react";
import Header from "../components/Header";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header title="Sign Up" showBackButton={true} />
      
      <main className="flex-1 container mx-auto max-w-md px-4 py-8 flex items-center justify-center">
        <div className="w-full bg-card rounded-lg shadow-sm border p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Create Account</h1>
          <ClerkSignUp 
            signInUrl="/sign-in"
            redirectUrl="/"
            afterSignUpUrl="/"
          />
        </div>
      </main>
    </div>
  );
};

export default SignUp;

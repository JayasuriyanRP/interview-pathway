import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ErrorStateProps {
  errorMessage: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ errorMessage }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <Header title="Error" showBackButton={true} />
      <div className="container text-center">
        <h1 className="text-4xl font-bold text-destructive mb-4">Oops! Something went wrong.</h1>
        <p className="text-muted-foreground text-lg mb-8">{errorMessage || "An unexpected error occurred."}</p>
        <Button onClick={goBack}>Go Back</Button>
      </div>
    </div>
  );
};

export default ErrorState;


import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ErrorStateProps {
  title?: string;
  description?: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  title = "No Subpaths Found", 
  description = "This learning path doesn't have any subpaths yet." 
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <Header showBackButton={true} />
      <div className="container mx-auto max-w-5xl px-4 py-8 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ErrorState;

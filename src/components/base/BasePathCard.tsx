import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { PathItem } from "@/utils/pathUtils";

interface BasePathCardProps {
  path: PathItem;
  isCompleted?: boolean;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

// Base card component following Single Responsibility Principle
const BasePathCard: React.FC<BasePathCardProps> = ({
  path,
  isCompleted = false,
  className = "",
  onClick,
  children
}) => {
  const baseStyles = "w-full transition-all duration-200 hover:shadow-md cursor-pointer";
  const completedStyles = isCompleted 
    ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
    : "bg-card border-border hover:border-primary/50";

  return (
    <Card
      className={cn(baseStyles, completedStyles, className)}
      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export default BasePathCard;

import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";

interface ButtonProps extends React.ComponentProps<typeof ShadcnButton> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ShadcnButton {...props}>{children}</ShadcnButton>;
};

export default Button;

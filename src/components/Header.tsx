
import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  return (
    <header className="relative z-10 px-6 py-8 md:py-10 w-full">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Go back"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
          )}
          {title ? (
            <h1 className="text-xl font-medium">{title}</h1>
          ) : (
            <Link to="/" className="text-xl font-medium">
              Interview Pathways
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

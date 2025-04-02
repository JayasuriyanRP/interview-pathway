import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import FirebaseDBConfigModal from "./FirebaseDBConfigModal";
import GoogleDriveConfigModal from "./GoogleDriveConfigModal";

export default function Header({ title, showBackButton = false, path = [] }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-2">
            {showBackButton && (
              <Button variant="ghost" size="icon" onClick={goBack}>
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            )}

            <div className="ml-1">
              <h1 className="text-lg font-semibold">{title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <SearchDialog />
            <FirebaseDBConfigModal />
            <GoogleDriveConfigModal />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

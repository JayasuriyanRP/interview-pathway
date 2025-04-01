
import React from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { User, LogOut, Cloud, RotateCcw } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

const UserMenu = () => {
  const { user, loading, signInWithGoogle, signOut, isAuthenticated } = useAuth();
  const { resetProgress, syncWithCloud } = useProgress();
  
  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <span className="animate-pulse">Loading...</span>
      </Button>
    );
  }

  if (!isAuthenticated) {
    return (
      <Button 
        onClick={() => signInWithGoogle()} 
        variant="outline" 
        size="sm"
        className="flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            fill="#4285F4"
            d="M12 5c1.617 0 3.077.573 4.223 1.523l3.173-3.173A10.441 10.441 0 0 0 12 0C7.392 0 3.397 2.6 1.386 6.41l3.687 2.84A6.126 6.126 0 0 1 12 5z"
          />
          <path
            fill="#34A853"
            d="M5 12c0-.834.152-1.629.422-2.368L1.735 6.79A10.46 10.46 0 0 0 0 12c0 1.835.475 3.562 1.306 5.06l3.686-2.84A6.104 6.104 0 0 1 5 12z"
          />
          <path
            fill="#FBBC05"
            d="M12 19c-2.995 0-5.578-2.162-6.108-5.088L2.205 16.75A10.464 10.464 0 0 0 12 24c2.583 0 5.072-.764 7.197-2.181L15.97 18.9A6.511 6.511 0 0 1 12 19z"
          />
          <path
            fill="#EA4335"
            d="M24 12c0-.695-.07-1.397-.21-2.108H12v4.596h6.83c-.394 1.776-1.57 3.258-3.144 3.997l3.227 2.495C21.444 18.89 24 15.86 24 12z"
          />
        </svg>
        Sign in
      </Button>
    );
  }

  const initials = user.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.photoURL || ""} alt={user.displayName || ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => syncWithCloud()}
          className="cursor-pointer flex items-center"
        >
          <Cloud className="mr-2 h-4 w-4" />
          <span>Sync Progress</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => resetProgress()}
          className="cursor-pointer flex items-center"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          <span>Reset Progress</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          onClick={() => signOut()}
          className="cursor-pointer flex items-center"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

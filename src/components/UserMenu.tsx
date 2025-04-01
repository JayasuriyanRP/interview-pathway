import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Cloud, RotateCcw } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

const UserMenu = () => {
  const { resetProgress, refreshFromCloud, isSyncing } = useProgress();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/default-avatar.png" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem
          onClick={() => refreshFromCloud()}
          className="cursor-pointer flex items-center"
          disabled={isSyncing}
        >
          <Cloud className="mr-2 h-4 w-4" />
          <span>{isSyncing ? "Syncing..." : "Refresh"}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => resetProgress()}
          className="cursor-pointer flex items-center"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          <span>Reset Progress</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

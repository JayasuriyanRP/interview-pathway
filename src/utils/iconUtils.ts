
import { Code, Server, GitBranch, Network, List } from "lucide-react";

export const getIconComponent = (iconName: string = "List") => {
  switch (iconName) {
    case "Code":
      return Code;
    case "Server":
      return Server;
    case "GitBranch":
      return GitBranch;
    case "Network":
      return Network;
    case "List":
    default:
      return List;
  }
};

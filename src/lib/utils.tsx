import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Code,
  Server,
  GitBranch,
  Network,
  ArrowRight,
  List,
  CheckCircle,
  Users,
  BookText,
  Layers,
  Boxes,
  Monitor,
  FileText,
  Briefcase,
} from "lucide-react";
import { ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBadgeClass = (level) => {
  switch (level.toLowerCase()) {
    case "beginner":
      return "badge-beginner";
    case "intermediate":
      return "badge-intermediate";
    case "advanced":
      return "badge-advanced";
    default:
      return "";
  }
};

export const levelOrder: Record<string, number> = {
  "All Levels": 0,
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export const getPathIcon = (icon) => {
  switch (icon.toLowerCase()) {
    case "architecture":
      return <Network className="h-5 w-5" />;
    case "data-structures-and-algorithms":
      return <List className="h-5 w-5" />;
    case "example":
      return <GitBranch className="h-5 w-5" />;
    case "server":
      return <Server className="h-5 w-5" />;
    case "html":
      return <Code className="h-5 w-5" />;
    case "job-roles":
      return <Users className="h-5 w-5" />;
    case "monitor":
      return <Monitor className="h-5 w-5" />;
    case "filetext":
      return <FileText className="h-5 w-5" />;
    case "briefcase":
      return <Briefcase className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

export const getTopicIcon = (icon: string): ReactNode => {
  switch (icon.toLowerCase()) {
    case "architecture":
      return <Network className="h-5 w-5" />;
    case "c-sharp":
    case "html":
    case "js":
    case "react":
    case "ts":
      return <Code className="h-5 w-5" />;
    case "data-structures-and-algorithms":
      return <List className="h-5 w-5" />;
    case "example":
      return <GitBranch className="h-5 w-5" />;
    case "golang":
      return <Server className="h-5 w-5" />;
    case "job-roles":
      return <Users className="h-5 w-5" />;
    case "system-design":
      return <Layers className="h-5 w-5" />;
    case "message-brokers":
      return <Boxes className="h-5 w-5" />;
    case "cheatsheets":
      return <BookText className="h-5 w-5" />;
    default:
      return <Code className="h-5 w-5" />;
  }
};

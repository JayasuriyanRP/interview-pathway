import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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

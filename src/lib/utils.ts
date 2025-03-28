import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getBadgeClass = (level) => {
  switch (level.toLowerCase()) {
    case 'beginner':
      return 'badge-beginner';
    case 'intermediate':
      return 'badge-intermediate';
    case 'advanced':
      return 'badge-advanced';
    default:
      return '';
  }
};
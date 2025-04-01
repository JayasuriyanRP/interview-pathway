
import { 
  Code, 
  Server, 
  GitBranch, 
  Network, 
  List, 
  Database,
  Globe,
  Cloud,
  Layers,
  Cpu,
  FileCode,
  BrainCircuit,
  BarChart,
  PackageOpen,
  MessageSquare,
  Briefcase,
  GraduationCap,
  Monitor,
  FileText,
  BookText
} from "lucide-react";

export const getIconComponent = (iconName: string = "List") => {
  switch (iconName?.toLowerCase()) {
    case "code":
      return Code;
    case "server":
      return Server;
    case "gitbranch":
      return GitBranch;
    case "network":
      return Network;
    case "database":
      return Database;
    case "globe":
      return Globe;
    case "cloud":
      return Cloud;
    case "layers":
      return Layers;
    case "cpu":
      return Cpu;
    case "filecode":
      return FileCode;
    case "brain":
    case "braincircuit":
      return BrainCircuit;
    case "barchart":
      return BarChart;
    case "package":
    case "packageopen":
      return PackageOpen;
    case "message":
    case "messagesquare":
      return MessageSquare;
    case "briefcase":
      return Briefcase;
    case "graduation":
    case "graduationcap":
      return GraduationCap;
    case "monitor":
      return Monitor;
    case "filetext":
      return FileText;
    case "booktext":
      return BookText;
    case "list":
    default:
      return List;
  }
};

// Map topic/skill names to appropriate icons
export const getSkillIcon = (skill: string = "") => {
  const skillLower = skill.toLowerCase();
  
  // Programming languages
  if (skillLower.includes('javascript') || skillLower.includes('js')) return "Code";
  if (skillLower.includes('typescript') || skillLower.includes('ts')) return "Code";
  if (skillLower.includes('react')) return "Code";
  if (skillLower.includes('angular')) return "Code";
  if (skillLower.includes('vue')) return "Code";
  if (skillLower.includes('python')) return "Code";
  if (skillLower.includes('java')) return "FileCOde";
  if (skillLower.includes('c#') || skillLower.includes('csharp') || skillLower.includes('dotnet') || skillLower.includes('.net')) return "FileCode";
  if (skillLower.includes('golang') || skillLower.includes('go')) return "FileCode";
  if (skillLower.includes('ruby')) return "Code";
  if (skillLower.includes('php')) return "Code";
  
  // Web technologies
  if (skillLower.includes('html')) return "Code";
  if (skillLower.includes('css')) return "Code";
  if (skillLower.includes('frontend')) return "Monitor";
  if (skillLower.includes('backend')) return "Server";
  if (skillLower.includes('fullstack')) return "Globe";
  
  // Infrastructure
  if (skillLower.includes('aws') || skillLower.includes('azure') || skillLower.includes('cloud')) return "Cloud";
  if (skillLower.includes('docker') || skillLower.includes('kubernetes')) return "Package";
  if (skillLower.includes('devops')) return "GitBranch";
  
  // Database
  if (skillLower.includes('sql') || skillLower.includes('database')) return "Database";
  if (skillLower.includes('nosql') || skillLower.includes('mongodb')) return "Database";
  
  // Architecture
  if (skillLower.includes('architecture') || skillLower.includes('system design')) return "Layers";
  if (skillLower.includes('microservice')) return "Network";
  
  // Data structures & algorithms
  if (skillLower.includes('algorithm')) return "BrainCircuit";
  if (skillLower.includes('data structure')) return "List";
  
  // Job roles
  if (skillLower.includes('job') || skillLower.includes('career') || skillLower.includes('role')) return "Briefcase";
  
  // Learning paths
  if (skillLower.includes('cheatsheet')) return "BookText";
  if (skillLower.includes('example')) return "FileText";
  
  // Default
  return "List";
};


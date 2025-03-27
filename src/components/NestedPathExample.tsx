
import React from "react";
import NestedPathCard from "./NestedPathCard";

// Example data with nested paths
const exampleNestedPath = {
  id: "frontend-react",
  title: "React",
  description: "React framework interview questions and answers",
  count: 3,
  level: "Intermediate",
  subpaths: [
    {
      id: "frontend-react-hooks",
      title: "React Hooks",
      description: "Understanding React hooks and their applications",
      count: 10,
      level: "Intermediate"
    },
    {
      id: "frontend-react-state",
      title: "State Management",
      description: "Various state management approaches in React",
      count: 8,
      level: "Advanced"
    },
    {
      id: "frontend-react-patterns",
      title: "Design Patterns",
      description: "Common React design patterns and best practices",
      count: 12,
      level: "Advanced"
    }
  ]
};

const NestedPathExample: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Example Nested Subpaths</h2>
      <p className="text-muted-foreground mb-6">
        This example shows how nested subpaths are displayed in a hierarchical structure.
      </p>
      <NestedPathCard path={exampleNestedPath} />
    </div>
  );
};

export default NestedPathExample;

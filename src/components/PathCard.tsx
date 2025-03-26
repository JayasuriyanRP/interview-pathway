
import React from "react";
import { Link } from "react-router-dom";
import { Code, Server, GitBranch, Network, ArrowRight } from "lucide-react";

interface PathCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
  level: string;
}

const PathCard: React.FC<PathCardProps> = ({
  id,
  title,
  description,
  icon,
  count,
  level,
}) => {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-5 w-5" />;
      case "Server":
        return <Server className="h-5 w-5" />;
      case "GitBranch":
        return <GitBranch className="h-5 w-5" />;
      case "Network":
        return <Network className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <Link
      to={`/path/${id}`}
      className="path-card block bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 p-3 bg-gray-50 rounded-lg inline-flex items-center justify-center w-12 h-12">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="inline-block px-2.5 py-0.5 mb-2 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            {level}
          </div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">{count} questions</div>
          <div className="flex items-center text-sm font-medium text-blue-600">
            Start learning
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PathCard;

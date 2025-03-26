
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { usePath } from "../hooks/useData";

const SubpathsList = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const { path, loading, error } = usePath(pathId);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-lg font-medium">Error loading data</p>
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  if (!path || !path.subpaths || path.subpaths.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-medium">No subpaths found for this learning path</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title={path.title} showBackButton={true} />
      
      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 mt-2 animate-fadeIn">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
              {path.level} • {path.subpaths.length} Subpaths
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{path.title}</h1>
            <p className="text-lg text-gray-600">{path.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {path.subpaths.map((subpath, index) => (
              <div
                key={subpath.id}
                className={`animate-fadeIn animate-delay-${
                  Math.min(index, 3) * 100
                }`}
              >
                <PathCard 
                  {...subpath} 
                  icon="List"
                  hasSubpaths={false}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubpathsList;

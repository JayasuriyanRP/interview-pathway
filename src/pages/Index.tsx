
import React from "react";
import Header from "../components/Header";
import PathCard from "../components/PathCard";
import { useData } from "../hooks/useData";

const Index = () => {
  const { paths, loading, error } = useData();

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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 px-6 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 mt-8">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-800 animate-fadeIn">
              Interview Preparation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
              Master Your Technical Interviews
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn animate-delay-100">
              Comprehensive learning paths with expert-curated questions and answers to help you prepare for your next technical interview.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {paths.map((path, index) => (
              <div
                key={path.id}
                className={`animate-fadeIn animate-delay-${
                  Math.min(index, 3) * 100
                }`}
              >
                <PathCard {...path} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

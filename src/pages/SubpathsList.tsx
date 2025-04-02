
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import LoadingState from "@/components/LoadingState";
import ErrorState from "@/components/ErrorState";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListFilter, Circle, BookOpenCheck, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePath } from "../hooks/useData";

const SubpathsList = () => {
  const { pathId } = useParams();
  const path = usePath(pathId || "");
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  if (!pathId) {
    return <ErrorState errorMessage="Path ID is missing" />;
  }

  if (!path) {
    return <LoadingState />;
  }

  const filteredSubpaths = path.subpaths?.filter(
    (subpath) =>
      !selectedLevel || (subpath.questions && subpath.questions.some(q => q.level === selectedLevel))
  );

  let icon;
  switch (path.icon) {
    case "Circle":
      icon = <Circle className="h-12 w-12 text-blue-500" />;
      break;
    case "BookOpenCheck":
      icon = <BookOpenCheck className="h-12 w-12 text-green-500" />;
      break;
    case "GraduationCap":
      icon = <GraduationCap className="h-12 w-12 text-orange-500" />;
      break;
    default:
      icon = <Circle className="h-12 w-12 text-blue-500" />;
  }

  return (
    <div>
      <Header title={path.title} showBackButton={true} />
      <div className="container py-6">
        <div className="flex items-center gap-4 mb-8">
          {icon}
          <div>
            <h1 className="text-2xl font-bold">{path.title}</h1>
            <p className="text-muted-foreground">{path.description}</p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex-1">
            <div className="grid gap-4">
              {filteredSubpaths && filteredSubpaths.length > 0 ? (
                filteredSubpaths.map((subpath) => (
                  <Card key={subpath.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>{subpath.title}</CardTitle>
                      <CardDescription>{subpath.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This subpath contains {subpath.questions?.length || 0} questions.
                      </p>
                    </CardContent>
                    <CardFooter className="bg-muted/50 pt-6">
                      <Link
                        to={`/questions/${pathId}/${subpath.id}`}
                        className="w-full"
                      >
                        <Button className="w-full">View Questions</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <ErrorState errorMessage="No subpaths found" />
              )}
            </div>
          </div>

          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ListFilter className="h-4 w-4" />
                  Filter by Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant={selectedLevel === null ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel(null)}
                  >
                    All Levels
                  </Button>
                  <Button
                    variant={selectedLevel === "Beginner" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel("Beginner")}
                  >
                    Beginner
                  </Button>
                  <Button
                    variant={
                      selectedLevel === "Intermediate" ? "default" : "outline"
                    }
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel("Intermediate")}
                  >
                    Intermediate
                  </Button>
                  <Button
                    variant={selectedLevel === "Advanced" ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedLevel("Advanced")}
                  >
                    Advanced
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Questions:</span>
                    <span className="font-medium">
                      {path.subpaths?.reduce(
                        (total, subpath) => total + (subpath.questions?.length || 0),
                        0
                      ) || 0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subpaths:</span>
                    <span className="font-medium">{path.subpaths?.length || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubpathsList;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Play, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn, getBadgeClass } from "@/lib/utils";
import { usePathQuestions } from "@/hooks/useData";
import { useProgress } from "@/hooks/useProgress";
import { getIconComponent, getSkillIcon } from "@/utils/iconUtils";

interface ModernPathCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  count: number;
  level: string;
  hasSubpaths?: boolean;
  completed?: number;
  total?: number;
  isCompleted?: boolean;
}

const ModernPathCard: React.FC<ModernPathCardProps> = ({
  id,
  title,
  description,
  icon,
  count,
  level,
  hasSubpaths = false,
  completed = 0,
  total = 0,
  isCompleted = false,
}) => {
  const { questions } = usePathQuestions(id);
  const { getPathProgress, isPathCompleted, isSubpathCompleted } = useProgress();

  // Get actual progress data
  const progress = getPathProgress(id, questions);

  // Use provided completion status or calculate it
  const actualIsCompleted = isCompleted || isPathCompleted(id) || isSubpathCompleted(id);

  // Calculate progress percentage
  const actualCompleted = completed > 0 ? completed : progress.completed;
  const actualTotal = total > 0 ? total : progress.total;
  const progressPercentage = actualTotal > 0 ? (actualCompleted / actualTotal) * 100 : 0;

  const linkTo = hasSubpaths ? `/subpaths/${id}` : `/path/${id}`;
  const IconComponent = getIconComponent(getSkillIcon(title) || icon || "BookOpen");

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 border-border/50 hover:border-primary/20 bg-gradient-to-br from-card to-card/80">
      <CardContent className="p-0">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              "p-3 rounded-xl transition-colors duration-300",
              actualIsCompleted 
                ? "bg-green-50 text-green-600 dark:bg-green-950/50 dark:text-green-400" 
                : "bg-primary/5 text-primary group-hover:bg-primary/10"
            )}>
              {actualIsCompleted ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <IconComponent className="w-6 h-6" />
              )}
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <Badge className={cn("text-xs", getBadgeClass(level))}>
                {level}
              </Badge>
              {actualIsCompleted && (
                <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400">
                  Complete
                </Badge>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Progress */}
          {!hasSubpaths && actualTotal > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Progress
                </span>
                <span className="text-xs font-semibold text-foreground">
                  {actualCompleted}/{actualTotal}
                </span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-2"
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-muted-foreground">
                  {Math.round(progressPercentage)}% complete
                </span>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              {hasSubpaths ? (
                <>
                  <Users className="w-4 h-4" />
                  <span>{count} topics</span>
                </>
              ) : (
                <>
                  <BookOpen className="w-4 h-4" />
                  <span>{count} questions</span>
                </>
              )}
            </div>
            
            <Link to={linkTo}>
              <Button 
                size="sm" 
                className="group-hover:shadow-md transition-all duration-300"
                disabled={actualIsCompleted && !hasSubpaths}
              >
                {actualIsCompleted && !hasSubpaths ? "Completed" : hasSubpaths ? "Explore" : "Start"}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModernPathCard;

import React from "react";
import { useProgress } from "@/hooks/useProgress";
import { formatDistance } from "date-fns";

interface RecentlyReadSectionProps {
  pathId: string;
  questions: any[];
}

const RecentlyReadSection: React.FC<RecentlyReadSectionProps> = ({ pathId, questions }) => {
  const { isQuestionRead, getLastReadTimestamp } = useProgress();

  // Filter read questions and sort by last read timestamp
  const readQuestions = questions
    ?.filter(q => isQuestionRead(pathId, q.id))
    .sort((a, b) => {
      const timestampA = getLastReadTimestamp(`${pathId}-${a.id}`);
      const timestampB = getLastReadTimestamp(`${pathId}-${b.id}`);
      return timestampB - timestampA;
    })
    .slice(0, 5); // Show only the 5 most recently read questions

  if (!readQuestions?.length) return null;

  return (
    <div className="mt-4 mb-6">
      <h3 className="text-md font-semibold mb-2">Recently Read</h3>
      <ul className="space-y-2">
        {readQuestions.map((q, i) => (
          <li key={i} className="flex items-center justify-between text-sm">
            <span className="truncate flex-1">{q.question}</span>
            <span className="text-xs text-muted-foreground ml-2">
              {formatDistance(getLastReadTimestamp(`${pathId}-${q.id}`), new Date(), { addSuffix: true })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyReadSection;

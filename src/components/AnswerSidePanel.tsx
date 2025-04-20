
import React from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import Answer from "./Answer";
import MarkdownView from "./MarkdownView";
import { useIsMobile } from "@/hooks/use-mobile";

interface AnswerSidePanelProps {
  question: string;
  answer: any;
  isOpen: boolean;
  onClose: () => void;
  highlightQuery?: string;
}

const AnswerSidePanel = ({
  question,
  answer,
  isOpen,
  onClose,
  highlightQuery = "",
}: AnswerSidePanelProps) => {
  const isMobile = useIsMobile();
  const isMarkdown = typeof answer === "string";

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="w-full sm:max-w-[600px] overflow-y-auto">
          <div className="pt-6">
            <h2 className="text-xl font-bold">{question}</h2>
            <div className="mt-4">
              {isMarkdown ? (
                <MarkdownView content={answer.replace(/^```markdown\n?|```$/g, "")} />
              ) : (
                <Answer answer={answer} highlightQuery={highlightQuery} />
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={`fixed right-0 top-0 h-full w-[600px] bg-background border-l border-border transform transition-transform duration-300 overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">{question}</h2>
        <div className="mt-4">
          {isMarkdown ? (
            <MarkdownView content={answer.replace(/^```markdown\n?|```$/g, "")} />
          ) : (
            <Answer answer={answer} highlightQuery={highlightQuery} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerSidePanel;

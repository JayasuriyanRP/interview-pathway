
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../components/ui/use-toast";
import { usePathQuestions, usePath } from "../hooks/useData";
import LoadingState from "../components/LoadingState";

const formSchema = z.object({
  question: z.string().min(10, {
    message: "Question must be at least 10 characters.",
  }),
  answer: z.string().min(10, {
    message: "Answer must be at least 10 characters.",
  }),
  externalLink: z.string().url().optional().or(z.literal("")),
  externalLinkText: z.string().optional(),
});

const QuestionEditor = () => {
  const { pathId, questionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { path } = usePath(pathId);
  const { questions, loading } = usePathQuestions(pathId);
  const [question, setQuestion] = useState<any>(null);
  const isEditMode = !!questionId;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
      answer: "",
      externalLink: "",
      externalLinkText: "",
    },
  });

  useEffect(() => {
    if (questions && questionId && isEditMode) {
      const q = questions[parseInt(questionId, 10)];
      if (q) {
        // Extract external link from answer if it exists
        let answer = "";
        let externalLink = "";
        let externalLinkText = "";

        if (Array.isArray(q.answer)) {
          // Handle complex answer structure
          answer = q.answer
            .filter(item => item.type === "text")
            .map(item => item.content)
            .join("\n\n");
          
          const linkItem = q.answer.find(item => item.type === "link");
          if (linkItem) {
            externalLink = linkItem.url || "";
            externalLinkText = linkItem.content || "Learn more";
          }
        } else {
          answer = q.answer;
        }

        form.reset({
          question: q.question,
          answer,
          externalLink,
          externalLinkText,
        });
        setQuestion(q);
      }
    }
  }, [questions, questionId, form, isEditMode]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!pathId) return;
    
    try {
      // Format the answer with external link if provided
      const formattedAnswer = [];
      
      // Add the main text content
      formattedAnswer.push({
        type: "text",
        content: values.answer
      });
      
      // Add external link if provided
      if (values.externalLink) {
        formattedAnswer.push({
          type: "link",
          content: values.externalLinkText || "Learn more",
          url: values.externalLink
        });
      }
      
      const questionData = {
        question: values.question,
        answer: formattedAnswer
      };
      
      console.log("Saving question:", questionData);
      
      // In a real implementation, this would save to Google Drive or a database
      toast({
        title: isEditMode ? "Question updated" : "Question created",
        description: "This is a demo. In a real app, this would save to Google Drive.",
      });
      
      navigate(`/path/${pathId}`);
    } catch (error) {
      console.error("Error saving question:", error);
      toast({
        title: "Error",
        description: "Failed to save question. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading && isEditMode) {
    return <LoadingState />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        title={isEditMode ? "Edit Question" : "Create Question"} 
        showBackButton 
      />
      
      <main className="flex-1 container mx-auto max-w-2xl px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold">
            {path?.title || "Learning Path"}
          </h2>
          <p className="text-muted-foreground">
            {isEditMode ? "Edit an existing question" : "Add a new question to this path"}
          </p>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What is React's virtual DOM?"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Answer</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="The virtual DOM is a programming concept where an ideal, or 'virtual', representation of a UI is kept in memory..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can use Markdown formatting in your answer.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="externalLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>External Link (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://example.com/learn-more" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Add a link to an external resource for more information.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="externalLinkText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link Text (Optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Learn more about this topic" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Text to display for the external link.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {isEditMode ? "Update Question" : "Add Question"}
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default QuestionEditor;

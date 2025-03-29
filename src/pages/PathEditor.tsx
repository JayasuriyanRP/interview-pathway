
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useToast } from "../components/ui/use-toast";
import { usePath } from "../hooks/useData";
import LoadingState from "../components/LoadingState";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  level: z.string({
    required_error: "Please select a difficulty level.",
  }),
  icon: z.string().optional(),
});

const PathEditor = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { path, loading } = usePath(pathId);
  const isEditMode = !!pathId;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      level: "Beginner",
      icon: "Code",
    },
  });

  useEffect(() => {
    if (path && isEditMode) {
      form.reset({
        title: path.title,
        description: path.description,
        level: path.level,
        icon: path.icon,
      });
    }
  }, [path, form, isEditMode]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // In a real implementation, this would save to a database or Google Drive
      console.log("Form values:", values);
      
      toast({
        title: isEditMode ? "Path updated" : "Path created",
        description: "This is a demo. In a real app, this would save to Google Drive.",
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving path:", error);
      toast({
        title: "Error",
        description: "Failed to save path. Please try again.",
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
        title={isEditMode ? "Edit Learning Path" : "Create Learning Path"} 
        showBackButton 
      />
      
      <main className="flex-1 container mx-auto max-w-2xl px-4 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. React Fundamentals" {...field} />
                  </FormControl>
                  <FormDescription>
                    A clear, descriptive title for your learning path.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what learners will gain from this path..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Difficulty Level</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="icon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Icon</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an icon" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Code">Code</SelectItem>
                        <SelectItem value="Server">Server</SelectItem>
                        <SelectItem value="GitBranch">Git Branch</SelectItem>
                        <SelectItem value="Network">Network</SelectItem>
                        <SelectItem value="List">List</SelectItem>
                      </SelectContent>
                    </Select>
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
                {isEditMode ? "Update Path" : "Create Path"}
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default PathEditor;

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Loader2, Database } from "lucide-react";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema for Firebase Realtime Database configuration validation
const firebaseDBSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  projectId: z.string().min(1, "Project ID is required"),
  databaseURL: z.string().min(1, "Database URL is required"),
});

type FirebaseDBConfigType = z.infer<typeof firebaseDBSchema>;

const FirebaseDBConfigModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // Get saved config from localStorage
  const getSavedConfig = () => {
    try {
      const savedConfig = localStorage.getItem("firebase_db_config");
      return savedConfig
        ? JSON.parse(savedConfig)
        : {
            apiKey: "",
            projectId: "",
            databaseURL: "",
          };
    } catch (error) {
      console.error(
        "Error loading Firebase DB config from localStorage:",
        error
      );
      return { apiKey: "", projectId: "", databaseURL: "" };
    }
  };

  // Initialize the form with data from localStorage directly
  const form = useForm<FirebaseDBConfigType>({
    resolver: zodResolver(firebaseDBSchema),
    defaultValues: getSavedConfig(),
  });

  const handleSave = (data: FirebaseDBConfigType) => {
    setSaving(true);
    try {
      localStorage.setItem("firebase_db_config", JSON.stringify(data));
      toast.success("Firebase Database configuration saved successfully");
      setIsOpen(false);
      toast.info("Please refresh the page to apply the new configuration", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Failed to save configuration");
      console.error("Error saving firebase DB config:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="ml-2"
          title="Firebase Database Configuration"
        >
          <Database className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Firebase Database Configuration</DialogTitle>
          <DialogDescription>
            Enter your Firebase project details to enable database storage.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSave)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="apiKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>API Key *</FormLabel>
                  <FormControl>
                    <Input placeholder="Firebase API Key" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project ID *</FormLabel>
                  <FormControl>
                    <Input placeholder="example-app" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="databaseURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Database URL *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example-app.firebaseio.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={saving}>
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                  </>
                ) : (
                  "Save Configuration"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FirebaseDBConfigModal;

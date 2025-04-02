
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
import { Loader2, FileCloud } from "lucide-react";
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

// Schema for Google Drive configuration validation
const googleDriveSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  clientId: z.string().min(1, "Client ID is required"),
  folderId: z.string().min(1, "Folder ID is required for data storage"),
});

type GoogleDriveConfigType = z.infer<typeof googleDriveSchema>;

const GoogleDriveConfigModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // Get saved config from localStorage
  const getSavedConfig = () => {
    try {
      const savedConfig = localStorage.getItem("google_drive_config");
      return savedConfig
        ? JSON.parse(savedConfig)
        : {
            apiKey: "",
            clientId: "",
            folderId: "",
          };
    } catch (error) {
      console.error(
        "Error loading Google Drive config from localStorage:",
        error
      );
      return { apiKey: "", clientId: "", folderId: "" };
    }
  };

  // Initialize the form with data from localStorage directly
  const form = useForm<GoogleDriveConfigType>({
    resolver: zodResolver(googleDriveSchema),
    defaultValues: getSavedConfig(),
  });

  const handleSave = (data: GoogleDriveConfigType) => {
    setSaving(true);
    try {
      localStorage.setItem("google_drive_config", JSON.stringify(data));
      toast.success("Google Drive configuration saved successfully");
      setIsOpen(false);
      toast.info("Please refresh the page to apply the new configuration", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Failed to save configuration");
      console.error("Error saving Google Drive config:", error);
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
          title="Google Drive Configuration"
        >
          <FileCloud className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Google Drive Configuration</DialogTitle>
          <DialogDescription>
            Enter your Google Drive API details to load questions and paths.
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
                    <Input placeholder="Google API Key" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="clientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client ID *</FormLabel>
                  <FormControl>
                    <Input placeholder="Google Client ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="folderId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Folder ID *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Google Drive Folder ID containing questions"
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

export default GoogleDriveConfigModal;

import React, { useRef, useState } from "react";
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
import { Loader2, Database, Download, Upload, FileUp } from "lucide-react";
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

const firebaseDBSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  projectId: z.string().min(1, "Project ID is required"),
  databaseURL: z.string().min(1, "Database URL is required"),
});

type FirebaseDBConfigType = z.infer<typeof firebaseDBSchema>;

const FirebaseDBConfigModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getSavedConfig = (): FirebaseDBConfigType => {
    try {
      const savedConfig = localStorage.getItem("firebase_db_config");
      return savedConfig
        ? JSON.parse(savedConfig)
        : { apiKey: "", projectId: "", databaseURL: "" };
    } catch {
      return { apiKey: "", projectId: "", databaseURL: "" };
    }
  };

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
    } finally {
      setSaving(false);
    }
  };

  const exportConfig = () => {
    try {
      const config = getSavedConfig();
      const encodedConfig = btoa(JSON.stringify(config));
      const shareText = `Firebase Config (copy this text): ${encodedConfig}`;

      navigator.clipboard.writeText(shareText).then(() => {
        toast.success("Configuration copied to clipboard! Share this text.");
      });
    } catch {
      toast.error("Failed to export configuration");
    }
  };

  const exportConfigToFile = () => {
    try {
      const config = getSavedConfig();
      const blob = new Blob([JSON.stringify(config, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "firebase_config.json";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      toast.error("Failed to export configuration to file");
    }
  };

  const importConfigFromFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const config = JSON.parse(text);
        const result = firebaseDBSchema.safeParse(config);
        if (!result.success) throw new Error("Invalid config structure");

        form.reset(config);
        localStorage.setItem("firebase_db_config", JSON.stringify(config));
        toast.success("Configuration imported from file!");
      } catch {
        toast.error("Invalid or corrupted config file");
      }
    };
    reader.readAsText(file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="ml-2" title="Firebase Database Configuration">
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

        <div className="flex gap-2 mb-4 flex-wrap">
          <Button variant="outline" onClick={exportConfigToFile} className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Export (File)
          </Button>
          <Button
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2"
          >
            <FileUp className="h-4 w-4" /> Import (File)
          </Button>
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) importConfigFromFile(file);
            }}
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)} className="space-y-4 py-4">
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
                    <Input placeholder="https://example-app.firebaseio.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
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
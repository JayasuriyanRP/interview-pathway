
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Loader2, Settings } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema for Firebase configuration validation
const firebaseConfigSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  authDomain: z.string().min(1, "Auth Domain is required"),
  projectId: z.string().min(1, "Project ID is required"),
  storageBucket: z.string().optional(),
  messagingSenderId: z.string().optional(),
  appId: z.string().optional(),
  databaseURL: z.string().optional(),
});

type FirebaseConfigType = z.infer<typeof firebaseConfigSchema>;

const FirebaseConfigModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();
  
  // Get saved config from localStorage
  const getSavedConfig = () => {
    try {
      const savedConfig = localStorage.getItem('firebase_config');
      return savedConfig 
        ? JSON.parse(savedConfig)
        : {
            apiKey: "",
            authDomain: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            databaseURL: "",
          };
    } catch (error) {
      console.error("Error loading Firebase config from localStorage:", error);
      return {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        databaseURL: "",
      };
    }
  };

  // Initialize the form with data from localStorage directly (not as a function)
  const form = useForm<FirebaseConfigType>({
    resolver: zodResolver(firebaseConfigSchema),
    defaultValues: getSavedConfig()
  });

  const handleSave = (data: FirebaseConfigType) => {
    setSaving(true);
    try {
      // Store in local storage
      localStorage.setItem("firebase_config", JSON.stringify(data));
      toast.success("Firebase configuration saved successfully");
      setIsOpen(false);
      
      // Add a reload hint for the user
      toast.info("Please refresh the page to apply the new configuration", {
        duration: 5000,
      });
    } catch (error) {
      toast.error("Failed to save configuration");
      console.error("Error saving firebase config:", error);
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
          title="Firebase Configuration"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Firebase Configuration</DialogTitle>
          <DialogDescription>
            Enter your Firebase project details to enable authentication, database storage, and progress tracking.
          </DialogDescription>
        </DialogHeader>
        
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
              name="authDomain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auth Domain *</FormLabel>
                  <FormControl>
                    <Input placeholder="example-app.firebaseapp.com" {...field} />
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
                  <FormLabel>Database URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example-app.firebaseio.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Required for Realtime Database
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="storageBucket"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Storage Bucket</FormLabel>
                  <FormControl>
                    <Input placeholder="example-app.appspot.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="messagingSenderId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Messaging Sender ID</FormLabel>
                  <FormControl>
                    <Input placeholder="123456789012" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="appId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>App ID</FormLabel>
                  <FormControl>
                    <Input placeholder="1:123456789012:web:abcdef123456" {...field} />
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

export default FirebaseConfigModal;

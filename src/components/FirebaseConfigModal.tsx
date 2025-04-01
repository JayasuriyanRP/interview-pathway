
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

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const FirebaseConfigModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();
  
  const [config, setConfig] = useState<FirebaseConfig>(() => {
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
        };
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Validate required fields
    if (!config.apiKey || !config.authDomain || !config.projectId) {
      toast.error("API Key, Auth Domain, and Project ID are required");
      return;
    }

    setSaving(true);
    try {
      // Store in local storage
      localStorage.setItem("firebase_config", JSON.stringify(config));
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

  // Don't show the config button for non-authenticated users
  if (!user) {
    return null;
  }

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
            Enter your Firebase project details to enable authentication and database storage.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Key *</Label>
            <Input
              id="apiKey"
              name="apiKey"
              placeholder="API Key"
              value={config.apiKey}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="authDomain">Auth Domain *</Label>
            <Input
              id="authDomain"
              name="authDomain"
              placeholder="example-app.firebaseapp.com"
              value={config.authDomain}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectId">Project ID *</Label>
            <Input
              id="projectId"
              name="projectId"
              placeholder="example-app"
              value={config.projectId}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="storageBucket">Storage Bucket</Label>
            <Input
              id="storageBucket"
              name="storageBucket"
              placeholder="example-app.appspot.com"
              value={config.storageBucket}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="messagingSenderId">Messaging Sender ID</Label>
            <Input
              id="messagingSenderId"
              name="messagingSenderId"
              placeholder="12345678901"
              value={config.messagingSenderId}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="appId">App ID</Label>
            <Input
              id="appId"
              name="appId"
              placeholder="1:12345678901:web:abcd123456"
              value={config.appId}
              onChange={handleChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSave} disabled={saving}>
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
              </>
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FirebaseConfigModal;

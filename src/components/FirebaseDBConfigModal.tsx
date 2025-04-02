
import React, { useState, useEffect } from "react";
import { Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FirebaseDBConfigModal = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    databaseURL: "",
  });

  // Load config from localStorage when component mounts
  useEffect(() => {
    const savedConfig = localStorage.getItem("firebase_config");
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (error) {
        console.error("Error parsing saved Firebase config:", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simple validation
    if (!config.apiKey || !config.projectId) {
      toast({
        title: "Error",
        description: "API key and Project ID are required.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("firebase_config", JSON.stringify(config));
    toast({
      title: "Success",
      description: "Firebase database configuration saved.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title="Firebase DB Config">
          <Database className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Firebase DB Config</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Firebase Database Configuration</DialogTitle>
          <DialogDescription>
            Enter your Firebase database connection details. This information
            will be stored locally on your device.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="apiKey">API Key</Label>
            <Input
              id="apiKey"
              name="apiKey"
              value={config.apiKey}
              onChange={handleChange}
              placeholder="Your Firebase API key"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="authDomain">Auth Domain</Label>
            <Input
              id="authDomain"
              name="authDomain"
              value={config.authDomain}
              onChange={handleChange}
              placeholder="example.firebaseapp.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="projectId">Project ID</Label>
            <Input
              id="projectId"
              name="projectId"
              value={config.projectId}
              onChange={handleChange}
              placeholder="your-project-id"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="databaseURL">Database URL</Label>
            <Input
              id="databaseURL"
              name="databaseURL"
              value={config.databaseURL}
              onChange={handleChange}
              placeholder="https://your-project-id.firebaseio.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="storageBucket">Storage Bucket</Label>
            <Input
              id="storageBucket"
              name="storageBucket"
              value={config.storageBucket}
              onChange={handleChange}
              placeholder="your-project-id.appspot.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="messagingSenderId">Messaging Sender ID</Label>
            <Input
              id="messagingSenderId"
              name="messagingSenderId"
              value={config.messagingSenderId}
              onChange={handleChange}
              placeholder="1234567890"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="appId">App ID</Label>
            <Input
              id="appId"
              name="appId"
              value={config.appId}
              onChange={handleChange}
              placeholder="1:1234567890:web:abcdef1234567890"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Configuration</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FirebaseDBConfigModal;

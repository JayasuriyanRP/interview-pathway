
import React, { useState, useEffect } from "react";
import { Database, CloudUpload } from "lucide-react";
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

const GoogleDriveConfigModal = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({
    apiKey: "",
    clientId: "",
    folderId: "",
  });

  // Load config from localStorage when component mounts
  useEffect(() => {
    const savedConfig = localStorage.getItem('google_drive_config');
    if (savedConfig) {
      try {
        setConfig(JSON.parse(savedConfig));
      } catch (error) {
        console.error("Error parsing saved Google Drive config:", error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Simple validation
    if (!config.apiKey || !config.clientId || !config.folderId) {
      toast({
        title: "Error",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('google_drive_config', JSON.stringify(config));
    toast({
      title: "Success",
      description: "Google Drive configuration saved.",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title="Google Drive Config">
          <CloudUpload className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Google Drive Config</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Google Drive Configuration</DialogTitle>
          <DialogDescription>
            Enter your Google Drive API details to enable loading questions and paths from your Drive. This information will be stored locally on your device.
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
              placeholder="Your Google API key"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="clientId">Client ID</Label>
            <Input
              id="clientId"
              name="clientId"
              value={config.clientId}
              onChange={handleChange}
              placeholder="Your Google Client ID"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="folderId">Folder ID</Label>
            <Input
              id="folderId"
              name="folderId"
              value={config.folderId}
              onChange={handleChange}
              placeholder="Google Drive Folder ID containing JSON files"
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

export default GoogleDriveConfigModal;

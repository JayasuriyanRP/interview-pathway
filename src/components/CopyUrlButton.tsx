import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, Link2 } from 'lucide-react';
import { toast } from 'sonner';

interface CopyUrlButtonProps {
  url?: string;
  text?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const CopyUrlButton: React.FC<CopyUrlButtonProps> = ({ 
  url, 
  text = 'Copy URL',
  className,
  variant = 'outline',
  size = 'sm'
}) => {
  const [copied, setCopied] = useState(false);
  const urlToCopy = url || window.location.href;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(urlToCopy);
      setCopied(true);
      toast.success('URL copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy URL');
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={className}
      title={`Copy ${text} to clipboard`}
    >
      {copied ? (
        <Check className="h-4 w-4 mr-1" />
      ) : (
        <Link2 className="h-4 w-4 mr-1" />
      )}
      {copied ? 'Copied!' : text}
    </Button>
  );
};

export default CopyUrlButton;
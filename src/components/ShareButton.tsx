import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Copy, Check } from 'lucide-react';
import { PathNavigator } from '@/utils/pathUtils';
import { toast } from 'sonner';

interface ShareButtonProps {
  pathId: string;
  className?: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ pathId, className }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const metaData = PathNavigator.generateMetaData(pathId);
    const shareUrl = metaData.url;

    // Check if Web Share API is available
    if (navigator.share && navigator.canShare) {
      try {
        await navigator.share({
          title: metaData.title,
          text: metaData.description,
          url: shareUrl,
        });
        toast.success('Shared successfully!');
      } catch (error) {
        // Fall back to copying to clipboard if share was cancelled
        copyToClipboard(shareUrl);
      }
    } else {
      // Fall back to copying to clipboard
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className={className}
      title="Share this learning path"
    >
      {copied ? (
        <Check className="h-4 w-4 mr-1" />
      ) : (
        <Share2 className="h-4 w-4 mr-1" />
      )}
      {copied ? 'Copied!' : 'Share'}
    </Button>
  );
};

export default ShareButton;
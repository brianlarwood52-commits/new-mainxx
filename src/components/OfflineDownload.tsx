'use client';

import { useState, useEffect } from 'react';
import { Download, Check, Trash2, Loader2, HardDrive } from 'lucide-react';
import { offlineStorage } from '@/services/offlineStorage';

interface OfflineDownloadProps {
  contentId: string;
  contentType: 'devotional' | 'pathway' | 'blog' | 'crisis';
  contentTitle: string;
  contentData: any;
  onDownload?: () => void;
  onDelete?: () => void;
}

export default function OfflineDownload({
  contentId,
  contentType,
  contentTitle,
  contentData,
  onDownload,
  onDelete,
}: OfflineDownloadProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [storageSize, setStorageSize] = useState<string>('');

  useEffect(() => {
    checkDownloadStatus();
    updateStorageSize();
  }, [contentId]);

  const checkDownloadStatus = async () => {
    try {
      const content = await offlineStorage.getContent(contentId);
      setIsDownloaded(!!content);
    } catch (error) {
      console.error('Error checking download status:', error);
    }
  };

  const updateStorageSize = async () => {
    try {
      const size = await offlineStorage.getStorageSize();
      const sizeInMB = (size / (1024 * 1024)).toFixed(2);
      setStorageSize(sizeInMB);
    } catch (error) {
      console.error('Error getting storage size:', error);
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      await offlineStorage.saveContent({
        id: contentId,
        type: contentType,
        title: contentTitle,
        content: contentData,
        cachedAt: Date.now(),
      });

      setIsDownloaded(true);
      await updateStorageSize();

      if (onDownload) onDownload();
    } catch (error) {
      console.error('Error downloading content:', error);
      alert('Failed to download content for offline use');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await offlineStorage.deleteContent(contentId);
      setIsDownloaded(false);
      await updateStorageSize();

      if (onDelete) onDelete();
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('Failed to remove offline content');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {isDownloaded ? (
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Check className="w-4 h-4" />
              <span>Downloaded</span>
              <Trash2 className="w-4 h-4 ml-2 opacity-70" />
            </>
          )}
        </button>
      ) : (
        <button
          onClick={handleDownload}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download for Offline</span>
            </>
          )}
        </button>
      )}

      {storageSize && (
        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          <HardDrive className="w-4 h-4" />
          <span>{storageSize} MB</span>
        </div>
      )}
    </div>
  );
}

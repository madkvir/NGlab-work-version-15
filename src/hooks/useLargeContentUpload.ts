import { useState, useCallback } from "react";
import {
  uploadContentInChunks,
  shouldUseChunkedUpload,
  getRecommendedChunkSize,
} from "@/utils/chunkedUpload";
import { checkContentLimit } from "@/utils/contentValidation";

export interface UploadProgress {
  isUploading: boolean;
  progress: number;
  currentChunk: number;
  totalChunks: number;
  error: string | null;
  success: boolean;
}

export interface UploadOptions {
  useChunkedUpload?: boolean;
  chunkSize?: number;
  onProgress?: (progress: number) => void;
}

export function useLargeContentUpload() {
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({
    isUploading: false,
    progress: 0,
    currentChunk: 0,
    totalChunks: 0,
    error: null,
    success: false,
  });

  const uploadPost = useCallback(async (formData: FormData, options: UploadOptions = {}) => {
    const { useChunkedUpload: forceChunked, chunkSize, onProgress } = options;

    setUploadProgress({
      isUploading: true,
      progress: 0,
      currentChunk: 0,
      totalChunks: 0,
      error: null,
      success: false,
    });

    try {
      const content = formData.get("content") as string;
      if (!content) {
        throw new Error("No content provided");
      }

      const contentSize = contentCheck.size.bytes;


      if (shouldChunk) {
        console.log(`Using chunked upload for content size: ${contentCheck.size.readable}`);

          title: formData.get("title"),
          slug: formData.get("slug"),
          excerpt: formData.get("excerpt"),
          category: formData.get("category"),
          author: formData.get("author"),
          date: formData.get("date"),
          translations: formData.get("translations"),
        };


        const result = await uploadContentInChunks(content, metadata, {
          chunkSize: recommendedChunkSize,
          onProgress: (progress) => {
            setUploadProgress((prev) => ({ ...prev, progress }));
            onProgress?.(progress);
          },
          onChunkComplete: (currentChunk, totalChunks) => {
            setUploadProgress((prev) => ({
              ...prev,
              currentChunk,
              totalChunks,
            }));
          },
        });

        if (result.success) {
          setUploadProgress((prev) => ({
            ...prev,
            isUploading: false,
            success: true,
            progress: 100,
          }));
          return result.data;
        } else {
          throw new Error(result.error || "Chunked upload failed");
        }
      } else {
        // Обычная загрузка
        console.log(`Using regular upload for content size: ${contentCheck.size.readable}`);

        const response = await fetch("/api/blog", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP ${response.status}`);
        }

        const result = await response.json();

        setUploadProgress((prev) => ({
          ...prev,
          isUploading: false,
          success: true,
          progress: 100,
        }));

        return result.data;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Upload failed";
      console.error("Upload error:", errorMessage);

      setUploadProgress((prev) => ({
        ...prev,
        isUploading: false,
        error: errorMessage,
      }));

      throw error;
    }
  }, []);

  const resetUpload = useCallback(() => {
    setUploadProgress({
      isUploading: false,
      progress: 0,
      currentChunk: 0,
      totalChunks: 0,
      error: null,
      success: false,
    });
  }, []);

  return {
    uploadPost,
    uploadProgress,
    resetUpload,
  };
}

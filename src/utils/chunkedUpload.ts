
export interface ChunkUploadOptions {
  chunkSize?: number;
  maxRetries?: number;
  onProgress?: (progress: number) => void;
  onChunkComplete?: (chunkIndex: number, totalChunks: number) => void;
}

export interface ChunkUploadResult {
  success: boolean;
  data?: any;
  error?: string;
}

export async function uploadContentInChunks(
  content: string,
  metadata: any,
  options: ChunkUploadOptions = {}
): Promise<ChunkUploadResult> {
  const {
    chunkSize = 1024 * 1024, // 1MB по умолчанию
    maxRetries = 3,
    onProgress,
    onChunkComplete,
  } = options;

  try {
    const chunkId = `chunk_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const chunks = splitContentIntoChunks(content, chunkSize);
    const totalChunks = chunks.length;

    console.log(
      `Starting chunked upload: ${totalChunks} chunks, ${(content.length / 1024 / 1024).toFixed(
        2
      )}MB total`
    );

    for (let i = 0; i < chunks.length; i++) {
      let retries = 0;
      let success = false;

      while (retries < maxRetries && !success) {
        try {
          const response = await fetch("/api/blog/chunk", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chunkId,
              totalChunks,
              chunkIndex: i,
              chunkData: chunks[i],
              metadata,
            }),
          });

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }

          const result = await response.json();
          if (result.success) {
            success = true;
            onChunkComplete?.(i + 1, totalChunks);
            onProgress?.(((i + 1) / totalChunks) * 100);
          } else {
            throw new Error(result.error || "Unknown error");
          }
        } catch (error) {
          retries++;
          console.warn(`Chunk ${i} failed (attempt ${retries}/${maxRetries}):`, error);

          if (retries >= maxRetries) {
            throw new Error(`Failed to upload chunk ${i} after ${maxRetries} attempts`);
          }

          // Экспоненциальная задержка между попытками
          await new Promise((resolve) => setTimeout(resolve, Math.pow(2, retries) * 1000));
        }
      }
    }

    const finalResponse = await fetch(`/api/blog/chunk?chunkId=${chunkId}`);
    const finalResult = await finalResponse.json();

    if (finalResult.success && finalResult.data) {
      return {
        success: true,
        data: finalResult.data,
      };
    } else {
      throw new Error(finalResult.error || "Failed to complete upload");
    }
  } catch (error) {
    console.error("Chunked upload failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

function splitContentIntoChunks(content: string, chunkSize: number): string[] {
  const chunks: string[] = [];
  const buffer = Buffer.from(content, "utf-8");

  for (let i = 0; i < buffer.length; i += chunkSize) {
    const chunk = buffer.slice(i, i + chunkSize);
    chunks.push(chunk.toString("base64"));
  }

  return chunks;
}

export function shouldUseChunkedUpload(
  contentSize: number,
  threshold: number = 10 * 1024 * 1024
): boolean {
  return contentSize > threshold; // 10MB по умолчанию
}

export function getRecommendedChunkSize(contentSize: number): number {
  if (contentSize < 5 * 1024 * 1024) return 512 * 1024; // 512KB для маленьких файлов
  if (contentSize < 20 * 1024 * 1024) return 1024 * 1024; // 1MB для средних файлов
  if (contentSize < 50 * 1024 * 1024) return 2 * 1024 * 1024; // 2MB для больших файлов
  return 5 * 1024 * 1024; // 5MB для очень больших файлов
}


export interface FallbackUploadResult {
  success: boolean;
  url?: string;
  error?: string;
}

export async function uploadImageFallback(file: File): Promise<FallbackUploadResult> {
  try {
    const buffer = await file.arrayBuffer();
    const base64String = Buffer.from(buffer).toString("base64");
    const dataUri = `data:${file.type};base64,${base64String}`;

    return {
      success: true,
      url: dataUri,
    };
  } catch (error) {
    console.error("Error in fallback upload:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Upload failed",
    };
  }
}

export async function uploadImagesFallback(images: File[]): Promise<string[]> {
  if (!images || images.length === 0) {
    return [];
  }

  const results = await Promise.all(
    images.map(async (file) => {
      const result = await uploadImageFallback(file);
      if (result.success && result.url) {
        return result.url;
      } else {
        throw new Error(result.error || "Upload failed");
      }
    })
  );

  return results;
}

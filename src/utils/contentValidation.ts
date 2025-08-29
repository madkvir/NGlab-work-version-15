// Константы для валидации размера контента
export const MAX_CONTENT_SIZE = 5 * 1024 * 1024; // 5MB
export const MAX_REQUEST_SIZE = 6 * 1024 * 1024; // 6MB (Netlify limit)

/**
 * Check content size
 * @param content - content to check
 * @returns true if size is within limit
 */
export function validateContentSize(content: string): boolean {
  const contentSize = new Blob([content]).size;
  return contentSize <= MAX_CONTENT_SIZE;
}

/**
 * Check FormData size
 * @param formData - FormData to check
 * @returns true if size is within limit
 */
export function validateFormDataSize(formData: FormData): boolean {
  let totalSize = 0;

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      totalSize += value.size;
    } else if (typeof value === "string") {
      totalSize += new Blob([value]).size;
    }
  }

  return totalSize <= MAX_REQUEST_SIZE;
}

/**
 * Get content size in readable format
 * @param content - content
 * @returns size in bytes and readable format
 */
export function getContentSizeInfo(content: string): { bytes: number; readable: string } {
  const bytes = new Blob([content]).size;
  const readable = formatBytes(bytes);
  return { bytes, readable };
}

/**
 * Format bytes to readable format
 * @param bytes - number of bytes
 * @returns formatted string
 */
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Check if content exceeds limit
 * @param content - content to check
 * @returns object with result of check
 */
export function checkContentLimit(content: string): {
  isValid: boolean;
  size: { bytes: number; readable: string };
  limit: { bytes: number; readable: string };
  remaining: { bytes: number; readable: string };
} {
  const size = getContentSizeInfo(content);
  const limit = { bytes: MAX_CONTENT_SIZE, readable: formatBytes(MAX_CONTENT_SIZE) };
  const remaining = {
    bytes: Math.max(0, MAX_CONTENT_SIZE - size.bytes),
    readable: formatBytes(Math.max(0, MAX_CONTENT_SIZE - size.bytes)),
  };

  return {
    isValid: size.bytes <= MAX_CONTENT_SIZE,
    size,
    limit,
    remaining,
  };
}

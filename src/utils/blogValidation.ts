import { checkContentLimit, validateFormDataSize } from "./contentValidation";

export interface BlogValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  sizeInfo?: {
    content: { bytes: number; readable: string };
    total: { bytes: number; readable: string };
  };
}

/**
 * Validate blog data
 * @param formData - FormData with blog data
 * @returns validation result
 */
export function validateBlogData(formData: FormData): BlogValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!validateFormDataSize(formData)) {
    errors.push("Common size limit is larger than 6MB");
  }

  const content = formData.get("content") as string;
  if (content) {
    const contentCheck = checkContentLimit(content);

    if (!contentCheck.isValid) {
      errors.push(
        `Размер контента (${contentCheck.size.readable}) превышает лимит ${contentCheck.limit.readable}`
      );
    } else if (contentCheck.size.bytes > 4 * 1024 * 1024) {
      warnings.push(`Content is big (${contentCheck.size.readable}). Reccomended to reduce.`);
    }

    const images = formData.getAll("images") as File[];
    let totalImageSize = 0;

    images.forEach((image, index) => {
      totalImageSize += image.size;
      if (image.size > 2 * 1024 * 1024) {
        // > 2MB
        warnings.push(`Image ${index + 1} is big (${(image.size / 1024 / 1024).toFixed(2)}MB)`);
      }
    });

    if (totalImageSize > 4 * 1024 * 1024) {
      warnings.push(
        `Common size of images (${(totalImageSize / 1024 / 1024).toFixed(2)}MB) is pretty big!`
      );
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      sizeInfo: {
        content: contentCheck.size,
        total: {
          bytes: new Blob([content]).size + totalImageSize,
          readable: `${((new Blob([content]).size + totalImageSize) / 1024 / 1024).toFixed(2)}MB`,
        },
      },
    };
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Making warning for user about content size
 * @param content - content to check
 * @returns HTML string with warning
 */
export function createContentSizeWarning(content: string): string {
  const check = checkContentLimit(content);

  if (!check.isValid) {
    return `
      <div class="error-message">
        <strong>Error:</strong> Content size (${check.size.readable}) is larger than limit ${check.limit.readable}
      </div>
    `;
  }

  if (check.size.bytes > 4 * 1024 * 1024) {
    return `
      <div class="warning-message">
        <strong>Warning:</strong> Content is big (${check.size.readable}). 
        Remaining: ${check.remaining.readable}
      </div>
    `;
  }

  return `
    <div class="info-message">
      Content size: ${check.size.readable} / ${check.limit.readable}
    </div>
  `;
}

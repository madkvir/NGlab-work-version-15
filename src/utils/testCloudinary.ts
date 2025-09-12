
import { canUseCloudinary } from "./cloudinaryCheck";
import { uploadImages } from "@/services/cloudinary/unloadImages";

export async function testImageUpload(): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> {
  try {
    const isConfigured = canUseCloudinary();

    if (!isConfigured) {
      return {
        success: false,
        message: "Cloudinary is not configured. Using fallback mode.",
        details: {
          mode: "fallback",
          reason: "Missing environment variables",
        },
      };
    }

    const testImageData =
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
    const testFile = new File([Buffer.from(testImageData, "base64")], "test.png", {
      type: "image/png",
    });

    const result = await uploadImages([testFile]);

    if (result.length > 0) {
      return {
        success: true,
        message: "Image upload test successful",
        details: {
          mode: result[0].startsWith("data:") ? "fallback" : "cloudinary",
          url: result[0],
        },
      };
    } else {
      return {
        success: false,
        message: "Image upload test failed - no result returned",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: `Image upload test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      details: { error },
    };
  }
}

export function getCloudinaryStatus(): {
  configured: boolean;
  mode: "cloudinary" | "fallback" | "unknown";
  message: string;
} {
  const configured = canUseCloudinary();

  return {
    configured,
    mode: configured ? "cloudinary" : "fallback",
    message: configured
      ? "Cloudinary is properly configured"
      : "Cloudinary not configured - using fallback mode",
  };
}

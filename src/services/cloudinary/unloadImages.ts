import { cloudinary } from "./config";
import { uploadImagesFallback } from "./fallbackUpload";
import { canUseCloudinary } from "@/utils/cloudinaryCheck";

export const uploadImages = async (images: File[]) => {
  if (!images || images.length === 0) {
    return [];
  }

  // Проверяем, можно ли использовать Cloudinary
  if (!canUseCloudinary() || !cloudinary || !cloudinary.uploader) {
    console.warn("⚠️  Cloudinary not available, using fallback upload");
    return await uploadImagesFallback(images);
  }

  try {
    return await Promise.all(
      images.map(async (file) => {
        try {
          const buffer = await file.arrayBuffer();
          const base64String = Buffer.from(buffer).toString("base64");
          const dataUri = `data:${file.type};base64,${base64String}`;

          const uploadResponse = await cloudinary.uploader.upload(dataUri, {
            folder: "blog_images",
            resource_type: "auto", // Автоматическое определение типа
            quality: "auto", // Автоматическая оптимизация качества
          });

          return uploadResponse.secure_url;
        } catch (error) {
          console.error(`Error uploading image ${file.name} to Cloudinary:`, error);
          console.warn(`⚠️  Falling back to base64 upload for ${file.name}`);

          // Fallback к base64 если Cloudinary не работает
          const buffer = await file.arrayBuffer();
          const base64String = Buffer.from(buffer).toString("base64");
          return `data:${file.type};base64,${base64String}`;
        }
      })
    );
  } catch (error) {
    console.error("Error in uploadImages:", error);
    console.warn("⚠️  Falling back to base64 upload for all images");

  }
};

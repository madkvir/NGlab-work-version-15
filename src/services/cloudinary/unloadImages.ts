import { cloudinary } from "./config";

export const uploadImages = async (images) => {
  return await Promise.all(
    images.map(async (file) => {
      const buffer = await file.arrayBuffer();
      const base64String = Buffer.from(buffer).toString("base64");
      const dataUri = `data:${file.type};base64,${base64String}`;

      const uploadResponse = await cloudinary.uploader.upload(dataUri, {
        folder: "blog_images",
      });

      return uploadResponse.secure_url;
    })
  );
};

import { v2 as cloudinary } from "cloudinary";
import { checkCloudinaryConfig, getCloudinaryErrorMessage } from "@/utils/cloudinaryCheck";

const configCheck = checkCloudinaryConfig();

if (!configCheck.isConfigured) {
  console.warn(`⚠️  ${getCloudinaryErrorMessage()}`);
} else {
  console.log("✅ Cloudinary configuration is valid");
}

cloudinary.config({
  cloud_name: configCheck.config.cloud_name,
  api_key: configCheck.config.api_key,
  api_secret: configCheck.config.api_secret,
});

export { cloudinary };

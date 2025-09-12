import { v2 as cloudinary } from "cloudinary";
import { checkCloudinaryConfig, getCloudinaryErrorMessage } from "@/utils/cloudinaryCheck";


if (!configCheck.isConfigured) {
  console.warn(`⚠️  ${getCloudinaryErrorMessage()}`);
} else {
  console.log("✅ Cloudinary configuration is valid");
}

  cloud_name: configCheck.config.cloud_name,
  api_key: configCheck.config.api_key,
  api_secret: configCheck.config.api_secret,
});

export { cloudinary };

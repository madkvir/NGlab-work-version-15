
export interface CloudinaryConfig {
  cloud_name: string;
  api_key: string;
  api_secret: string;
}

export interface CloudinaryCheckResult {
  isConfigured: boolean;
  missingVars: string[];
  config: Partial<CloudinaryConfig>;
}

export function checkCloudinaryConfig(): CloudinaryCheckResult {
  const config = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  };

  const missingVars = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  return {
    isConfigured: missingVars.length === 0,
    missingVars,
    config,
  };
}

export function getCloudinaryErrorMessage(): string {
  const check = checkCloudinaryConfig();

  if (check.isConfigured) {
    return "Cloudinary is properly configured";
  }

  return `Missing Cloudinary environment variables: ${check.missingVars.join(
    ", "
  )}. Please set them in your .env file.`;
}

export function canUseCloudinary(): boolean {
  return checkCloudinaryConfig().isConfigured;
}

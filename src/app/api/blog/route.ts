import dbConnect from "@/lib/mongodb";
import Post from "@/server/models/Post";
import { NextRequest, NextResponse } from "next/server";
import { uploadImages } from "@/services/cloudinary/unloadImages";
import {
  validateContentSize,
  validateFormDataSize,
  MAX_CONTENT_SIZE,
  MAX_REQUEST_SIZE,
} from "@/utils/contentValidation";
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://neurogenlab.de",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find({});

    return NextResponse.json(posts, { headers: corsHeaders });
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > MAX_REQUEST_SIZE) {
      return NextResponse.json(
        {
          success: false,
          error: "Request too large",
          message: `Request size exceeds ${
            MAX_REQUEST_SIZE / 1024 / 1024
          }MB limit. Consider using /api/blog/chunk for large content.`,
        },
        { status: 413, headers: corsHeaders }
      );
    }

    await dbConnect();
    console.log("db connect successful!");

    const form = await req.formData();

    if (!validateFormDataSize(form)) {
      return NextResponse.json(
        {
          success: false,
          error: "Request too large",
          message: "Request size exceeds 6MB limit",
        },
        { status: 413, headers: corsHeaders }
      );
    }

    const images = form.getAll("images") as File[];
    const rawTranslations = form.get("translations");
    const content = form.get("content") as string;

    if (content && !validateContentSize(content)) {
      return NextResponse.json(
        {
          success: false,
          error: "Content too large",
          message: "Content size exceeds 5MB limit",
        },
        { status: 413, headers: corsHeaders }
      );
    }

    let uploadedImages: string[] = [];
    if (images.length > 0) {
      try {
        const totalImageSize = images.reduce((sum, img) => sum + img.size, 0);
        if (totalImageSize > 50 * 1024 * 1024) {
          return NextResponse.json(
            {
              success: false,
              error: "Images too large",
              message: "Total image size exceeds 50MB limit",
            },
            { status: 413, headers: corsHeaders }
          );
        }

        const uploadPromise = uploadImages(images);
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Image upload timeout")), 25000)
        );

        uploadedImages = await Promise.race([uploadPromise, timeoutPromise]);
        console.log(`✅ Successfully uploaded ${uploadedImages.length} images`);
      } catch (uploadError) {
        console.error("❌ Error uploading images:", uploadError);

        let errorMessage = "Image upload failed";
        if (uploadError instanceof Error) {
          if (uploadError.message.includes("Cloudinary is not properly configured")) {
            errorMessage = "Image service is not configured";
          } else if (uploadError.message.includes("timeout")) {
            errorMessage = "Image upload timeout - try reducing image sizes";
          } else {
            errorMessage = uploadError.message;
          }
        }

        return NextResponse.json(
          {
            success: false,
            error: "Image upload failed",
            message: errorMessage,
          },
          { status: 500, headers: corsHeaders }
        );
      }
    }

    let translations = null;

    if (typeof rawTranslations === "string") {
      try {
        translations = JSON.parse(rawTranslations);
      } catch (err) {
        console.error("Invalid JSON in translations:", rawTranslations);
        return NextResponse.json(
          { success: false, error: "Invalid translations format" },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    const createPostPromise = Post.create({
      title: form.get("title"),
      slug: form.get("slug"),
      excerpt: form.get("excerpt"),
      content: form.get("content"),
      category: form.get("category"),
      author: form.get("author"),
      date: form.get("date"),
      translations,
      images: uploadedImages,
    });

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Database operation timeout")), 30000)
    );

    const newPost = await Promise.race([createPostPromise, timeoutPromise]);

    return NextResponse.json(
      { success: true, data: newPost },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error creating post:", error);

    if (error instanceof Error) {
      if (error.message.includes("timeout")) {
        return NextResponse.json(
          {
            success: false,
            error: "Request timeout",
            message: "Operation took too long to complete",
          },
          { status: 504, headers: corsHeaders }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: "Bad Request" },
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    console.log("db connect successful!");

    const form = await req.formData();

    if (!validateFormDataSize(form)) {
      return NextResponse.json(
        {
          success: false,
          error: "Request too large",
          message: "Request size exceeds 6MB limit",
        },
        { status: 413, headers: corsHeaders }
      );
    }

    const images = form.getAll("images") as File[];
    const id = form.get("_id");
    const rawTranslations = form.get("translations");
    const content = form.get("content") as string;

    if (content && !validateContentSize(content)) {
      return NextResponse.json(
        {
          success: false,
          error: "Content too large",
          message: "Content size exceeds 5MB limit",
        },
        { status: 413, headers: corsHeaders }
      );
    }

    const postInfo = await Post.findOne({ _id: id });
    const exstImages = postInfo.images;

    let uploadedImages: string[] = [];
    if (images.length > 0) {
      try {
        const totalImageSize = images.reduce((sum, img) => sum + img.size, 0);
        if (totalImageSize > 50 * 1024 * 1024) {
          return NextResponse.json(
            {
              success: false,
              error: "Images too large",
              message: "Total image size exceeds 50MB limit",
            },
            { status: 413, headers: corsHeaders }
          );
        }

        const uploadPromise = uploadImages(images);
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Image upload timeout")), 25000)
        );

        uploadedImages = await Promise.race([uploadPromise, timeoutPromise]);
        console.log(`✅ Successfully uploaded ${uploadedImages.length} images for update`);
      } catch (uploadError) {
        console.error("❌ Error uploading images:", uploadError);

        let errorMessage = "Image upload failed";
        if (uploadError instanceof Error) {
          if (uploadError.message.includes("Cloudinary is not properly configured")) {
            errorMessage = "Image service is not configured";
          } else if (uploadError.message.includes("timeout")) {
            errorMessage = "Image upload timeout - try reducing image sizes";
          } else {
            errorMessage = uploadError.message;
          }
        }

        return NextResponse.json(
          {
            success: false,
            error: "Image upload failed",
            message: errorMessage,
          },
          { status: 500, headers: corsHeaders }
        );
      }
    }

    let translations = null;

    if (typeof rawTranslations === "string") {
      try {
        translations = JSON.parse(rawTranslations);
      } catch (err) {
        console.error("Invalid JSON in translations:", rawTranslations);
        return NextResponse.json(
          { success: false, error: "Invalid translations format" },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    const updPost = {
      title: form.get("title"),
      slug: form.get("slug"),
      excerpt: form.get("excerpt"),
      content: form.get("content"),
      category: form.get("category"),
      author: form.get("author"),
      date: form.get("date"),
      translations,
      images: [...exstImages, ...uploadedImages],
    };

    const updatePromise = Post.findByIdAndUpdate(id, updPost);
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Database operation timeout")), 30000)
    );

    const result = await Promise.race([updatePromise, timeoutPromise]);
    console.log("result update", result);

    return NextResponse.json(
      { success: true, data: result },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error updating post:", error);

    if (error instanceof Error) {
      if (error.message.includes("timeout")) {
        return NextResponse.json(
          {
            success: false,
            error: "Request timeout",
            message: "Operation took too long to complete",
          },
          { status: 504, headers: corsHeaders }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: "Bad Request" },
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Missing ID" },
        { status: 400, headers: corsHeaders }
      );
    }

    await dbConnect();
    const result = await Post.findByIdAndDelete(id);

    if (result.images.length > 0) {
      const imgToDelete = result.images.map((img: string) => {
        const result = img.split("blog_images/")[1].split(".jpg")[0];
        return `blog_images/${result}`;
      });
    }

    if (!result) {
      return NextResponse.json(
        { success: false, error: "Post not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    console.log("delete result", result);
    return NextResponse.json({ success: true, data: result }, { headers: corsHeaders });
  } catch (error) {
    console.error("❌ Error deleting post:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500, headers: corsHeaders }
    );
  }
}

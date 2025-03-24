import dbConnect from "../../../lib/mongodb";
import Post from "../../../server/models/Post";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Конфигурация CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://neuropeplab.de',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Обработка OPTIONS запроса для CORS preflight
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
    await dbConnect();
    console.log("db connect succesful!");

    const form = await req.formData();
    const images = form.getAll("images") as File[];

    const uploadedImages = await Promise.all(
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

    const newPost = await Post.create({
      title: form.get("title"),
      slug: form.get("slug"),
      excerpt: form.get("excerpt"),
      content: form.get("content"),
      category: form.get("category"),
      author: form.get("author"),
      date: form.get("date"),
      images: uploadedImages,
    });

    return NextResponse.json(
      { success: true, data: newPost }, 
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error creating post:", error);
    return NextResponse.json(
      { success: false, error: "Bad Request" }, 
      { status: 400, headers: corsHeaders }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await dbConnect();
    console.log("db connect succesful!");

    const form = await req.formData();
    const images = form.getAll("images") as File[];
    const id = form.get("_id");

    const postInfo = await Post.findOne({ _id: id });
    const exstImages = postInfo.images;

    const uploadedImages = await Promise.all(
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

    const updPost = {
      title: form.get("title"),
      slug: form.get("slug"),
      excerpt: form.get("excerpt"),
      content: form.get("content"),
      category: form.get("category"),
      author: form.get("author"),
      date: form.get("date"),
      images: [...exstImages, ...uploadedImages],
    };
    const result = await Post.findByIdAndUpdate(id, updPost);
    console.log("result update", result);

    return NextResponse.json(
      { success: true, data: result }, 
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error updating post:", error);
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
    return NextResponse.json(
      { success: true, data: result },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error deleting post:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" }, 
      { status: 500, headers: corsHeaders }
    );
  }
}

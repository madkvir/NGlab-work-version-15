import dbConnect from "../../../lib/mongodb";
import Post from "../../../server/models/Post";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find({});

    return NextResponse.json(posts);
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
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

    return NextResponse.json({ success: true, data: newPost }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    const result = await Post.findByIdAndUpdate(body._id, body);

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    console.error("❌ Error updating post:", error);
    return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
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
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }

    console.log("delete result", result);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error("❌ Error deleting post:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

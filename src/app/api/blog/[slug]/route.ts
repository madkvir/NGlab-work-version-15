import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../server/models/Post";

export async function GET(req: NextRequest, { params }) {
  try {
    await dbConnect();
    console.log("db connect");

    const { slug } = await params;
    if (!slug) {
      console.error("Slug not found");
      return NextResponse.json({ success: false, error: "Slug not found" }, { status: 404 });
    }

    const post = await Post.findOne({ slug });

    if (!post) {
      console.error("Post not found");
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../server/models/Post";

export async function GET(req: NextRequest, params) {
  try {
    await dbConnect();

    const { slug } = await params;

    const post = await Post.findOne({ slug });

    if (!post) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return NextResponse.json({ success: false, error: "Bad Request" }, { status: 400 });
  }
}

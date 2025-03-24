import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../server/models/Post";

// Конфигурация CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://neurogenlab.de',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Обработка OPTIONS запроса для CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: NextRequest, { params }) {
  try {
    await dbConnect();
    console.log("db connect");

    const { slug } = await params;
    if (!slug) {
      console.error("Slug not found");
      return NextResponse.json(
        { success: false, error: "Slug not found" }, 
        { status: 404, headers: corsHeaders }
      );
    }

    const post = await Post.findOne({ slug });

    if (!post) {
      console.error("Post not found");
      return NextResponse.json(
        { success: false, error: "Post not found" }, 
        { status: 404, headers: corsHeaders }
      );
    }

    return NextResponse.json(post, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return NextResponse.json(
      { success: false, error: "Bad Request" }, 
      { status: 400, headers: corsHeaders }
    );
  }
}

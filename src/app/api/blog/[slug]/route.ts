import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Post from "../../../../server/models/Post";

// Конфигурация CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Временно разрешаем все домены для отладки
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
  'Access-Control-Allow-Credentials': 'true'
};

// Обработка OPTIONS запроса для CORS preflight
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(req: NextRequest, { params }) {
  try {
    console.log("Starting GET request for blog post with params:", params);
    
    await dbConnect();
    console.log("MongoDB connection established");

    const { slug } = await params;
    if (!slug) {
      console.error("Slug parameter is missing");
      return NextResponse.json(
        { success: false, error: "Slug parameter is required" }, 
        { status: 400, headers: corsHeaders }
      );
    }

    console.log("Searching for post with slug:", slug);
    const post = await Post.findOne({ slug });

    if (!post) {
      console.error(`Post not found for slug: ${slug}`);
      return NextResponse.json(
        { success: false, error: "Post not found" }, 
        { status: 404, headers: corsHeaders }
      );
    }

    console.log("Post found successfully:", post._id);
    return NextResponse.json(post, { status: 200, headers: corsHeaders });
  } catch (error) {
    console.error("Error in GET /api/blog/[slug]:", error);
    console.error("Error details:", {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    // Возвращаем 500 для серверных ошибок
    return NextResponse.json(
      { 
        success: false, 
        error: "Internal Server Error",
        details: process.env.NODE_ENV === 'development' ? error.message : undefined 
      }, 
      { status: 500, headers: corsHeaders }
    );
  }
}

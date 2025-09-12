import dbConnect from "@/lib/mongodb";
import Post from "@/server/models/Post";
import { NextRequest, NextResponse } from "next/server";
import { uploadImages } from "@/services/cloudinary/unloadImages";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://neurogenlab.de",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const chunkStorage = new Map<string, { chunks: Buffer[]; totalSize: number; metadata: any }>();

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    const { chunkId, totalChunks, chunkIndex, chunkData, metadata } = await req.json();

    if (!chunkStorage.has(chunkId)) {
      chunkStorage.set(chunkId, {
        chunks: new Array(totalChunks),
        totalSize: 0,
        metadata: metadata,
      });
    }

    const storage = chunkStorage.get(chunkId)!;
    const chunkBuffer = Buffer.from(chunkData, "base64");

    storage.chunks[chunkIndex] = chunkBuffer;
    storage.totalSize += chunkBuffer.length;

    // Проверяем, все ли чанки получены
    const allChunksReceived = storage.chunks.every((chunk) => chunk !== undefined);

    if (allChunksReceived) {
      // Собираем полный файл
      const fullBuffer = Buffer.concat(storage.chunks);
      const fullContent = fullBuffer.toString("utf-8");

      await dbConnect();

      const newPost = await Post.create({
        title: metadata.title,
        slug: metadata.slug,
        excerpt: metadata.excerpt,
        content: fullContent,
        category: metadata.category,
        author: metadata.author,
        date: metadata.date,
        translations: metadata.translations,
        images: [], // Изображения обрабатываются отдельно
      });

      chunkStorage.delete(chunkId);

      return NextResponse.json(
        {
          success: true,
          data: newPost,
          message: "Post created successfully from chunks",
        },
        { status: 201, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      {
        success: true,
        received: chunkIndex + 1,
        total: totalChunks,
        message: "Chunk received",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error processing chunk:", error);
    return NextResponse.json(
      { success: false, error: "Chunk processing failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const chunkId = searchParams.get("chunkId");

    if (!chunkId || !chunkStorage.has(chunkId)) {
      return NextResponse.json(
        { success: false, error: "Chunk not found" },
        { status: 404, headers: corsHeaders }
      );
    }

    const storage = chunkStorage.get(chunkId)!;
    const receivedChunks = storage.chunks.filter((chunk) => chunk !== undefined).length;
    const totalChunks = storage.chunks.length;

    return NextResponse.json(
      {
        success: true,
        received: receivedChunks,
        total: totalChunks,
        progress: (receivedChunks / totalChunks) * 100,
        totalSize: storage.totalSize,
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error getting chunk status:", error);
    return NextResponse.json(
      { success: false, error: "Failed to get chunk status" },
      { status: 500, headers: corsHeaders }
    );
  }
}

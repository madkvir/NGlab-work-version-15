import dbConnect from "@/lib/mongodb";
import Post from "@/server/models/Post";
import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "https://neurogenlab.de",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

  try {
    await dbConnect();
    console.log("db connect successful!");

    if (!reader) {
      return NextResponse.json(
        { success: false, error: "No request body" },
        { status: 400, headers: corsHeaders }
      );
    }

    let buffer = new Uint8Array(0);
    let totalSize = 0;
    const maxSize = 100 * 1024 * 1024; // 100MB лимит

      const { done, value } = await reader.read();

      if (done) break;

      if (totalSize > maxSize) {
        return NextResponse.json(
          { success: false, error: "Request too large" },
          { status: 413, headers: corsHeaders }
        );
      }

      newBuffer.set(buffer);
      newBuffer.set(value, buffer.length);
      buffer = newBuffer;
    }

    const text = new TextDecoder().decode(buffer);

    const parts = text.split(boundary).slice(1, -1);

    const postData: any = {};

    for (const part of parts) {
      const [headers, ...bodyParts] = part.split("\r\n\r\n");
      const body = bodyParts.join("\r\n\r\n").trim();

      const nameMatch = headers.match(/name="([^"]+)"/);
      if (nameMatch) {
        const name = nameMatch[1];
        postData[name] = body;
      }
    }

    // Валидация обязательных полей
    if (!postData.title || !postData.content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (postData.translations) {
      try {
        translations = JSON.parse(postData.translations);
      } catch (err) {
        console.error("Invalid JSON in translations:", postData.translations);
        return NextResponse.json(
          { success: false, error: "Invalid translations format" },
          { status: 400, headers: corsHeaders }
        );
      }
    }

      title: postData.title,
      slug: postData.slug,
      excerpt: postData.excerpt,
      content: postData.content,
      category: postData.category,
      author: postData.author,
      date: postData.date,
      translations,
      images: [],
    });

    return NextResponse.json(
      {
        success: true,
        data: newPost,
        size: totalSize,
        message: "Post created successfully via streaming",
      },
      { status: 201, headers: corsHeaders }
    );
  } catch (error) {
    console.error("❌ Error in streaming POST:", error);
    return NextResponse.json(
      { success: false, error: "Streaming processing failed" },
      { status: 500, headers: corsHeaders }
    );
  }
}

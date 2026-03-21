import mongoose from "mongoose";
import dbConnect from "@/lib/mongodb";
import Post from "@/server/models/Post";
import type { BlogPost } from "@/types/blog";

/** Plain JSON-serializable docs for Server → Client props. */
function serialize<T>(doc: T): T {
  return JSON.parse(JSON.stringify(doc));
}

export async function getAllPostsSerialized(): Promise<BlogPost[]> {
  await dbConnect();
  const posts = await Post.find({}).lean();
  return serialize(posts) as unknown as BlogPost[];
}

export async function getPostBySlugSerialized(slug: string): Promise<BlogPost | null> {
  await dbConnect();
  const post = await Post.findOne({ slug }).lean();
  if (!post) return null;
  return serialize(post) as unknown as BlogPost;
}

export async function getRelatedPostsSerialized(
  category: string,
  excludeId: string,
  limit = 2
): Promise<BlogPost[]> {
  await dbConnect();
  const exclude = mongoose.Types.ObjectId.isValid(excludeId)
    ? new mongoose.Types.ObjectId(excludeId)
    : excludeId;
  const posts = await Post.find({
    category,
    _id: { $ne: exclude },
  })
    .limit(limit)
    .lean();
  return serialize(posts) as unknown as BlogPost[];
}

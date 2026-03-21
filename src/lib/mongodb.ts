import dns from "node:dns";
import mongoose from "mongoose";

const rawMongoUrl = process.env.MONGODB_URL;
if (!rawMongoUrl) {
  throw new Error("Please define the MONGODB_URL environment variable");
}
/** Narrowed for TypeScript (closure-safe). */
const uri: string = rawMongoUrl;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectOptions = {
  serverSelectionTimeoutMS: 15_000,
  connectTimeoutMS: 15_000,
  socketTimeoutMS: 45_000,
  maxPoolSize: 10,
  /** Prefer IPv4; avoids some Windows / dual-stack routing issues to Atlas */
  family: 4 as const,
};

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    // Node on some networks fails SRV lookups for mongodb+srv:// (querySrv ECONNREFUSED).
    // Set resolvers right before connect so they apply to this connection attempt.
    if (uri.startsWith("mongodb+srv")) {
      try {
        dns.setServers(["8.8.8.8", "1.1.1.1"]);
      } catch {
        /* ignore */
      }
    }

    cached.promise = mongoose
      .connect(uri, connectOptions)
      .then((m) => m)
      .catch((err) => {
        cached.promise = null;
        cached.conn = null;
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;

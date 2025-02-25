import { createPost, deletePost, editPost, getBulkPost, getPost, getUserPosts } from "../handlers/postHandler";
import { verifyToken } from "../middlewares/verifyToken";
import { Hono } from "hono";

export const postHandler = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

postHandler.post("/", verifyToken, ...createPost);

postHandler.put("/", verifyToken, ...editPost);

postHandler.get("/bulk", ...getBulkPost);

postHandler.get("/user-blogs", verifyToken, ...getUserPosts);

postHandler.get("/:id", ...getPost);

postHandler.delete("/:id", verifyToken, ...deletePost);

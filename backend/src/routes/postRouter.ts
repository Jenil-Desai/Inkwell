import { createPost, editPost, getBulkPost, getPost } from "../handlers/postHandler";
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

postHandler.use("/*", verifyToken);

postHandler.post("/", ...createPost);

postHandler.put("/", ...editPost);

postHandler.get("/:id", ...getPost);

postHandler.get("/bulk", ...getBulkPost);

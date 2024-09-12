import { verify } from "hono/jwt";
import { createMiddleware } from "hono/factory";

export const verifyToken = createMiddleware(async (c, next) => {
  const token = c.req.header("Authorization");
  if (!token) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }

  const cleanToken = token.split(" ")[1];

  const payload = await verify(cleanToken, c.env.JWT_SECRET);
  if (!payload.id) {
    c.status(403);
    return c.json({ error: "Invalid User" });
  }
  c.set("userId", payload.id);
  await next();
});

import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{ Bindings: { DATABASE_URL: string; JWT_SECRET: string } }>();

app.post("/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  return c.text("New User");
});

app.post("/signin", (c) => {
  return c.text("Login User");
});

export default app;

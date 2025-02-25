import { createBlogInput, editBlogInput } from "@jenil-desai/medium-common";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { createFactory } from "hono/factory";

const factory = createFactory();

export const createPost = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    c.json({ error: "Invalid Input" });
  }

  const userId = c.get("userId");

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
      published: body.published,
    },
  });

  return c.json({ id: post.id });
});

export const editPost = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = editBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    c.json({ error: "Invalid Input" });
  }

  const userId = c.get("userId");

  prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });

  return c.text("updated post");
});

export const getPost = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const id = c.req.param("id");

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return c.json(post);
});

export const getBulkPost = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const posts = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    where: {
      published: true,
    },
  });

  return c.json({ posts });
});

export const getUserPosts = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    where: {
      authorId: userId,
    },
  });

  return c.json({ posts });
});

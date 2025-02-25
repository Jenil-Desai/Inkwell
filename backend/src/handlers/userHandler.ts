import { signInInput, signUpInput } from "@jenil-desai/medium-common";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { createFactory } from "hono/factory";
import { sign } from "hono/jwt";
import { hash, verify } from "hashless";

const factory = createFactory();

export const signupUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json<signUpInput>();

  const { success, data } = signUpInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Invalid Format" }, 411);
  }

  const existsUser = await prisma.user.findUnique({
    where: {
      email: data.username,
    },
  });

  if (existsUser) {
    return c.json({ error: "User with this email already exists" }, 400);
  }

  const hashedPassword = await hash(data.password);

  const newUser = await prisma.user.create({
    data: {
      email: data.username,
      name: data.name,
      password: hashedPassword,
    },
  });

  const token = await sign({ id: newUser.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3 }, c.env.JWT_SECRET);
  return c.json({ token }, 200);
});

export const signInUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json<signInInput>();

  const { success, data } = signInInput.safeParse(body);
  if (!success) {
    return c.json({ error: "Invalid Format" }, 411);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: data.username,
    },
  });

  if (!user) {
    return c.json({ error: "No user with this email id" }, 403);
  }

  const result = await verify(data.password, user.password);
  if (!result) {
    return c.json({ error: "Password Is Incorrect" }, 403);
  }

  const token = await sign({ id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3 }, c.env.JWT_SECRET);
  return c.json({ token }, 200);
});

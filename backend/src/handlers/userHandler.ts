import { signInInput, signUpInput } from "@jenil-desai/medium-common";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { createFactory } from "hono/factory";
import { sign } from "hono/jwt";

const factory = createFactory();

export const signupUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signUpInput.safeParse(body);
  if (!success) {
    c.status(411);
    c.json({ error: "Invalid Format" });
  }

  const ExistsUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (ExistsUser) {
    c.status(400);
    return c.json({ error: "User Already Exsist Using Provided Email" });
  }

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password,
    },
  });

  const token = await sign({ id: newUser.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3 }, c.env.JWT_SECRET);
  return c.json({ token });
});

export const singInUser = factory.createHandlers(async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const { success } = signInInput.safeParse(body);
  if (!success) {
    c.status(411);
    c.json({ error: "Invalid Format" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "User Creadtionals Are Incorrect" });
  }

  const token = await sign({ id: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 3 }, c.env.JWT_SECRET);
  return c.json({ token });
});

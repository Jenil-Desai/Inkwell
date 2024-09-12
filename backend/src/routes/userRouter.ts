import { Hono } from "hono";
import { signupUser, singInUser } from "../handlers/userHandler";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", ...signupUser);

userRouter.post("/signin", ...singInUser);

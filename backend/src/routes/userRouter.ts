import { Hono } from "hono";
import { signupUser, signInUser, userDetail, editUser } from "../handlers/userHandler";
import { verifyToken } from "../middlewares/verifyToken";

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

userRouter.post("/signin", ...signInUser);

userRouter.get("/", verifyToken, ...userDetail);

userRouter.put("/", verifyToken, ...editUser);

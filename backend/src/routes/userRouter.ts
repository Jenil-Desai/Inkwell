import { Hono } from "hono";
import { signupUser, singInUser } from "../handlers/userHandler";

const app = new Hono<{ Bindings: { DATABASE_URL: string; JWT_SECRET: string } }>();

app.post("/signup", ...signupUser);

app.post("/signin", ...singInUser);

export default app;

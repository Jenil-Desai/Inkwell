import { Hono } from "hono";

import { userRouter } from "./routes/userRouter";
import { postHandler } from "./routes/postRouter";

const app = new Hono();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", postHandler);

export default app;

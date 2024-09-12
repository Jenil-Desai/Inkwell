import { Hono } from "hono";

import userRoute from "./routes/userRouter";
import blogRoute from "./routes/blogRouter";

const app = new Hono();

app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);

export default app;

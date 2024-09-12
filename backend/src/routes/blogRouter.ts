import { Hono } from "hono";

const app = new Hono();

app.post("/", (c) => {
  return c.text("New Blog");
});

app.put("/", (c) => {
  return c.text("Edit Blog");
});

app.get("/:id", (c) => {
  return c.text("Get Specfifc Blog");
});

export default app;

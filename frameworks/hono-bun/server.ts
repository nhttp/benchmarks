import { Hono } from "hono";

const app = new Hono()
  .get("/", (c) => c.text("home"))
  .get("/blog/:id", (c) => {
    return c.text(`${c.req.param("id")} ${c.req.query("title")}`);
  })
  .get("/api/user", (c) => {
    c.header("x-powered-by", "bench");
    return c.json({ user: "john" });
  });

export default {
  fetch: app.fetch,
  port: 8000,
};

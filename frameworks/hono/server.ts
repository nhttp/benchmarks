import { Hono } from "https://deno.land/x/hono/mod.ts";

const app = new Hono()
  .get("/", (c) => c.text("home"))
  .get(
    "/blog/:id",
    (c) => c.text(`${c.req.param("id")} ${c.req.query("title")}`),
  )
  .get("/api/user", (c) => {
    c.header("x-powered-by", "bench");
    return c.json({ user: "john" });
  });

await Deno.serve(app.fetch, { port: 8000 });

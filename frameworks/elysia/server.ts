import { Elysia } from "elysia";

new Elysia()
  .get("/", () => "home")
  .get("/blog/:id", async (ctx) => {
    return await Promise.resolve(`${ctx.params.id} ${ctx.query.title}`)
  })
  .get("/api/user", (ctx) => {
    ctx.set.headers["x-powered-by"] = "bench";
    return { user: "john" };
  })
  .listen(8000);

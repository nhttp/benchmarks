import { Elysia } from "elysia";

new Elysia()
  .get("/", () => "home")
  .get("/blog/:id", (ctx) => `${ctx.params.id} ${ctx.query.title}`)
  .get("/api/user", (ctx) => {
    ctx.set.headers["x-powered-by"] = "bench";
    return { user: "john" };
  })
  .listen(8000);

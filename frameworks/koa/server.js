import Koa from "koa";
import Router from "@koa/router";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.body = "home";
  })
  .get("/blog/:id", async (ctx) => {
    ctx.body = await Promise.resolve(`${ctx.params.id} ${ctx.query.title}`);
  })
  .get("/api/user", (ctx) => {
    ctx.set("x-powered-by", "bench");
    ctx.body = { user: "john" };
  });

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8000);

import {
  Application,
  Router,
} from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
  .get("/", (ctx) => {
    ctx.response.body = "home";
  })
  .get("/blog/:id", (ctx) => {
    ctx.response.body = `${ctx.params.id} ${
      ctx.request.url.searchParams.get("title")
    }`;
  })
  .get("/api/user", (ctx) => {
    ctx.response.headers.set("x-powered-by", "bench");
    ctx.response.body = { user: "john" };
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

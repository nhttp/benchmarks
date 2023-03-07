import Bao from "baojs";

const app = new Bao();
app.get("/", (ctx) => ctx.sendText("home"));
app.get("/blog/:id", (ctx) => {
  const id = ctx.params.id;
  const title = ctx.url.searchParams.get("title");
  return ctx.sendText(`${id} ${title}`);
});
app.get("/api/user", (ctx) => {
  return ctx.sendJson({ user: "john" }, {
    headers: { "x-powered-by": "bench" },
  });
});
app.listen({ port: 8000 });

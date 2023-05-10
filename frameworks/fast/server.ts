import fast from "https://deno.land/x/fast/mod.ts";

const app = fast()
  .get("/", () => "home")
  .get("/blog/:id", (ctx) => {
    const title = new URL(ctx.request.url).searchParams.get("title");
    return `${ctx.params.id} ${title}`;
  })
  .get("/api/user", () => {
    const headers = { "x-powered-by": "bench" };
    return Response.json({ user: "john" }, { headers });
  });

await Deno.serve({ port: 8000 }, app.handle);

import fast from "https://deno.land/x/fast/mod.ts";

const app = fast()
  .get("/", () => "home")
  .get("/blog/:id", async (ctx) => {
    const title = new URL(ctx.request.url).searchParams.get("title");
    return await Promise.resolve(`${ctx.params.id} ${title}`);
  })
  .get("/api/user", () => {
    const headers = { "x-powered-by": "bench" };
    return Response.json({ user: "john" }, { headers });
  });

await Deno.serve(app.handle, { port: 8000 });

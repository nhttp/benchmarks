import fastro, { HttpRequest, HttpResponse } from "https://deno.land/x/fastro/server/mod.ts";

fastro()
  .get("/", () => "home")
  .get("/blog/:id", async (req: HttpRequest, res: HttpResponse) => {
    const id = req.match?.pathname.groups.id;
    const title = new URL(req.url).searchParams.get("title");
    return res.send(await Promise.resolve(`${id} ${title}`));
  })
  .get("/api/user", (_req: HttpRequest, res: HttpResponse) => {
    res.headers(new Headers({ "x-powered-by": "bench" }));
    return res.json({ user: "john" });
  })
  .serve({ port: 8000 });

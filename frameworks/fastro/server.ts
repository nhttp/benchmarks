import fastro, { HttpRequest } from "https://deno.land/x/fastro/server/mod.ts";

fastro()
  .get("/", () => "home")
  .get("/blog/:id", (req: HttpRequest) => {
    const id = req.match?.pathname.groups.id;
    const title = new URL(req.url).searchParams.get("title");
    return `${id} ${title}`;
  })
  .get("/api/user", (_req, res) => {
    res.headers(new Headers({ "x-powered-by": "bench" }));
    return res.json({ user: "john" });
  })
  .serve({ port: 8000 });

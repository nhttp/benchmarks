import fastro, {
  HttpRequest,
  HttpResponse,
} from "https://deno.land/x/fastro/server/mod.ts";

fastro()
  .get("/", () => "home")
  .get("/blog/:id", (req: HttpRequest) => {
    return `${req.params("id")} ${req.query("title")}`;
  })
  .get("/api/user", (_req: HttpRequest, res: HttpResponse) => {
    res.headers(new Headers({ "x-powered-by": "bench" }));
    return res.json({ user: "john" });
  })
  .serve({ port: 8000 });

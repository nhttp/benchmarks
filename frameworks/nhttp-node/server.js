import { nhttp } from "nhttp-land";

nhttp()
  .get("/", () => "home")
  .get("/blog/:id", (rev) => `${rev.params.id} ${rev.query.title}`)
  .get("/api/user", () => {
    return Response.json({ user: "john" }, {
      headers: { "x-powered-by": "bench" },
    });
  })
  .listen(8000);

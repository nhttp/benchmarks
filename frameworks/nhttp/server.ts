import { nhttp } from "https://raw.githubusercontent.com/nhttp/nhttp/next-1.2.19/mod.ts";

nhttp({ flash: true })
  .get("/", () => "home")
  .get("/blog/:id", (rev) => `${rev.params.id} ${rev.query.title}`)
  .get("/api/user", (rev) => {
    rev.response.setHeader("x-powered-by", "bench");
    return { user: "john" };
  })
  .listen(8000);



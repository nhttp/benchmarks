import { nhttp } from "https://deno.land/x/nhttp/mod.ts";

const app = nhttp()
  .get("/", () => "home")
  .get("/blog/:id", (rev) => `${rev.params.id} ${rev.query.title}`)
  .get("/api/user", (rev) => {
    rev.response.setHeader("x-powered-by", "bench");
    return { user: "john" };
  });
  
 await Deno.serve({ port: 8000 }, app.handle); 


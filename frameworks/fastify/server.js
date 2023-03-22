import fastify from "fastify";

fastify()
  .get("/", (_, reply) => {
    reply.send("home");
  })
  .get("/blog/:id", async (req, reply) => {
    reply.send(await Promise.resolve(`${req.params.id} ${req.query.title}`));
  })
  .get("/api/user", (_, reply) => {
    reply.header("x-powered-by", "bench");
    reply.send({ user: "john" });
  })
  .listen({ port: 8000 });

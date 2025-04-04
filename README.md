## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Fri Apr 04 2025, 12:54:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58002|65304|55535|53168|
|[fast](https://github.com/danteissaias/fast)|54921|64233|46793|53736|
|[hono](https://github.com/honojs/hono)|53570|57761|52255|50695|
|[oak](https://github.com/oakserver/oak)|28163|30196|27266|27028|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39138|44710|38106|34599|
|[fastify](https://github.com/fastify/fastify)|24453|24125|25359|23876|
|[koa](https://github.com/koajs/koa)|16780|17299|15971|17071|
|[express](https://github.com/expressjs/express)|6435|6571|6264|6470|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75341|86432|75309|64282|
|[nhttp](https://github.com/nhttp/nhttp)|66161|84262|55702|58518|
|[hono](https://github.com/honojs/hono)|62349|71024|57278|58745|
|[baojs](https://github.com/mattreid1/baojs)|46287|51669|42607|44585|
  



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)


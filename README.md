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
Created At : Fri Jul 19 2024, 12:42:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46630|50398|45311|44180|
|[hono](https://github.com/honojs/hono)|46127|49608|46052|42720|
|[fast](https://github.com/danteissaias/fast)|45905|49931|43808|43976|
|[oak](https://github.com/oakserver/oak)|26091|27059|25502|25711|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23966|30183|22185|19530|
|[fastify](https://github.com/fastify/fastify)|16788|17310|16666|16388|
|[koa](https://github.com/koajs/koa)|14361|15447|13345|14290|
|[express](https://github.com/expressjs/express)|6283|6416|6039|6394|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71474|83967|78004|52450|
|[hono](https://github.com/honojs/hono)|65537|79695|55295|61620|
|[nhttp](https://github.com/nhttp/nhttp)|57947|80822|48662|44358|
|[baojs](https://github.com/mattreid1/baojs)|36872|43737|32079|34801|
  



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


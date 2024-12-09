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
Created At : Mon Dec 09 2024, 12:56:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48233|52344|47821|44534|
|[hono](https://github.com/honojs/hono)|47644|50936|48436|43559|
|[fast](https://github.com/danteissaias/fast)|47145|51882|44288|45265|
|[oak](https://github.com/oakserver/oak)|25962|26805|25452|25630|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24356|30686|22438|19945|
|[fastify](https://github.com/fastify/fastify)|16479|16695|16189|16554|
|[koa](https://github.com/koajs/koa)|14080|15180|13061|13999|
|[express](https://github.com/expressjs/express)|6276|6474|5898|6455|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73795|78579|81106|61700|
|[nhttp](https://github.com/nhttp/nhttp)|61638|81310|50687|52918|
|[hono](https://github.com/honojs/hono)|60185|74861|52208|53485|
|[baojs](https://github.com/mattreid1/baojs)|33611|39909|32151|28774|
  



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


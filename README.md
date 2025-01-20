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
Created At : Mon Jan 20 2025, 12:50:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56067|63707|55117|49378|
|[hono](https://github.com/honojs/hono)|53827|57937|54354|49189|
|[fast](https://github.com/danteissaias/fast)|52831|62229|48778|47487|
|[oak](https://github.com/oakserver/oak)|27694|28008|27988|27087|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36988|43078|36137|31749|
|[fastify](https://github.com/fastify/fastify)|24365|27383|23715|21996|
|[koa](https://github.com/koajs/koa)|16588|17734|15383|16648|
|[express](https://github.com/expressjs/express)|6700|6998|6258|6844|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73847|82371|76528|62642|
|[nhttp](https://github.com/nhttp/nhttp)|66961|86942|55661|58279|
|[hono](https://github.com/honojs/hono)|60976|67565|57425|57938|
|[baojs](https://github.com/mattreid1/baojs)|47473|50762|44546|47112|
  



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


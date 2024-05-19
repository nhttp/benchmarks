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
Created At : Sun May 19 2024, 12:42:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48057|50683|47267|46220|
|[fast](https://github.com/danteissaias/fast)|47539|51200|44055|47363|
|[hono](https://github.com/honojs/hono)|47217|50405|47764|43483|
|[oak](https://github.com/oakserver/oak)|27594|29017|27917|25849|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24841|32318|22363|19842|
|[fastify](https://github.com/fastify/fastify)|16592|17071|16340|16365|
|[koa](https://github.com/koajs/koa)|14448|15278|13769|14297|
|[express](https://github.com/expressjs/express)|6379|6533|6022|6581|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73955|79533|76621|65710|
|[nhttp](https://github.com/nhttp/nhttp)|61956|83298|52674|49896|
|[hono](https://github.com/honojs/hono)|55143|69286|55294|40849|
|[baojs](https://github.com/mattreid1/baojs)|35991|39660|36202|32112|
  



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


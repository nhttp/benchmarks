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
Created At : Mon Nov 11 2024, 12:50:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49131|53228|48562|45602|
|[hono](https://github.com/honojs/hono)|47773|50469|48791|44060|
|[fast](https://github.com/danteissaias/fast)|47146|50017|44766|46654|
|[oak](https://github.com/oakserver/oak)|26517|27518|26020|26012|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24532|31498|22276|19821|
|[fastify](https://github.com/fastify/fastify)|16808|17345|16744|16335|
|[koa](https://github.com/koajs/koa)|14168|14846|13429|14228|
|[express](https://github.com/expressjs/express)|6376|6572|6003|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70661|85417|67880|58685|
|[nhttp](https://github.com/nhttp/nhttp)|61872|84570|49397|51650|
|[hono](https://github.com/honojs/hono)|44952|54028|37100|43728|
|[baojs](https://github.com/mattreid1/baojs)|38002|44797|36200|33010|
  



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


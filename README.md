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
Created At : Sat Nov 30 2024, 12:52:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48060|51928|47939|44312|
|[hono](https://github.com/honojs/hono)|47882|51535|48467|43645|
|[fast](https://github.com/danteissaias/fast)|47878|52773|44736|46124|
|[oak](https://github.com/oakserver/oak)|26219|27385|25822|25449|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24769|30578|23042|20686|
|[fastify](https://github.com/fastify/fastify)|17279|17643|17166|17029|
|[koa](https://github.com/koajs/koa)|14314|15293|13191|14458|
|[express](https://github.com/expressjs/express)|6395|6553|5987|6645|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70255|82098|70477|58189|
|[nhttp](https://github.com/nhttp/nhttp)|62308|88449|47456|51020|
|[hono](https://github.com/honojs/hono)|57028|70282|48958|51843|
|[baojs](https://github.com/mattreid1/baojs)|32538|35870|33037|28707|
  



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


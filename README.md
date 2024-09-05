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
Created At : Thu Sep 05 2024, 12:45:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48483|53536|47643|44271|
|[hono](https://github.com/honojs/hono)|48173|51202|49184|44132|
|[fast](https://github.com/danteissaias/fast)|47533|52232|45715|44652|
|[oak](https://github.com/oakserver/oak)|25946|27084|25456|25297|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25010|31335|22750|20945|
|[fastify](https://github.com/fastify/fastify)|16807|17096|16935|16389|
|[koa](https://github.com/koajs/koa)|14287|15101|13388|14372|
|[express](https://github.com/expressjs/express)|6377|6504|6105|6523|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72117|79562|81296|55492|
|[hono](https://github.com/honojs/hono)|58913|70347|58926|47466|
|[nhttp](https://github.com/nhttp/nhttp)|57602|78537|45791|48478|
|[baojs](https://github.com/mattreid1/baojs)|37493|41199|33028|38251|
  



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


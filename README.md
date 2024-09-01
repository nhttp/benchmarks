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
Created At : Sun Sep 01 2024, 12:54:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48281|51897|47735|45212|
|[hono](https://github.com/honojs/hono)|47073|50188|47181|43851|
|[fast](https://github.com/danteissaias/fast)|46765|50611|43098|46585|
|[oak](https://github.com/oakserver/oak)|25984|26986|25494|25472|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24544|31048|22331|20254|
|[fastify](https://github.com/fastify/fastify)|16474|16664|16516|16242|
|[koa](https://github.com/koajs/koa)|13965|14718|13060|14116|
|[express](https://github.com/expressjs/express)|6062|6170|5719|6296|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70561|80189|74035|57459|
|[nhttp](https://github.com/nhttp/nhttp)|63665|79882|53797|57317|
|[hono](https://github.com/honojs/hono)|62320|73387|55567|58006|
|[baojs](https://github.com/mattreid1/baojs)|36564|43529|34811|31351|
  



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


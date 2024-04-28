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
Created At : Sun Apr 28 2024, 12:41:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48474|52097|47102|46224|
|[fast](https://github.com/danteissaias/fast)|47832|51500|44296|47701|
|[hono](https://github.com/honojs/hono)|47434|50333|48094|43874|
|[oak](https://github.com/oakserver/oak)|28388|30182|28341|26642|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24721|32039|22157|19968|
|[fastify](https://github.com/fastify/fastify)|16490|17023|16132|16315|
|[koa](https://github.com/koajs/koa)|14425|15445|13660|14170|
|[express](https://github.com/expressjs/express)|6449|6530|6185|6631|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74103|82248|73161|66901|
|[hono](https://github.com/honojs/hono)|60797|69973|61479|50939|
|[nhttp](https://github.com/nhttp/nhttp)|59729|81701|49256|48230|
|[baojs](https://github.com/mattreid1/baojs)|38424|45998|35239|34036|
  



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


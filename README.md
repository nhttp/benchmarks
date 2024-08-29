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
Created At : Thu Aug 29 2024, 12:44:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48263|52367|48404|44019|
|[nhttp](https://github.com/nhttp/nhttp)|48246|52019|48181|44539|
|[fast](https://github.com/danteissaias/fast)|48085|52391|44541|47323|
|[oak](https://github.com/oakserver/oak)|26178|27039|25605|25889|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23995|29470|22225|20289|
|[fastify](https://github.com/fastify/fastify)|16220|16722|16137|15801|
|[koa](https://github.com/koajs/koa)|14053|15023|13263|13872|
|[express](https://github.com/expressjs/express)|6291|6452|5911|6510|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69578|81855|75114|51766|
|[nhttp](https://github.com/nhttp/nhttp)|54889|79606|41485|43575|
|[hono](https://github.com/honojs/hono)|53253|57694|52085|49981|
|[baojs](https://github.com/mattreid1/baojs)|31925|35228|33123|27425|
  



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


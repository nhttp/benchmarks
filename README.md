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
Created At : Fri Jul 14 2023, 12:52:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47782|51108|46626|45611|
|[hono](https://github.com/honojs/hono)|42315|51007|49394|26543|
|[oak](https://github.com/oakserver/oak)|14541|15095|15001|13526|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31004|32994|31141|28878|
|[fastify](https://github.com/fastify/fastify)|24713|25266|24566|24307|
|[koa](https://github.com/koajs/koa)|15894|16437|15066|16179|
|[express](https://github.com/expressjs/express)|5450|5711|4856|5783|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|54481|53933|54948|54563|
|[elysia](https://github.com/elysiajs/elysia)|54230|51256|54399|57035|
|[nhttp](https://github.com/nhttp/nhttp)|53515|53924|54456|52165|
|[baojs](https://github.com/mattreid1/baojs)|41169|47374|31228|44904|
  



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


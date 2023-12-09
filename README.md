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
Created At : Sat Dec 09 2023, 12:37:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47032|51002|45948|44146|
|[fast](https://github.com/danteissaias/fast)|45867|49751|44077|43773|
|[hono](https://github.com/honojs/hono)|44797|46581|45877|41932|
|[fastro](https://github.com/fastrodev/fastro)|24454|50274|11744|11345|
|[oak](https://github.com/oakserver/oak)|20765|22010|20596|19689|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26862|32246|24936|23404|
|[fastify](https://github.com/fastify/fastify)|15564|16101|15515|15075|
|[koa](https://github.com/koajs/koa)|14308|14845|13692|14386|
|[express](https://github.com/expressjs/express)|6448|6554|6162|6628|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72507|81862|79616|56043|
|[nhttp](https://github.com/nhttp/nhttp)|67578|84732|55803|62198|
|[hono](https://github.com/honojs/hono)|58512|74169|49397|51970|
|[baojs](https://github.com/mattreid1/baojs)|34891|41111|34661|28902|
  



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


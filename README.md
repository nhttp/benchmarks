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
Created At : Tue Jul 16 2024, 12:42:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46527|49811|45960|43811|
|[hono](https://github.com/honojs/hono)|46435|49491|47387|42428|
|[fast](https://github.com/danteissaias/fast)|45754|50244|42848|44171|
|[oak](https://github.com/oakserver/oak)|25860|26881|25238|25460|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24424|30178|22463|20630|
|[fastify](https://github.com/fastify/fastify)|16980|17438|16968|16533|
|[koa](https://github.com/koajs/koa)|14597|15322|13769|14700|
|[express](https://github.com/expressjs/express)|6366|6495|6177|6425|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70739|83789|74754|53673|
|[hono](https://github.com/honojs/hono)|63993|71153|61093|59734|
|[nhttp](https://github.com/nhttp/nhttp)|63954|85915|57556|48391|
|[baojs](https://github.com/mattreid1/baojs)|37711|42537|38627|31968|
  



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


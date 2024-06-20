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
Created At : Thu Jun 20 2024, 12:40:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48657|52970|47984|45016|
|[hono](https://github.com/honojs/hono)|48371|51457|48825|44831|
|[fast](https://github.com/danteissaias/fast)|48208|52096|46148|46380|
|[oak](https://github.com/oakserver/oak)|27182|28038|26642|26867|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24230|29386|22729|20575|
|[fastify](https://github.com/fastify/fastify)|16900|17308|16830|16563|
|[koa](https://github.com/koajs/koa)|14342|15105|13563|14358|
|[express](https://github.com/expressjs/express)|6356|6500|6064|6504|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73781|87924|75723|57696|
|[nhttp](https://github.com/nhttp/nhttp)|61922|87034|52135|46598|
|[hono](https://github.com/honojs/hono)|55845|69644|52284|45608|
|[baojs](https://github.com/mattreid1/baojs)|36681|43449|31691|34902|
  



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


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
Created At : Sat Dec 07 2024, 12:54:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48283|51553|48501|44795|
|[fast](https://github.com/danteissaias/fast)|48231|53234|44427|47033|
|[hono](https://github.com/honojs/hono)|47775|51095|48348|43883|
|[oak](https://github.com/oakserver/oak)|25854|26865|25346|25352|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24300|29176|22545|21179|
|[fastify](https://github.com/fastify/fastify)|17325|17786|17301|16887|
|[koa](https://github.com/koajs/koa)|14063|14819|13072|14297|
|[express](https://github.com/expressjs/express)|6368|6595|5973|6537|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76686|87218|75597|67242|
|[nhttp](https://github.com/nhttp/nhttp)|57944|83692|45294|44846|
|[hono](https://github.com/honojs/hono)|56928|75924|43680|51180|
|[baojs](https://github.com/mattreid1/baojs)|34405|39450|34029|29735|
  



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


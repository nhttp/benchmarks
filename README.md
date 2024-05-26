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
Created At : Sun May 26 2024, 12:42:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48236|51577|46397|46734|
|[nhttp](https://github.com/nhttp/nhttp)|48209|52449|46811|45367|
|[hono](https://github.com/honojs/hono)|47886|50911|48724|44024|
|[oak](https://github.com/oakserver/oak)|27758|29225|27840|26209|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25305|32414|22801|20699|
|[fastify](https://github.com/fastify/fastify)|16738|17328|16537|16349|
|[koa](https://github.com/koajs/koa)|14689|15061|14152|14853|
|[express](https://github.com/expressjs/express)|6401|6550|6172|6480|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73209|85385|74209|60034|
|[hono](https://github.com/honojs/hono)|65358|78679|67017|50377|
|[nhttp](https://github.com/nhttp/nhttp)|64947|85944|53554|55342|
|[baojs](https://github.com/mattreid1/baojs)|39827|48922|36213|34347|
  



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


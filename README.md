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
Created At : Mon Aug 26 2024, 12:44:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51631|58213|50225|46456|
|[hono](https://github.com/honojs/hono)|49512|54462|49131|44943|
|[fast](https://github.com/danteissaias/fast)|45680|51235|43191|42614|
|[oak](https://github.com/oakserver/oak)|27089|28071|26671|26524|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25132|31646|22744|21005|
|[fastify](https://github.com/fastify/fastify)|16895|17425|16570|16690|
|[koa](https://github.com/koajs/koa)|14364|15343|13302|14447|
|[express](https://github.com/expressjs/express)|6286|6462|5944|6453|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69926|79022|73927|56829|
|[hono](https://github.com/honojs/hono)|60411|74522|56370|50340|
|[nhttp](https://github.com/nhttp/nhttp)|54939|72725|46779|45314|
|[baojs](https://github.com/mattreid1/baojs)|33386|36769|33149|30239|
  



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


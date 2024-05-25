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
Created At : Sat May 25 2024, 12:38:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48662|51775|49213|44998|
|[nhttp](https://github.com/nhttp/nhttp)|47693|51021|46776|45283|
|[fast](https://github.com/danteissaias/fast)|47448|50753|45649|45941|
|[oak](https://github.com/oakserver/oak)|27486|29154|27645|25658|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23645|29792|21895|19247|
|[fastify](https://github.com/fastify/fastify)|15788|15836|15576|15951|
|[koa](https://github.com/koajs/koa)|14271|15170|13422|14220|
|[express](https://github.com/expressjs/express)|6314|6488|6044|6409|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72213|83918|75778|56944|
|[hono](https://github.com/honojs/hono)|60210|68739|58029|53861|
|[nhttp](https://github.com/nhttp/nhttp)|58574|85118|46735|43868|
|[baojs](https://github.com/mattreid1/baojs)|35375|39467|35900|30757|
  



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


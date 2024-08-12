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
Created At : Mon Aug 12 2024, 12:45:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47340|50807|46661|44551|
|[fast](https://github.com/danteissaias/fast)|47005|50970|43524|46521|
|[hono](https://github.com/honojs/hono)|46398|49402|47021|42771|
|[oak](https://github.com/oakserver/oak)|25995|27016|25314|25656|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24855|30710|22883|20971|
|[fastify](https://github.com/fastify/fastify)|17317|17774|17135|17043|
|[koa](https://github.com/koajs/koa)|14554|15774|13443|14446|
|[express](https://github.com/expressjs/express)|6402|6570|6092|6544|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72552|82891|81691|53073|
|[nhttp](https://github.com/nhttp/nhttp)|60956|83215|50503|49151|
|[hono](https://github.com/honojs/hono)|59957|72829|55488|51555|
|[baojs](https://github.com/mattreid1/baojs)|35805|40682|35366|31367|
  



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


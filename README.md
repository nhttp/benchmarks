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
Created At : Wed Dec 11 2024, 12:55:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47678|52356|44601|46077|
|[hono](https://github.com/honojs/hono)|47537|50935|48749|42927|
|[nhttp](https://github.com/nhttp/nhttp)|47428|51017|46911|44357|
|[oak](https://github.com/oakserver/oak)|26252|27394|25800|25561|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24477|30374|22592|20464|
|[fastify](https://github.com/fastify/fastify)|16873|17378|16644|16597|
|[koa](https://github.com/koajs/koa)|14262|15026|13293|14468|
|[express](https://github.com/expressjs/express)|6387|6563|5934|6663|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77061|78467|81430|71287|
|[hono](https://github.com/honojs/hono)|59752|71207|52894|55154|
|[nhttp](https://github.com/nhttp/nhttp)|57579|81201|43586|47951|
|[baojs](https://github.com/mattreid1/baojs)|36353|45150|33642|30267|
  



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


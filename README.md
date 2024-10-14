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
Created At : Mon Oct 14 2024, 12:51:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48748|52283|47850|46112|
|[hono](https://github.com/honojs/hono)|48019|50560|49192|44306|
|[fast](https://github.com/danteissaias/fast)|47400|51207|45108|45884|
|[oak](https://github.com/oakserver/oak)|25609|26364|25116|25348|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26059|34049|22965|21164|
|[fastify](https://github.com/fastify/fastify)|16937|17399|16852|16559|
|[koa](https://github.com/koajs/koa)|14195|15168|13075|14343|
|[express](https://github.com/expressjs/express)|6356|6561|5944|6562|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74751|84455|74302|65497|
|[nhttp](https://github.com/nhttp/nhttp)|62877|82793|54130|51708|
|[hono](https://github.com/honojs/hono)|58925|74690|51920|50166|
|[baojs](https://github.com/mattreid1/baojs)|37606|46011|35675|31133|
  



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


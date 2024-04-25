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
Created At : Thu Apr 25 2024, 12:40:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47961|51712|46527|45644|
|[fast](https://github.com/danteissaias/fast)|47628|51340|45941|45604|
|[hono](https://github.com/honojs/hono)|30605|0|47578|44238|
|[oak](https://github.com/oakserver/oak)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|22998|28274|21332|19388|
|[fastify](https://github.com/fastify/fastify)|16154|16838|15853|15770|
|[koa](https://github.com/koajs/koa)|14241|14976|13486|14260|
|[express](https://github.com/expressjs/express)|6256|6320|6024|6423|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76226|84691|75166|68822|
|[hono](https://github.com/honojs/hono)|54948|63385|50798|50661|
|[nhttp](https://github.com/nhttp/nhttp)|54864|81012|45072|38509|
|[baojs](https://github.com/mattreid1/baojs)|35101|39285|30671|35348|
  



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


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
Created At : Sun Jun 08 2025, 1:10:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59407|69169|58635|50416|
|[hono](https://github.com/honojs/hono)|56932|60024|58791|51982|
|[fast](https://github.com/danteissaias/fast)|53026|63172|44992|50913|
|[oak](https://github.com/oakserver/oak)|28756|30022|27973|28272|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39155|43906|37166|36394|
|[fastify](https://github.com/fastify/fastify)|26293|26039|27791|25050|
|[koa](https://github.com/koajs/koa)|17251|18275|16798|16680|
|[express](https://github.com/expressjs/express)|6537|6643|6500|6467|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81512|82319|79972|82244|
|[nhttp](https://github.com/nhttp/nhttp)|71048|90015|60999|62131|
|[hono](https://github.com/honojs/hono)|66320|74006|63912|61043|
|[baojs](https://github.com/mattreid1/baojs)|49740|55735|45128|48356|
  



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


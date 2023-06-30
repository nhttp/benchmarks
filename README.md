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
Created At : Fri Jun 30 2023, 12:48:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56733|61010|54985|54205|
|[hono](https://github.com/honojs/hono)|55732|59638|55682|51875|
|[fastro](https://github.com/fastrodev/fastro)|44680|57836|39553|36651|
|[oak](https://github.com/oakserver/oak)|17576|18744|17357|16628|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28019|29217|27388|27452|
|[nhttp](https://github.com/nhttp/nhttp)|19436|19518|19162|19628|
|[koa](https://github.com/koajs/koa)|16393|17332|15225|16622|
|[express](https://github.com/expressjs/express)|6120|6324|5688|6347|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63699|61929|65923|63244|
|[hono](https://github.com/honojs/hono)|62752|60841|64039|63376|
|[elysia](https://github.com/elysiajs/elysia)|60856|59837|61676|61056|
|[baojs](https://github.com/mattreid1/baojs)|52928|60059|45076|53649|
  



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


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
Created At : Wed May 01 2024, 12:41:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48238|51910|46557|46247|
|[hono](https://github.com/honojs/hono)|47794|50921|48003|44459|
|[fast](https://github.com/danteissaias/fast)|47576|50409|44935|47384|
|[oak](https://github.com/oakserver/oak)|27670|29067|27841|26102|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24530|30857|22547|20185|
|[fastify](https://github.com/fastify/fastify)|16910|17430|16900|16400|
|[koa](https://github.com/koajs/koa)|14661|15339|13889|14754|
|[express](https://github.com/expressjs/express)|6477|6642|6209|6579|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78401|86123|80253|68826|
|[nhttp](https://github.com/nhttp/nhttp)|67003|83394|65688|51927|
|[hono](https://github.com/honojs/hono)|57244|70643|53831|47258|
|[baojs](https://github.com/mattreid1/baojs)|35882|41589|34858|31198|
  



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


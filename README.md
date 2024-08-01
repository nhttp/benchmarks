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
Created At : Thu Aug 01 2024, 12:47:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45621|50236|45132|41495|
|[fast](https://github.com/danteissaias/fast)|45335|48206|41586|46214|
|[hono](https://github.com/honojs/hono)|45069|48498|45306|41402|
|[oak](https://github.com/oakserver/oak)|25160|26175|24465|24840|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23969|30530|21880|19498|
|[fastify](https://github.com/fastify/fastify)|16827|17123|16788|16571|
|[koa](https://github.com/koajs/koa)|14388|15083|13563|14518|
|[express](https://github.com/expressjs/express)|6324|6384|6119|6470|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71090|81879|78866|52525|
|[nhttp](https://github.com/nhttp/nhttp)|59192|82636|43478|51462|
|[hono](https://github.com/honojs/hono)|59110|74453|47047|55829|
|[baojs](https://github.com/mattreid1/baojs)|36488|41169|34397|33898|
  



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


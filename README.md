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
Created At : Sun May 05 2024, 12:41:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48310|52011|45357|47563|
|[nhttp](https://github.com/nhttp/nhttp)|48073|50823|47573|45824|
|[hono](https://github.com/honojs/hono)|47586|51183|47586|43988|
|[oak](https://github.com/oakserver/oak)|27969|29451|28118|26337|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25485|32024|23112|21320|
|[fastify](https://github.com/fastify/fastify)|16515|16978|16283|16283|
|[koa](https://github.com/koajs/koa)|14680|15511|13766|14762|
|[express](https://github.com/expressjs/express)|6410|6536|6225|6468|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77734|84230|81666|67306|
|[hono](https://github.com/honojs/hono)|65564|73985|64550|58157|
|[nhttp](https://github.com/nhttp/nhttp)|63859|84015|58467|49095|
|[baojs](https://github.com/mattreid1/baojs)|39851|49173|36592|33788|
  



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


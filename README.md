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
Created At : Fri Jan 31 2025, 12:49:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58988|66260|59945|50758|
|[nhttp](https://github.com/nhttp/nhttp)|58795|65459|57768|53158|
|[fast](https://github.com/danteissaias/fast)|55647|67142|47297|52501|
|[oak](https://github.com/oakserver/oak)|27692|29283|26625|27167|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40557|46894|38216|36562|
|[fastify](https://github.com/fastify/fastify)|23909|25376|23439|22911|
|[koa](https://github.com/koajs/koa)|17356|18477|15901|17690|
|[express](https://github.com/expressjs/express)|6990|7254|6482|7235|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77948|89157|77364|67322|
|[nhttp](https://github.com/nhttp/nhttp)|70897|94324|58888|59478|
|[hono](https://github.com/honojs/hono)|63023|73842|56489|58739|
|[baojs](https://github.com/mattreid1/baojs)|49435|54390|46572|47343|
  



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


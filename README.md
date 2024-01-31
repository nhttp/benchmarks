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
Created At : Wed Jan 31 2024, 12:36:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47298|50879|44026|46989|
|[nhttp](https://github.com/nhttp/nhttp)|46967|50244|45954|44702|
|[hono](https://github.com/honojs/hono)|46237|48942|46576|43194|
|[oak](https://github.com/oakserver/oak)|26901|28230|27001|25472|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24450|30918|22494|19939|
|[fastify](https://github.com/fastify/fastify)|16666|17131|16420|16448|
|[koa](https://github.com/koajs/koa)|14413|15357|13540|14342|
|[express](https://github.com/expressjs/express)|6338|6539|6168|6306|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73283|80826|77455|61568|
|[nhttp](https://github.com/nhttp/nhttp)|59092|85691|51867|39718|
|[hono](https://github.com/honojs/hono)|56546|66105|54225|49309|
|[baojs](https://github.com/mattreid1/baojs)|32586|35608|32295|29856|
  



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


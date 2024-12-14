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
Created At : Sat Dec 14 2024, 12:53:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48094|52644|47228|44409|
|[hono](https://github.com/honojs/hono)|47904|51198|48206|44308|
|[fast](https://github.com/danteissaias/fast)|47271|50803|44826|46183|
|[oak](https://github.com/oakserver/oak)|26432|27380|25838|26077|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23711|29230|21741|20163|
|[fastify](https://github.com/fastify/fastify)|16776|17272|16662|16394|
|[koa](https://github.com/koajs/koa)|14166|14909|13285|14305|
|[express](https://github.com/expressjs/express)|6389|6634|6047|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70422|77293|77371|56602|
|[hono](https://github.com/honojs/hono)|60677|67685|55787|58558|
|[nhttp](https://github.com/nhttp/nhttp)|58259|77674|42619|54483|
|[baojs](https://github.com/mattreid1/baojs)|36219|43550|35231|29877|
  



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


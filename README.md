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
Created At : Sun May 11 2025, 1:04:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58946|66150|57511|53178|
|[hono](https://github.com/honojs/hono)|57394|65011|57782|49388|
|[fast](https://github.com/danteissaias/fast)|54587|64174|51045|48543|
|[oak](https://github.com/oakserver/oak)|28331|28483|28053|28456|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38732|45254|36410|34532|
|[fastify](https://github.com/fastify/fastify)|24998|24834|26562|23599|
|[koa](https://github.com/koajs/koa)|16942|16979|16981|16865|
|[express](https://github.com/expressjs/express)|6427|6551|6230|6500|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79466|75782|82977|79639|
|[nhttp](https://github.com/nhttp/nhttp)|70409|94936|59339|56953|
|[hono](https://github.com/honojs/hono)|67485|77143|63353|61960|
|[baojs](https://github.com/mattreid1/baojs)|49973|53714|48483|47722|
  



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


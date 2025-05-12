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
Created At : Mon May 12 2025, 1:02:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57953|61503|59177|53180|
|[hono](https://github.com/honojs/hono)|57712|63029|62131|47976|
|[fast](https://github.com/danteissaias/fast)|55562|66732|49639|50315|
|[oak](https://github.com/oakserver/oak)|28134|30180|27985|26236|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39254|46774|35395|35594|
|[fastify](https://github.com/fastify/fastify)|25126|25220|26845|23313|
|[koa](https://github.com/koajs/koa)|17194|17804|17151|16627|
|[express](https://github.com/expressjs/express)|6519|6531|6388|6639|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82959|85044|81317|82517|
|[nhttp](https://github.com/nhttp/nhttp)|70380|89414|60243|61482|
|[hono](https://github.com/honojs/hono)|67825|75814|62553|65107|
|[baojs](https://github.com/mattreid1/baojs)|48801|48909|50085|47409|
  



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


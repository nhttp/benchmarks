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
Created At : Sat Nov 18 2023, 12:37:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45484|48704|44841|42907|
|[fast](https://github.com/danteissaias/fast)|45169|47830|41074|46604|
|[hono](https://github.com/honojs/hono)|44211|47381|44652|40600|
|[fastro](https://github.com/fastrodev/fastro)|23152|47274|11162|11021|
|[oak](https://github.com/oakserver/oak)|20514|21567|20502|19474|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26146|31335|24221|22883|
|[fastify](https://github.com/fastify/fastify)|15873|16104|15954|15561|
|[koa](https://github.com/koajs/koa)|13857|14672|13053|13846|
|[express](https://github.com/expressjs/express)|6369|6598|6173|6335|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|69051|77487|68543|61124|
|[elysia](https://github.com/elysiajs/elysia)|68625|80557|75279|50038|
|[nhttp](https://github.com/nhttp/nhttp)|60021|78536|51643|49885|
|[baojs](https://github.com/mattreid1/baojs)|35984|41486|34485|31980|
  



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


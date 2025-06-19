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
Created At : Thu Jun 19 2025, 1:03:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58621|64981|56247|54634|
|[hono](https://github.com/honojs/hono)|57331|63386|57997|50609|
|[fast](https://github.com/danteissaias/fast)|51416|58496|43339|52414|
|[oak](https://github.com/oakserver/oak)|28398|30203|27696|27296|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39405|44507|39015|34693|
|[fastify](https://github.com/fastify/fastify)|25400|25507|26887|23807|
|[koa](https://github.com/koajs/koa)|16731|17573|16518|16101|
|[express](https://github.com/expressjs/express)|6434|6573|6211|6519|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81030|83317|78924|80848|
|[nhttp](https://github.com/nhttp/nhttp)|70451|93583|57287|60484|
|[hono](https://github.com/honojs/hono)|60192|69430|57484|53662|
|[baojs](https://github.com/mattreid1/baojs)|48271|53014|45208|46591|
  



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


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
Created At : Mon Apr 14 2025, 12:58:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57589|60778|61358|50630|
|[nhttp](https://github.com/nhttp/nhttp)|56648|62858|52341|54745|
|[fast](https://github.com/danteissaias/fast)|53788|61088|45766|54510|
|[oak](https://github.com/oakserver/oak)|28482|29317|28598|27532|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39504|46111|37567|34834|
|[fastify](https://github.com/fastify/fastify)|24739|25200|25699|23318|
|[koa](https://github.com/koajs/koa)|16824|17438|16071|16962|
|[express](https://github.com/expressjs/express)|6417|6494|6071|6686|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76282|84815|77466|66565|
|[nhttp](https://github.com/nhttp/nhttp)|67575|86910|59812|56003|
|[hono](https://github.com/honojs/hono)|61210|69901|57389|56339|
|[baojs](https://github.com/mattreid1/baojs)|45774|49622|41007|46694|
  



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


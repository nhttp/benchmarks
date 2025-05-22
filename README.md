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
Created At : Thu May 22 2025, 1:01:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57632|65412|55543|51941|
|[hono](https://github.com/honojs/hono)|56789|56550|61685|52132|
|[fast](https://github.com/danteissaias/fast)|54025|62653|46648|52774|
|[oak](https://github.com/oakserver/oak)|26867|27669|26990|25941|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37965|47552|33431|32913|
|[fastify](https://github.com/fastify/fastify)|23742|23611|24819|22795|
|[koa](https://github.com/koajs/koa)|16574|17094|16378|16249|
|[express](https://github.com/expressjs/express)|6208|6187|6091|6346|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80777|95713|72077|74542|
|[nhttp](https://github.com/nhttp/nhttp)|62463|83822|53462|50104|
|[hono](https://github.com/honojs/hono)|59113|71443|53374|52522|
|[baojs](https://github.com/mattreid1/baojs)|43802|49063|41062|41282|
  



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


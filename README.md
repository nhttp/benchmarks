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
Created At : Sun May 25 2025, 1:06:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59531|66703|58980|52911|
|[hono](https://github.com/honojs/hono)|56017|59653|58798|49601|
|[fast](https://github.com/danteissaias/fast)|55172|64134|49329|52052|
|[oak](https://github.com/oakserver/oak)|27191|27848|27344|26382|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39594|46187|39958|32637|
|[fastify](https://github.com/fastify/fastify)|24799|24468|25847|24083|
|[koa](https://github.com/koajs/koa)|16695|17212|16735|16137|
|[express](https://github.com/expressjs/express)|6457|6613|6141|6616|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82410|83983|80653|82594|
|[nhttp](https://github.com/nhttp/nhttp)|68213|89435|57875|57328|
|[hono](https://github.com/honojs/hono)|65075|73426|60658|61142|
|[baojs](https://github.com/mattreid1/baojs)|47928|52115|43206|48462|
  



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


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
Created At : Sat May 11 2024, 12:38:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48208|51238|48651|44735|
|[fast](https://github.com/danteissaias/fast)|48056|52062|45708|46399|
|[nhttp](https://github.com/nhttp/nhttp)|47295|50490|46308|45088|
|[oak](https://github.com/oakserver/oak)|28004|29588|28014|26410|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24345|30587|22396|20051|
|[fastify](https://github.com/fastify/fastify)|16979|17484|16790|16663|
|[koa](https://github.com/koajs/koa)|14074|14745|13186|14290|
|[express](https://github.com/expressjs/express)|6408|6524|6125|6574|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78003|84603|79946|69461|
|[nhttp](https://github.com/nhttp/nhttp)|63654|83796|57231|49936|
|[hono](https://github.com/honojs/hono)|60084|72205|58227|49819|
|[baojs](https://github.com/mattreid1/baojs)|38715|45062|35545|35537|
  



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


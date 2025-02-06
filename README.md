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
Created At : Thu Feb 06 2025, 12:50:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57910|61743|59035|52951|
|[fast](https://github.com/danteissaias/fast)|54953|65660|49167|50032|
|[hono](https://github.com/honojs/hono)|54839|57645|55351|51522|
|[oak](https://github.com/oakserver/oak)|28339|30096|27013|27908|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37365|43641|35777|32676|
|[fastify](https://github.com/fastify/fastify)|24360|24217|24378|24485|
|[koa](https://github.com/koajs/koa)|17499|18233|16627|17637|
|[express](https://github.com/expressjs/express)|7067|7329|6638|7233|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80621|93002|79189|69673|
|[nhttp](https://github.com/nhttp/nhttp)|69828|88395|57210|63878|
|[hono](https://github.com/honojs/hono)|68034|75370|65540|63192|
|[baojs](https://github.com/mattreid1/baojs)|51028|58329|45692|49062|
  



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


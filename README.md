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
Created At : Tue May 09 2023, 12:40:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57342|63020|56981|52026|
|[hono](https://github.com/honojs/hono)|54802|60410|55167|48830|
|[fast](https://github.com/danteissaias/fast)|53329|64740|42796|52452|
|[fastro](https://github.com/fastrodev/fastro)|46977|57194|48474|35263|
|[oak](https://github.com/oakserver/oak)|17733|18819|17767|16614|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39145|42859|39438|35139|
|[fastify](https://github.com/fastify/fastify)|30106|31864|29801|28652|
|[koa](https://github.com/koajs/koa)|18523|18723|17652|19195|
|[express](https://github.com/expressjs/express)|6381|6714|6136|6293|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|62269|62043|61824|62941|
|[elysia](https://github.com/elysiajs/elysia)|59962|60734|60675|58477|
|[nhttp](https://github.com/nhttp/nhttp)|58905|56627|59326|60761|
|[baojs](https://github.com/mattreid1/baojs)|55709|61312|58153|47661|
  



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


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
Created At : Tue Jun 13 2023, 12:50:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58393|64253|56678|54248|
|[hono](https://github.com/honojs/hono)|55965|61847|57329|48719|
|[fast](https://github.com/danteissaias/fast)|50113|61429|34285|54624|
|[fastro](https://github.com/fastrodev/fastro)|48345|59166|49330|36539|
|[oak](https://github.com/oakserver/oak)|17147|18118|17243|16079|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37826|41044|37279|35154|
|[fastify](https://github.com/fastify/fastify)|28708|30119|28410|27595|
|[koa](https://github.com/koajs/koa)|18572|19558|17317|18842|
|[express](https://github.com/expressjs/express)|6224|6523|5550|6599|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61889|61646|62800|61220|
|[hono](https://github.com/honojs/hono)|59928|59584|59154|61045|
|[elysia](https://github.com/elysiajs/elysia)|59063|59346|60089|57753|
|[baojs](https://github.com/mattreid1/baojs)|51846|58650|44120|52767|
  



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


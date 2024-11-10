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
Created At : Sun Nov 10 2024, 12:52:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47810|51573|47302|44556|
|[hono](https://github.com/honojs/hono)|47746|50756|48278|44205|
|[fast](https://github.com/danteissaias/fast)|47429|51716|45363|45207|
|[oak](https://github.com/oakserver/oak)|25480|26285|25013|25141|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24332|30183|22544|20270|
|[fastify](https://github.com/fastify/fastify)|17020|17292|17107|16661|
|[koa](https://github.com/koajs/koa)|14005|14732|13334|13948|
|[express](https://github.com/expressjs/express)|6250|6405|5903|6443|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76313|84852|76850|67237|
|[nhttp](https://github.com/nhttp/nhttp)|65299|86261|53951|55685|
|[hono](https://github.com/honojs/hono)|64277|75160|57394|60278|
|[baojs](https://github.com/mattreid1/baojs)|34195|42111|31944|28529|
  



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


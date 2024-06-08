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
Created At : Sat Jun 08 2024, 12:40:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48625|52001|47624|46250|
|[fast](https://github.com/danteissaias/fast)|47980|51739|44627|47575|
|[hono](https://github.com/honojs/hono)|47494|50779|48388|43315|
|[oak](https://github.com/oakserver/oak)|26776|27843|26237|26249|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23760|29159|22056|20064|
|[fastify](https://github.com/fastify/fastify)|16541|16796|16605|16221|
|[koa](https://github.com/koajs/koa)|14202|14938|13344|14324|
|[express](https://github.com/expressjs/express)|6261|6352|6033|6399|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70385|83707|78263|49186|
|[nhttp](https://github.com/nhttp/nhttp)|60045|86719|51964|41452|
|[hono](https://github.com/honojs/hono)|53723|62974|52099|46096|
|[baojs](https://github.com/mattreid1/baojs)|34079|39048|33777|29411|
  



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


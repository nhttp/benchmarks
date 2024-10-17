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
Created At : Thu Oct 17 2024, 12:49:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47818|52311|44975|46168|
|[hono](https://github.com/honojs/hono)|47760|51547|48305|43428|
|[nhttp](https://github.com/nhttp/nhttp)|47393|51133|46766|44280|
|[oak](https://github.com/oakserver/oak)|26062|26950|25448|25789|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24920|31252|22605|20904|
|[fastify](https://github.com/fastify/fastify)|16834|17349|16619|16533|
|[koa](https://github.com/koajs/koa)|14042|14610|13168|14348|
|[express](https://github.com/expressjs/express)|6379|6602|6046|6489|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75822|76805|81343|69318|
|[hono](https://github.com/honojs/hono)|60451|68150|54814|58389|
|[nhttp](https://github.com/nhttp/nhttp)|60060|81217|47753|51209|
|[baojs](https://github.com/mattreid1/baojs)|37843|45935|36816|30779|
  



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


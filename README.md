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
Created At : Tue May 14 2024, 12:38:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48397|51615|44264|49313|
|[nhttp](https://github.com/nhttp/nhttp)|47999|52462|46232|45302|
|[hono](https://github.com/honojs/hono)|47457|50791|47198|44381|
|[oak](https://github.com/oakserver/oak)|27827|29141|28054|26287|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23569|29411|21774|19522|
|[fastify](https://github.com/fastify/fastify)|16340|16712|16132|16177|
|[koa](https://github.com/koajs/koa)|14197|14773|13613|14204|
|[express](https://github.com/expressjs/express)|6343|6539|5980|6510|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72986|83760|76839|58358|
|[nhttp](https://github.com/nhttp/nhttp)|61967|81198|55662|49042|
|[hono](https://github.com/honojs/hono)|58338|71865|57739|45409|
|[baojs](https://github.com/mattreid1/baojs)|38024|46835|34827|32409|
  



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


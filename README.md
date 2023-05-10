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
Created At : Wed May 10 2023, 9:55:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51205|58121|50365|45130|
|[hono](https://github.com/honojs/hono)|49875|55324|50948|43352|
|[fast](https://github.com/danteissaias/fast)|45108|53776|46121|35428|
|[fastro](https://github.com/fastrodev/fastro)|42563|52494|44111|31084|
|[oak](https://github.com/oakserver/oak)|15570|16744|15700|14267|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33434|36348|33016|30939|
|[fastify](https://github.com/fastify/fastify)|26922|28050|27088|25628|
|[koa](https://github.com/koajs/koa)|16498|17382|15198|16915|
|[express](https://github.com/expressjs/express)|5532|5862|5018|5715|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56271|55933|55648|57231|
|[hono](https://github.com/honojs/hono)|55204|51715|58702|55195|
|[elysia](https://github.com/elysiajs/elysia)|54517|55348|54711|53491|
|[baojs](https://github.com/mattreid1/baojs)|48790|54937|49693|41741|
  



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


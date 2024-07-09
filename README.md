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
Created At : Tue Jul 09 2024, 12:41:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49358|54404|48489|45182|
|[hono](https://github.com/honojs/hono)|48215|51687|49443|43516|
|[fast](https://github.com/danteissaias/fast)|47058|51772|44556|44847|
|[oak](https://github.com/oakserver/oak)|27397|28361|26935|26896|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23524|29246|21682|19643|
|[fastify](https://github.com/fastify/fastify)|17088|17391|16956|16916|
|[koa](https://github.com/koajs/koa)|14525|15336|13562|14678|
|[express](https://github.com/expressjs/express)|6273|6418|5951|6451|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71355|86054|78251|49759|
|[nhttp](https://github.com/nhttp/nhttp)|63108|85676|59641|44008|
|[hono](https://github.com/honojs/hono)|58542|64840|59400|51387|
|[baojs](https://github.com/mattreid1/baojs)|36550|40285|35530|33834|
  



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


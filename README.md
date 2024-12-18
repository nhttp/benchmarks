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
Created At : Wed Dec 18 2024, 12:53:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48645|51712|48141|46082|
|[hono](https://github.com/honojs/hono)|47905|51276|48437|44002|
|[fast](https://github.com/danteissaias/fast)|47311|51079|45200|45654|
|[oak](https://github.com/oakserver/oak)|26045|27062|25316|25757|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24958|31872|22325|20677|
|[fastify](https://github.com/fastify/fastify)|16692|17055|16659|16361|
|[koa](https://github.com/koajs/koa)|14176|15180|13194|14155|
|[express](https://github.com/expressjs/express)|6299|6459|5984|6455|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72987|83882|72285|62793|
|[hono](https://github.com/honojs/hono)|57793|71224|51942|50212|
|[nhttp](https://github.com/nhttp/nhttp)|57743|85974|45491|41764|
|[baojs](https://github.com/mattreid1/baojs)|36426|43060|36247|29970|
  



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


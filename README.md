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
Created At : Sun Dec 29 2024, 12:55:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48945|52786|48289|45760|
|[hono](https://github.com/honojs/hono)|47746|51176|47987|44076|
|[fast](https://github.com/danteissaias/fast)|47146|51590|44629|45220|
|[oak](https://github.com/oakserver/oak)|26282|27146|25832|25867|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24427|30234|22872|20174|
|[fastify](https://github.com/fastify/fastify)|16789|16965|16934|16468|
|[koa](https://github.com/koajs/koa)|14032|14901|13129|14066|
|[express](https://github.com/expressjs/express)|6357|6573|6059|6440|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72242|81687|71381|63659|
|[nhttp](https://github.com/nhttp/nhttp)|61044|83533|50833|48767|
|[hono](https://github.com/honojs/hono)|59008|75064|50514|51446|
|[baojs](https://github.com/mattreid1/baojs)|35045|40685|34203|30247|
  



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


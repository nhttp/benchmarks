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
Created At : Mon Oct 28 2024, 12:52:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48218|52943|45161|46550|
|[hono](https://github.com/honojs/hono)|47948|51905|47969|43971|
|[nhttp](https://github.com/nhttp/nhttp)|47717|50915|47224|45012|
|[oak](https://github.com/oakserver/oak)|26077|26920|25592|25718|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24605|31017|22413|20385|
|[fastify](https://github.com/fastify/fastify)|17122|17699|16970|16696|
|[koa](https://github.com/koajs/koa)|13810|14526|12962|13942|
|[express](https://github.com/expressjs/express)|6253|6362|5944|6453|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71850|74050|73773|67728|
|[hono](https://github.com/honojs/hono)|60463|73641|59129|48618|
|[nhttp](https://github.com/nhttp/nhttp)|58301|82055|41226|51623|
|[baojs](https://github.com/mattreid1/baojs)|34981|40515|34838|29590|
  



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


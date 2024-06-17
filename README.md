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
Created At : Mon Jun 17 2024, 12:42:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49276|53604|48044|46180|
|[hono](https://github.com/honojs/hono)|48228|51466|49146|44072|
|[fast](https://github.com/danteissaias/fast)|47919|52304|44876|46576|
|[oak](https://github.com/oakserver/oak)|27414|28288|26699|27256|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24236|30332|22431|19944|
|[fastify](https://github.com/fastify/fastify)|17019|17399|17000|16658|
|[koa](https://github.com/koajs/koa)|14158|14742|13588|14143|
|[express](https://github.com/expressjs/express)|6398|6481|6161|6553|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70554|87834|75301|48526|
|[nhttp](https://github.com/nhttp/nhttp)|60428|88763|43312|49210|
|[hono](https://github.com/honojs/hono)|54252|64843|54573|43340|
|[baojs](https://github.com/mattreid1/baojs)|36515|42132|36463|30951|
  



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


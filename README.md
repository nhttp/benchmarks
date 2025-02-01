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
Created At : Sat Feb 01 2025, 12:52:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61895|68798|60729|56157|
|[hono](https://github.com/honojs/hono)|56912|63121|55778|51836|
|[fast](https://github.com/danteissaias/fast)|53086|63227|45580|50451|
|[oak](https://github.com/oakserver/oak)|28442|29720|27783|27824|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40524|43222|40959|37390|
|[fastify](https://github.com/fastify/fastify)|24837|25658|26143|22710|
|[koa](https://github.com/koajs/koa)|16920|17435|15883|17443|
|[express](https://github.com/expressjs/express)|6931|7179|6381|7233|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74612|86887|75535|61414|
|[nhttp](https://github.com/nhttp/nhttp)|66903|93713|52958|54039|
|[hono](https://github.com/honojs/hono)|64026|73394|58739|59946|
|[baojs](https://github.com/mattreid1/baojs)|47478|53736|44671|44026|
  



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


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
Created At : Fri May 09 2025, 1:00:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57747|63468|59961|49813|
|[fast](https://github.com/danteissaias/fast)|53749|61926|47752|51569|
|[nhttp](https://github.com/nhttp/nhttp)|52941|58710|51679|48435|
|[oak](https://github.com/oakserver/oak)|28289|29323|28049|27496|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40585|46139|40075|35540|
|[fastify](https://github.com/fastify/fastify)|25169|25783|26780|22943|
|[koa](https://github.com/koajs/koa)|16637|17402|16470|16038|
|[express](https://github.com/expressjs/express)|6500|6651|6257|6591|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78960|89600|73457|73823|
|[nhttp](https://github.com/nhttp/nhttp)|65918|85925|55812|56018|
|[hono](https://github.com/honojs/hono)|64216|74521|60198|57928|
|[baojs](https://github.com/mattreid1/baojs)|47264|50723|44016|47052|
  



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


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
Created At : Tue Dec 31 2024, 12:50:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48670|53449|47307|45255|
|[fast](https://github.com/danteissaias/fast)|48093|52147|43971|48161|
|[hono](https://github.com/honojs/hono)|47762|51088|47864|44335|
|[oak](https://github.com/oakserver/oak)|26286|27272|25593|25993|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24351|30435|22426|20193|
|[fastify](https://github.com/fastify/fastify)|16978|17374|17059|16500|
|[koa](https://github.com/koajs/koa)|14305|15434|13435|14045|
|[express](https://github.com/expressjs/express)|6400|6571|5993|6637|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77506|85064|74590|72863|
|[hono](https://github.com/honojs/hono)|57799|75254|52337|45806|
|[nhttp](https://github.com/nhttp/nhttp)|56912|79878|42287|48570|
|[baojs](https://github.com/mattreid1/baojs)|36778|42549|35999|31787|
  



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


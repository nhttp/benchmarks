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
Created At : Fri Jun 28 2024, 12:41:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48178|52306|47392|44837|
|[hono](https://github.com/honojs/hono)|48073|51048|48925|44245|
|[fast](https://github.com/danteissaias/fast)|47854|51784|44837|46940|
|[oak](https://github.com/oakserver/oak)|26519|27343|25955|26259|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23881|29013|22503|20126|
|[fastify](https://github.com/fastify/fastify)|16854|17207|16962|16394|
|[koa](https://github.com/koajs/koa)|14468|15281|13490|14632|
|[express](https://github.com/expressjs/express)|6222|6392|5897|6378|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69616|85908|76563|46376|
|[hono](https://github.com/honojs/hono)|58560|72213|59033|44435|
|[nhttp](https://github.com/nhttp/nhttp)|57847|84834|46623|42085|
|[baojs](https://github.com/mattreid1/baojs)|35800|40545|35796|31058|
  



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


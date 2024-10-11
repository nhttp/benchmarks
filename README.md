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
Created At : Fri Oct 11 2024, 12:49:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47934|50971|47465|45367|
|[hono](https://github.com/honojs/hono)|47736|51049|48008|44151|
|[fast](https://github.com/danteissaias/fast)|47590|52387|45474|44909|
|[oak](https://github.com/oakserver/oak)|26034|27003|25618|25482|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25016|31900|22674|20473|
|[fastify](https://github.com/fastify/fastify)|16798|17216|16776|16402|
|[koa](https://github.com/koajs/koa)|14058|14826|13179|14170|
|[express](https://github.com/expressjs/express)|6289|6576|6032|6259|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69690|80822|73184|55063|
|[hono](https://github.com/honojs/hono)|61898|75120|52990|57583|
|[nhttp](https://github.com/nhttp/nhttp)|57915|78464|47108|48173|
|[baojs](https://github.com/mattreid1/baojs)|33473|38978|32803|28637|
  



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


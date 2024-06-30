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
Created At : Sun Jun 30 2024, 12:45:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49027|53418|47766|45898|
|[hono](https://github.com/honojs/hono)|47911|51223|48525|43986|
|[fast](https://github.com/danteissaias/fast)|47454|51471|44336|46556|
|[oak](https://github.com/oakserver/oak)|26912|27878|26403|26456|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25127|31278|23104|21000|
|[fastify](https://github.com/fastify/fastify)|17097|17283|17093|16916|
|[koa](https://github.com/koajs/koa)|14577|15151|13799|14780|
|[express](https://github.com/expressjs/express)|6413|6555|6141|6543|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71697|87178|77437|50475|
|[hono](https://github.com/honojs/hono)|59665|70028|55505|53461|
|[nhttp](https://github.com/nhttp/nhttp)|59549|83990|50853|43804|
|[baojs](https://github.com/mattreid1/baojs)|34527|40114|33049|30417|
  



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


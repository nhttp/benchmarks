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
Created At : Fri Dec 13 2024, 12:55:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47996|52643|47079|44266|
|[fast](https://github.com/danteissaias/fast)|47469|51794|44172|46440|
|[hono](https://github.com/honojs/hono)|47342|50219|47869|43938|
|[oak](https://github.com/oakserver/oak)|26074|26898|25558|25767|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24891|31249|23032|20392|
|[fastify](https://github.com/fastify/fastify)|16971|17740|16408|16766|
|[koa](https://github.com/koajs/koa)|14266|15178|13330|14289|
|[express](https://github.com/expressjs/express)|6347|6564|6093|6385|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72773|75825|79011|63482|
|[hono](https://github.com/honojs/hono)|63585|72719|59561|58474|
|[nhttp](https://github.com/nhttp/nhttp)|62442|80571|50060|56694|
|[baojs](https://github.com/mattreid1/baojs)|36466|44634|34311|30453|
  



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


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
Created At : Mon Jun 03 2024, 12:41:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47828|51645|47116|44724|
|[hono](https://github.com/honojs/hono)|47312|50007|48525|43403|
|[fast](https://github.com/danteissaias/fast)|47020|50451|43730|46879|
|[oak](https://github.com/oakserver/oak)|26997|28051|26487|26452|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23754|29265|22356|19642|
|[fastify](https://github.com/fastify/fastify)|16736|17204|16644|16359|
|[koa](https://github.com/koajs/koa)|14306|15054|13603|14261|
|[express](https://github.com/expressjs/express)|6256|6344|6023|6400|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69749|83313|75786|50147|
|[nhttp](https://github.com/nhttp/nhttp)|60215|83334|50731|46580|
|[hono](https://github.com/honojs/hono)|57095|67341|55423|48522|
|[baojs](https://github.com/mattreid1/baojs)|34344|40515|31641|30875|
  



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


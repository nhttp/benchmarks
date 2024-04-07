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
Created At : Sun Apr 07 2024, 12:43:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48735|53217|47003|45984|
|[fast](https://github.com/danteissaias/fast)|47986|52295|45050|46612|
|[hono](https://github.com/honojs/hono)|47602|49914|48536|44357|
|[oak](https://github.com/oakserver/oak)|27862|29343|27885|26359|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25907|32842|23624|21256|
|[fastify](https://github.com/fastify/fastify)|16921|17526|16574|16662|
|[koa](https://github.com/koajs/koa)|14766|15325|14218|14755|
|[express](https://github.com/expressjs/express)|6491|6628|6200|6644|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76265|79990|80704|68102|
|[nhttp](https://github.com/nhttp/nhttp)|64885|81150|57349|56157|
|[hono](https://github.com/honojs/hono)|58264|74956|55761|44074|
|[baojs](https://github.com/mattreid1/baojs)|36563|41642|35198|32848|
  



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


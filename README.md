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
Created At : Tue Aug 06 2024, 12:43:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46334|50170|45803|43028|
|[hono](https://github.com/honojs/hono)|45231|48098|46384|41211|
|[fast](https://github.com/danteissaias/fast)|44845|48548|42769|43217|
|[oak](https://github.com/oakserver/oak)|25866|27037|25237|25323|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24830|31507|22677|20306|
|[fastify](https://github.com/fastify/fastify)|17034|17511|16786|16804|
|[koa](https://github.com/koajs/koa)|14518|15176|13782|14596|
|[express](https://github.com/expressjs/express)|6393|6484|6287|6407|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73195|83518|77838|58228|
|[hono](https://github.com/honojs/hono)|60376|70140|53745|57244|
|[nhttp](https://github.com/nhttp/nhttp)|58643|80715|43346|51868|
|[baojs](https://github.com/mattreid1/baojs)|38316|46812|35834|32302|
  



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


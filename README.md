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
Created At : Fri Sep 27 2024, 12:49:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47065|50280|48085|42830|
|[fast](https://github.com/danteissaias/fast)|47036|50911|42738|47460|
|[nhttp](https://github.com/nhttp/nhttp)|46971|50666|46733|43513|
|[oak](https://github.com/oakserver/oak)|26081|27136|25630|25478|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24897|30758|22619|21315|
|[fastify](https://github.com/fastify/fastify)|16980|17363|16916|16661|
|[koa](https://github.com/koajs/koa)|13625|14233|12803|13840|
|[express](https://github.com/expressjs/express)|6190|6357|5860|6353|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67165|83531|73734|44230|
|[nhttp](https://github.com/nhttp/nhttp)|55534|82199|43810|40593|
|[hono](https://github.com/honojs/hono)|53777|64310|51981|45039|
|[baojs](https://github.com/mattreid1/baojs)|35526|41025|33369|32183|
  



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


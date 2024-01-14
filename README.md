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
Created At : Sun Jan 14 2024, 12:42:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47143|50239|46415|44775|
|[fast](https://github.com/danteissaias/fast)|46526|50057|44207|45314|
|[hono](https://github.com/honojs/hono)|46219|48938|46562|43156|
|[fastro](https://github.com/fastrodev/fastro)|23997|49636|11379|10976|
|[oak](https://github.com/oakserver/oak)|22682|23794|22749|21502|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26149|33484|23211|21751|
|[fastify](https://github.com/fastify/fastify)|16092|16481|16037|15758|
|[koa](https://github.com/koajs/koa)|13056|13489|12537|13142|
|[express](https://github.com/expressjs/express)|6384|6578|6029|6544|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68247|78463|74054|52223|
|[hono](https://github.com/honojs/hono)|58143|70542|54659|49228|
|[nhttp](https://github.com/nhttp/nhttp)|57453|78900|47125|46334|
|[baojs](https://github.com/mattreid1/baojs)|34464|39537|33421|30435|
  



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


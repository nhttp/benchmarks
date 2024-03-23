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
Created At : Sat Mar 23 2024, 12:35:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48492|52201|47319|45955|
|[hono](https://github.com/honojs/hono)|48483|51345|49681|44422|
|[fast](https://github.com/danteissaias/fast)|47891|51796|45576|46302|
|[oak](https://github.com/oakserver/oak)|27716|29134|28009|26005|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24522|30803|22510|20254|
|[fastify](https://github.com/fastify/fastify)|16766|17093|16859|16346|
|[koa](https://github.com/koajs/koa)|14357|15171|13583|14317|
|[express](https://github.com/expressjs/express)|6420|6534|6176|6550|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78739|85785|82320|68113|
|[nhttp](https://github.com/nhttp/nhttp)|63352|87096|54513|48447|
|[hono](https://github.com/honojs/hono)|60246|77054|51837|51848|
|[baojs](https://github.com/mattreid1/baojs)|37123|42348|32899|36122|
  



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


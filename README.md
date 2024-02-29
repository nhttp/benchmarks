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
Created At : Thu Feb 29 2024, 12:36:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48642|52056|47336|46534|
|[fast](https://github.com/danteissaias/fast)|48377|52147|45250|47735|
|[hono](https://github.com/honojs/hono)|47784|50526|48211|44616|
|[oak](https://github.com/oakserver/oak)|27689|29200|27731|26136|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26641|34537|23688|21698|
|[fastify](https://github.com/fastify/fastify)|17001|17475|16839|16690|
|[koa](https://github.com/koajs/koa)|14781|15715|13765|14863|
|[express](https://github.com/expressjs/express)|6416|6585|6177|6485|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69476|84543|71019|52865|
|[hono](https://github.com/honojs/hono)|65758|80638|64875|51760|
|[nhttp](https://github.com/nhttp/nhttp)|63973|84472|61281|46166|
|[baojs](https://github.com/mattreid1/baojs)|34731|42265|32310|29619|
  



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


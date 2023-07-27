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
Created At : Thu Jul 27 2023, 12:40:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61993|68001|60510|57467|
|[hono](https://github.com/honojs/hono)|54026|65008|58521|38550|
|[fastro](https://github.com/fastrodev/fastro)|23516|59055|5650|5842|
|[oak](https://github.com/oakserver/oak)|18065|19192|18017|16985|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42802|45724|42404|40278|
|[fastify](https://github.com/fastify/fastify)|34540|35518|34451|33652|
|[koa](https://github.com/koajs/koa)|21280|22521|20432|20888|
|[express](https://github.com/expressjs/express)|7525|7810|7319|7446|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69367|67887|70608|69605|
|[hono](https://github.com/honojs/hono)|67105|64189|67510|69617|
|[elysia](https://github.com/elysiajs/elysia)|66168|64361|65875|68267|
|[baojs](https://github.com/mattreid1/baojs)|54767|60361|46479|57461|
  



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


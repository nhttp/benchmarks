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
Created At : Wed Apr 23 2025, 12:59:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58261|62817|56412|55553|
|[hono](https://github.com/honojs/hono)|57564|61338|59995|51358|
|[fast](https://github.com/danteissaias/fast)|54981|61527|47798|55617|
|[oak](https://github.com/oakserver/oak)|28864|29510|27764|29317|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40302|45889|41288|33728|
|[fastify](https://github.com/fastify/fastify)|24022|24735|24960|22370|
|[koa](https://github.com/koajs/koa)|16988|17833|16141|16991|
|[express](https://github.com/expressjs/express)|6644|6747|6390|6794|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75229|89407|71967|64312|
|[nhttp](https://github.com/nhttp/nhttp)|74817|98317|64307|61828|
|[hono](https://github.com/honojs/hono)|65400|74484|61274|60443|
|[baojs](https://github.com/mattreid1/baojs)|51019|56338|48223|48495|
  



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


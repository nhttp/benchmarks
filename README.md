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
Created At : Thu Mar 06 2025, 12:52:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|56710|64500|57861|47769|
|[fast](https://github.com/danteissaias/fast)|55794|65807|50790|50784|
|[nhttp](https://github.com/nhttp/nhttp)|55491|60526|55300|50648|
|[oak](https://github.com/oakserver/oak)|28209|29205|28003|27419|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38839|44857|37547|34114|
|[fastify](https://github.com/fastify/fastify)|24180|25682|25657|21200|
|[koa](https://github.com/koajs/koa)|16804|17921|15487|17004|
|[express](https://github.com/expressjs/express)|7044|7329|6568|7234|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75867|86847|76457|64298|
|[nhttp](https://github.com/nhttp/nhttp)|69200|92258|58570|56772|
|[hono](https://github.com/honojs/hono)|62794|72003|58047|58333|
|[baojs](https://github.com/mattreid1/baojs)|47939|54525|42683|46608|
  



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


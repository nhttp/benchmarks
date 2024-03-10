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
Created At : Sun Mar 10 2024, 12:42:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|49091|53020|44347|49907|
|[nhttp](https://github.com/nhttp/nhttp)|48816|52447|47996|46004|
|[hono](https://github.com/honojs/hono)|46510|49044|47301|43184|
|[oak](https://github.com/oakserver/oak)|27250|28739|27466|25546|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24343|30332|22708|19990|
|[fastify](https://github.com/fastify/fastify)|16752|17386|16300|16569|
|[koa](https://github.com/koajs/koa)|14686|15037|13906|15115|
|[express](https://github.com/expressjs/express)|6368|6481|6022|6600|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73927|83907|76950|60923|
|[hono](https://github.com/honojs/hono)|64224|73098|63102|56473|
|[nhttp](https://github.com/nhttp/nhttp)|56726|85309|46715|38154|
|[baojs](https://github.com/mattreid1/baojs)|36755|42185|34730|33350|
  



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


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
Created At : Mon Jan 27 2025, 12:50:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56131|61835|55747|50811|
|[hono](https://github.com/honojs/hono)|56046|59109|59521|49507|
|[fast](https://github.com/danteissaias/fast)|54815|65623|45102|53721|
|[oak](https://github.com/oakserver/oak)|27259|28292|27130|26354|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39043|44877|38346|33907|
|[fastify](https://github.com/fastify/fastify)|24923|24365|25555|24848|
|[koa](https://github.com/koajs/koa)|17228|18179|16138|17368|
|[express](https://github.com/expressjs/express)|6841|7042|6355|7125|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79334|94733|75214|68056|
|[nhttp](https://github.com/nhttp/nhttp)|70292|91487|59317|60072|
|[hono](https://github.com/honojs/hono)|63929|75616|55378|60793|
|[baojs](https://github.com/mattreid1/baojs)|50482|57055|47830|46561|
  



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


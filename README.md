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
Created At : Fri Jan 17 2025, 12:48:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57598|63735|56832|52228|
|[nhttp](https://github.com/nhttp/nhttp)|57411|62210|59469|50554|
|[fast](https://github.com/danteissaias/fast)|56088|67254|49808|51201|
|[oak](https://github.com/oakserver/oak)|28445|30036|27172|28127|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39719|44997|38020|36141|
|[fastify](https://github.com/fastify/fastify)|25270|26018|27400|22391|
|[koa](https://github.com/koajs/koa)|16486|17426|15667|16365|
|[express](https://github.com/expressjs/express)|6930|7164|6471|7155|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77953|90708|76871|66279|
|[nhttp](https://github.com/nhttp/nhttp)|67726|90942|52078|60157|
|[hono](https://github.com/honojs/hono)|63088|75376|55745|58142|
|[baojs](https://github.com/mattreid1/baojs)|46959|52580|43172|45124|
  



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


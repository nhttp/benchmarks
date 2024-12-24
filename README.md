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
Created At : Tue Dec 24 2024, 12:50:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48258|52241|47941|44593|
|[fast](https://github.com/danteissaias/fast)|47165|51494|43954|46047|
|[hono](https://github.com/honojs/hono)|47106|50101|47762|43454|
|[oak](https://github.com/oakserver/oak)|26027|26917|25552|25612|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24670|31105|22559|20345|
|[fastify](https://github.com/fastify/fastify)|16861|17391|16511|16680|
|[koa](https://github.com/koajs/koa)|14178|15068|13206|14259|
|[express](https://github.com/expressjs/express)|6348|6500|6037|6506|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73626|82298|75289|63292|
|[nhttp](https://github.com/nhttp/nhttp)|60033|80421|47440|52237|
|[hono](https://github.com/honojs/hono)|56302|73523|50191|45193|
|[baojs](https://github.com/mattreid1/baojs)|34001|40207|31983|29813|
  



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


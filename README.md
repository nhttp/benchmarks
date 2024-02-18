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
Created At : Sun Feb 18 2024, 12:39:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47081|50369|43635|47238|
|[nhttp](https://github.com/nhttp/nhttp)|46462|49748|45201|44438|
|[hono](https://github.com/honojs/hono)|45679|48175|46266|42595|
|[oak](https://github.com/oakserver/oak)|26666|28133|26614|25251|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24616|30222|23283|20342|
|[fastify](https://github.com/fastify/fastify)|16115|16489|15923|15933|
|[koa](https://github.com/koajs/koa)|14301|15191|13352|14359|
|[express](https://github.com/expressjs/express)|6355|6467|6121|6476|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72637|83645|71326|62940|
|[nhttp](https://github.com/nhttp/nhttp)|58731|84559|49477|42156|
|[hono](https://github.com/honojs/hono)|57770|73518|55659|44133|
|[baojs](https://github.com/mattreid1/baojs)|34501|38758|33505|31240|
  



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


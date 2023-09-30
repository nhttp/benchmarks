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
Created At : Sat Sep 30 2023, 12:35:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62007|63792|62461|59769|
|[hono](https://github.com/honojs/hono)|59057|64826|60835|51509|
|[fast](https://github.com/danteissaias/fast)|54836|63266|55640|45603|
|[fastro](https://github.com/fastrodev/fastro)|25464|62358|7256|6777|
|[oak](https://github.com/oakserver/oak)|18253|18956|18274|17528|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38448|41495|38038|35812|
|[fastify](https://github.com/fastify/fastify)|27834|27469|28529|27504|
|[koa](https://github.com/koajs/koa)|18387|19420|17305|18435|
|[express](https://github.com/expressjs/express)|6179|6374|6127|6035|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58980|55059|61453|60428|
|[hono](https://github.com/honojs/hono)|58526|52519|62416|60644|
|[elysia](https://github.com/elysiajs/elysia)|55950|54189|52187|61474|
|[baojs](https://github.com/mattreid1/baojs)|49042|57565|50716|38845|
  



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


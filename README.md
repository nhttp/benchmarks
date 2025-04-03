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
Created At : Thu Apr 03 2025, 12:54:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59210|62826|58559|56245|
|[hono](https://github.com/honojs/hono)|57971|61772|60232|51909|
|[fast](https://github.com/danteissaias/fast)|53957|66133|47617|48122|
|[oak](https://github.com/oakserver/oak)|28574|30377|28390|26954|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39318|49127|35504|33322|
|[fastify](https://github.com/fastify/fastify)|26031|25530|27843|24721|
|[koa](https://github.com/koajs/koa)|17318|18054|16043|17857|
|[express](https://github.com/expressjs/express)|6501|6652|6286|6565|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77045|91255|76066|63815|
|[nhttp](https://github.com/nhttp/nhttp)|68763|86738|56074|63478|
|[hono](https://github.com/honojs/hono)|62706|71195|60011|56912|
|[baojs](https://github.com/mattreid1/baojs)|47247|52151|42676|46915|
  



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


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
Created At : Sat Dec 23 2023, 12:36:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46014|49728|43256|45059|
|[nhttp](https://github.com/nhttp/nhttp)|45617|49125|44524|43203|
|[hono](https://github.com/honojs/hono)|44756|47095|45938|41234|
|[fastro](https://github.com/fastrodev/fastro)|23463|47470|11532|11386|
|[oak](https://github.com/oakserver/oak)|20442|21525|20400|19402|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24522|29825|23116|20625|
|[fastify](https://github.com/fastify/fastify)|15758|16132|15738|15404|
|[koa](https://github.com/koajs/koa)|14111|14702|13158|14472|
|[express](https://github.com/expressjs/express)|6221|6358|5896|6410|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70990|79153|74496|59322|
|[nhttp](https://github.com/nhttp/nhttp)|59439|80932|53097|44289|
|[hono](https://github.com/honojs/hono)|58818|67192|56217|53046|
|[baojs](https://github.com/mattreid1/baojs)|36901|44708|35381|30615|
  



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


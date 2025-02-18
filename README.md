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
Created At : Tue Feb 18 2025, 12:50:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|56472|60291|59957|49168|
|[nhttp](https://github.com/nhttp/nhttp)|55699|61826|55921|49351|
|[fast](https://github.com/danteissaias/fast)|52605|61325|44711|51779|
|[oak](https://github.com/oakserver/oak)|28332|30253|27215|27527|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39698|47810|36759|34525|
|[fastify](https://github.com/fastify/fastify)|24759|23842|26030|24404|
|[koa](https://github.com/koajs/koa)|17104|18325|15814|17172|
|[express](https://github.com/expressjs/express)|6894|7156|6326|7200|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75568|86670|73547|66488|
|[nhttp](https://github.com/nhttp/nhttp)|69334|94254|52759|60990|
|[hono](https://github.com/honojs/hono)|65374|74231|62369|59521|
|[baojs](https://github.com/mattreid1/baojs)|46225|51749|42334|44591|
  



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


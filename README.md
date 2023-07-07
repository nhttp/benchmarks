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
Created At : Fri Jul 07 2023, 12:53:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64658|70111|62948|60916|
|[hono](https://github.com/honojs/hono)|62606|66558|63057|58202|
|[fastro](https://github.com/fastrodev/fastro)|50485|66097|54294|31065|
|[oak](https://github.com/oakserver/oak)|19757|20923|19565|18782|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|34629|36204|34117|33565|
|[nhttp](https://github.com/nhttp/nhttp)|22760|22649|22568|23062|
|[koa](https://github.com/koajs/koa)|19192|20598|18025|18954|
|[express](https://github.com/expressjs/express)|7391|7512|7088|7572|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|71078|70019|71257|71959|
|[hono](https://github.com/honojs/hono)|70131|67549|71075|71768|
|[elysia](https://github.com/elysiajs/elysia)|68329|67538|68981|68467|
|[baojs](https://github.com/mattreid1/baojs)|55772|64585|61428|41304|
  



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


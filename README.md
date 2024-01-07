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
Created At : Sun Jan 07 2024, 12:42:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46610|49612|46323|43895|
|[fast](https://github.com/danteissaias/fast)|46544|49744|42515|47374|
|[hono](https://github.com/honojs/hono)|44875|47574|45028|42022|
|[fastro](https://github.com/fastrodev/fastro)|23380|48131|10865|11144|
|[oak](https://github.com/oakserver/oak)|21689|22685|21795|20587|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26399|34022|23806|21370|
|[fastify](https://github.com/fastify/fastify)|15838|16125|15704|15686|
|[koa](https://github.com/koajs/koa)|14602|15463|13664|14678|
|[express](https://github.com/expressjs/express)|6537|6612|6305|6693|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70158|81151|73674|55648|
|[nhttp](https://github.com/nhttp/nhttp)|64074|79653|56284|56284|
|[hono](https://github.com/honojs/hono)|63030|72943|61314|54834|
|[baojs](https://github.com/mattreid1/baojs)|38109|44013|35741|34574|
  



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


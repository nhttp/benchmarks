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
Created At : Wed Mar 06 2024, 12:36:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48165|52218|46797|45480|
|[fast](https://github.com/danteissaias/fast)|48154|51697|44775|47990|
|[hono](https://github.com/honojs/hono)|46838|49551|47693|43270|
|[oak](https://github.com/oakserver/oak)|26968|28496|27224|25183|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25192|31541|22831|21203|
|[fastify](https://github.com/fastify/fastify)|16313|16768|16118|16052|
|[koa](https://github.com/koajs/koa)|14660|15036|13897|15048|
|[express](https://github.com/expressjs/express)|6197|6329|5921|6340|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76754|88948|75586|65729|
|[nhttp](https://github.com/nhttp/nhttp)|64177|90475|54187|47870|
|[hono](https://github.com/honojs/hono)|57722|75020|50495|47652|
|[baojs](https://github.com/mattreid1/baojs)|34587|39743|33943|30074|
  



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


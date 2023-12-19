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
Created At : Tue Dec 19 2023, 12:38:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45387|49253|44029|42879|
|[fast](https://github.com/danteissaias/fast)|44837|48885|42922|42704|
|[hono](https://github.com/honojs/hono)|44314|47480|45151|40310|
|[fastro](https://github.com/fastrodev/fastro)|23534|48722|11129|10750|
|[oak](https://github.com/oakserver/oak)|20527|21702|20154|19726|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25378|31776|23105|21252|
|[fastify](https://github.com/fastify/fastify)|15392|15832|15226|15118|
|[koa](https://github.com/koajs/koa)|14125|14415|13638|14322|
|[express](https://github.com/expressjs/express)|6227|6396|5932|6352|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66960|79028|64993|56858|
|[hono](https://github.com/honojs/hono)|55367|62237|56887|46977|
|[nhttp](https://github.com/nhttp/nhttp)|54892|78143|42773|43759|
|[baojs](https://github.com/mattreid1/baojs)|31518|35357|31709|27487|
  



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


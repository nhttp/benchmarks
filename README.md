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
Created At : Fri Dec 22 2023, 12:37:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46187|49803|45005|43752|
|[fast](https://github.com/danteissaias/fast)|46150|49700|44146|44605|
|[hono](https://github.com/honojs/hono)|44672|47869|44981|41166|
|[fastro](https://github.com/fastrodev/fastro)|23941|49122|11450|11252|
|[oak](https://github.com/oakserver/oak)|20291|21301|20154|19417|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25104|31619|23073|20620|
|[fastify](https://github.com/fastify/fastify)|15917|16251|15622|15877|
|[koa](https://github.com/koajs/koa)|14201|14675|13488|14440|
|[express](https://github.com/expressjs/express)|6318|6442|5996|6515|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71571|81563|77510|55640|
|[hono](https://github.com/honojs/hono)|63056|76601|59016|53550|
|[nhttp](https://github.com/nhttp/nhttp)|61020|80492|55156|47411|
|[baojs](https://github.com/mattreid1/baojs)|35659|41491|35151|30336|
  



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


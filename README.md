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
Created At : Thu Sep 28 2023, 12:35:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66958|69475|67474|63924|
|[hono](https://github.com/honojs/hono)|64298|70003|66085|56805|
|[fast](https://github.com/danteissaias/fast)|59052|67812|47197|62148|
|[fastro](https://github.com/fastrodev/fastro)|28382|69574|8029|7543|
|[oak](https://github.com/oakserver/oak)|20026|21083|19682|19313|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45867|49224|44943|43435|
|[fastify](https://github.com/fastify/fastify)|35330|36060|35700|34229|
|[koa](https://github.com/koajs/koa)|21815|22804|20686|21955|
|[express](https://github.com/expressjs/express)|7594|7718|7321|7744|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64483|62145|64770|66534|
|[hono](https://github.com/honojs/hono)|61318|59981|57946|66028|
|[elysia](https://github.com/elysiajs/elysia)|58806|61116|58614|56689|
|[baojs](https://github.com/mattreid1/baojs)|52224|58409|45263|53001|
  



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


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
Created At : Wed Dec 20 2023, 12:31:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45402|49401|42172|44632|
|[nhttp](https://github.com/nhttp/nhttp)|45202|49022|43905|42678|
|[hono](https://github.com/honojs/hono)|44429|46918|45490|40878|
|[fastro](https://github.com/fastrodev/fastro)|23791|48930|11479|10964|
|[oak](https://github.com/oakserver/oak)|20479|21729|20389|19318|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25248|31911|22896|20938|
|[fastify](https://github.com/fastify/fastify)|15551|16123|15517|15014|
|[koa](https://github.com/koajs/koa)|14233|14811|13628|14259|
|[express](https://github.com/expressjs/express)|6395|6479|6144|6563|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66452|77355|68621|53380|
|[nhttp](https://github.com/nhttp/nhttp)|58797|79661|48527|48202|
|[hono](https://github.com/honojs/hono)|51872|63558|43599|48459|
|[baojs](https://github.com/mattreid1/baojs)|34200|38192|33594|30814|
  



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


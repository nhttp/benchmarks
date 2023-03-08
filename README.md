## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Wed Mar 08 2023, 12:48:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36482|39418|35773|34255|
|[fast](https://github.com/danteissaias/fast)|34803|38476|31621|34312|
|[hono](https://github.com/honojs/hono)|31322|34241|34129|25595|
|[fastro](https://github.com/fastrodev/fastro)|28628|31702|28965|25218|
|[oak](https://github.com/oakserver/oak)|14220|16346|11001|15314|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48870|55992|46586|44033|
|[hono](https://github.com/honojs/hono)|47645|53449|46994|42492|
|[elysia](https://github.com/elysiajs/elysia)|45739|54985|40845|41386|
|[baojs](https://github.com/mattreid1/baojs)|38504|43420|41266|30825|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|28046|29085|27564|27490|
|[nhttp](https://github.com/nhttp/nhttp)|26030|27974|26040|24075|
|[koa](https://github.com/koajs/koa)|15320|16591|14878|14490|
|[express](https://github.com/expressjs/express)|5515|5539|5310|5695|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|48870|55992|46586|44033|
|[hono](https://github.com/honojs/hono)|Bun|47645|53449|46994|42492|
|[elysia](https://github.com/elysiajs/elysia)|Bun|45739|54985|40845|41386|
|[baojs](https://github.com/mattreid1/baojs)|Bun|38504|43420|41266|30825|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|36482|39418|35773|34255|
|[fast](https://github.com/danteissaias/fast)|Deno|34803|38476|31621|34312|
|[hono](https://github.com/honojs/hono)|Deno|31322|34241|34129|25595|
|[fastro](https://github.com/fastrodev/fastro)|Deno|28628|31702|28965|25218|
|[fastify](https://github.com/fastify/fastify)|Node|28046|29085|27564|27490|
|[nhttp](https://github.com/nhttp/nhttp)|Node|26030|27974|26040|24075|
|[koa](https://github.com/koajs/koa)|Node|15320|16591|14878|14490|
|[oak](https://github.com/oakserver/oak)|Deno|14220|16346|11001|15314|
|[express](https://github.com/expressjs/express)|Node|5515|5539|5310|5695|



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


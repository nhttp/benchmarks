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
Created At : Thu Jan 11 2024, 12:39:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45973|49203|45282|43434|
|[fast](https://github.com/danteissaias/fast)|45560|48816|43600|44264|
|[hono](https://github.com/honojs/hono)|44062|46510|44626|41050|
|[fastro](https://github.com/fastrodev/fastro)|22717|47652|9969|10531|
|[oak](https://github.com/oakserver/oak)|21244|22263|21136|20332|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26135|34210|23064|21130|
|[fastify](https://github.com/fastify/fastify)|15497|15907|15367|15217|
|[koa](https://github.com/koajs/koa)|13963|14272|13236|14381|
|[express](https://github.com/expressjs/express)|6308|6510|6040|6373|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73457|83350|73415|63607|
|[nhttp](https://github.com/nhttp/nhttp)|60223|79022|57069|44577|
|[hono](https://github.com/honojs/hono)|58074|64542|56590|53090|
|[baojs](https://github.com/mattreid1/baojs)|34135|36925|34272|31207|
  



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


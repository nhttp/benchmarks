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
Created At : Sun Oct 27 2024, 12:58:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49432|53552|48763|45980|
|[hono](https://github.com/honojs/hono)|48201|51232|49530|43842|
|[fast](https://github.com/danteissaias/fast)|47824|52512|45417|45544|
|[oak](https://github.com/oakserver/oak)|26043|26893|25508|25727|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24732|30912|22769|20514|
|[fastify](https://github.com/fastify/fastify)|17247|17876|17106|16760|
|[koa](https://github.com/koajs/koa)|14490|15465|13383|14621|
|[express](https://github.com/expressjs/express)|6286|6459|5882|6516|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79493|89532|83345|65601|
|[hono](https://github.com/honojs/hono)|63653|79725|56734|54501|
|[nhttp](https://github.com/nhttp/nhttp)|60225|82466|44479|53729|
|[baojs](https://github.com/mattreid1/baojs)|35460|41743|32886|31750|
  



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


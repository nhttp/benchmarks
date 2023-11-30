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
Created At : Thu Nov 30 2023, 12:38:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|44863|48125|42851|43613|
|[nhttp](https://github.com/nhttp/nhttp)|44413|47886|43312|42042|
|[hono](https://github.com/honojs/hono)|42993|45215|43709|40054|
|[fastro](https://github.com/fastrodev/fastro)|22971|47255|11258|10399|
|[oak](https://github.com/oakserver/oak)|19402|20351|19388|18467|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25715|31000|23847|22299|
|[fastify](https://github.com/fastify/fastify)|15313|15631|15251|15057|
|[koa](https://github.com/koajs/koa)|13690|14100|12944|14027|
|[express](https://github.com/expressjs/express)|6196|6390|5822|6375|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65272|78543|61977|55295|
|[hono](https://github.com/honojs/hono)|62198|71817|58685|56092|
|[nhttp](https://github.com/nhttp/nhttp)|58871|77556|49544|49512|
|[baojs](https://github.com/mattreid1/baojs)|30521|33242|27476|30844|
  



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


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
Created At : Wed Jun 19 2024, 12:41:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48131|52454|47428|44510|
|[hono](https://github.com/honojs/hono)|47886|51356|48616|43685|
|[fast](https://github.com/danteissaias/fast)|47217|51602|45091|44958|
|[oak](https://github.com/oakserver/oak)|26950|27982|26391|26477|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23764|30012|21496|19785|
|[fastify](https://github.com/fastify/fastify)|16970|17331|16990|16589|
|[koa](https://github.com/koajs/koa)|14521|15382|13701|14479|
|[express](https://github.com/expressjs/express)|6371|6534|6079|6501|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66110|82198|70422|45710|
|[nhttp](https://github.com/nhttp/nhttp)|60780|81222|48882|52235|
|[hono](https://github.com/honojs/hono)|56073|75754|51975|40489|
|[baojs](https://github.com/mattreid1/baojs)|33797|37258|31533|32599|
  



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


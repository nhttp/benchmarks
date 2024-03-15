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
Created At : Fri Mar 15 2024, 12:36:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|49437|53349|44991|49971|
|[nhttp](https://github.com/nhttp/nhttp)|48523|51390|46920|47258|
|[hono](https://github.com/honojs/hono)|47626|50121|47887|44869|
|[oak](https://github.com/oakserver/oak)|27715|29211|27889|26045|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25783|33169|23147|21032|
|[fastify](https://github.com/fastify/fastify)|16781|17085|16840|16417|
|[koa](https://github.com/koajs/koa)|13609|14406|13122|13299|
|[express](https://github.com/expressjs/express)|6402|6528|6118|6559|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76158|86383|81183|60908|
|[nhttp](https://github.com/nhttp/nhttp)|64824|85848|52142|56482|
|[hono](https://github.com/honojs/hono)|63840|77563|56874|57083|
|[baojs](https://github.com/mattreid1/baojs)|33069|35250|32355|31603|
  



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


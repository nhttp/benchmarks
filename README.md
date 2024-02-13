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
Created At : Tue Feb 13 2024, 12:37:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47964|51168|46986|45739|
|[fast](https://github.com/danteissaias/fast)|47909|52302|45769|45655|
|[hono](https://github.com/honojs/hono)|46760|49522|47209|43548|
|[oak](https://github.com/oakserver/oak)|12204|12509|12286|11816|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24926|31915|22557|20305|
|[fastify](https://github.com/fastify/fastify)|16786|17354|16558|16447|
|[koa](https://github.com/koajs/koa)|14618|15448|13780|14627|
|[express](https://github.com/expressjs/express)|6345|6415|6151|6470|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69500|82053|73210|53236|
|[hono](https://github.com/honojs/hono)|61450|75965|55043|53342|
|[nhttp](https://github.com/nhttp/nhttp)|59993|83847|53264|42869|
|[baojs](https://github.com/mattreid1/baojs)|35827|38903|35569|33009|
  



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


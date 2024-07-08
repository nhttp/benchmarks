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
Created At : Mon Jul 08 2024, 12:43:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49161|52819|48926|45739|
|[hono](https://github.com/honojs/hono)|48695|51035|49970|45081|
|[fast](https://github.com/danteissaias/fast)|48440|52514|45018|47787|
|[oak](https://github.com/oakserver/oak)|27753|28790|27131|27338|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24838|30325|23104|21084|
|[fastify](https://github.com/fastify/fastify)|17391|17763|17308|17102|
|[koa](https://github.com/koajs/koa)|14673|15455|13918|14645|
|[express](https://github.com/expressjs/express)|6517|6630|6246|6675|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69433|83074|73594|51631|
|[nhttp](https://github.com/nhttp/nhttp)|62242|84192|53004|49529|
|[hono](https://github.com/honojs/hono)|61008|65174|60254|57596|
|[baojs](https://github.com/mattreid1/baojs)|34558|39137|32667|31869|
  



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


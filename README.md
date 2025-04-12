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
Created At : Sat Apr 12 2025, 12:54:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59676|64369|59777|54881|
|[nhttp](https://github.com/nhttp/nhttp)|57560|59938|57958|54783|
|[fast](https://github.com/danteissaias/fast)|54713|65324|46220|52594|
|[oak](https://github.com/oakserver/oak)|29004|28877|28954|29180|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38115|45492|35175|33678|
|[fastify](https://github.com/fastify/fastify)|24055|24240|24531|23394|
|[koa](https://github.com/koajs/koa)|16945|18178|15217|17440|
|[express](https://github.com/expressjs/express)|6675|6733|6499|6793|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77291|82206|79950|69716|
|[nhttp](https://github.com/nhttp/nhttp)|69248|93830|60395|53519|
|[hono](https://github.com/honojs/hono)|66457|74996|63802|60574|
|[baojs](https://github.com/mattreid1/baojs)|49417|54600|44583|49069|
  



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


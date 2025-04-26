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
Created At : Sat Apr 26 2025, 12:57:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58690|63646|58539|53885|
|[hono](https://github.com/honojs/hono)|56518|62983|57391|49180|
|[fast](https://github.com/danteissaias/fast)|53376|61362|45670|53096|
|[oak](https://github.com/oakserver/oak)|28477|29275|28169|27986|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39419|47414|38523|32319|
|[fastify](https://github.com/fastify/fastify)|24130|25952|24244|22194|
|[koa](https://github.com/koajs/koa)|16842|17730|15781|17016|
|[express](https://github.com/expressjs/express)|6423|6658|6193|6417|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77606|90903|72314|69601|
|[nhttp](https://github.com/nhttp/nhttp)|66423|91884|52449|54935|
|[hono](https://github.com/honojs/hono)|65168|78170|58301|59032|
|[baojs](https://github.com/mattreid1/baojs)|47832|54027|44152|45318|
  



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


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
Created At : Wed Mar 19 2025, 12:53:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60621|68336|56744|56783|
|[hono](https://github.com/honojs/hono)|57260|64683|58411|48685|
|[fast](https://github.com/danteissaias/fast)|55550|68387|48096|50166|
|[oak](https://github.com/oakserver/oak)|28330|28780|28632|27578|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39487|44313|38782|35366|
|[fastify](https://github.com/fastify/fastify)|23994|24667|23051|24263|
|[koa](https://github.com/koajs/koa)|17015|17882|15671|17493|
|[express](https://github.com/expressjs/express)|6940|7268|6630|6923|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77533|91348|75423|65827|
|[nhttp](https://github.com/nhttp/nhttp)|69885|92299|61610|55746|
|[hono](https://github.com/honojs/hono)|68194|78657|65090|60835|
|[baojs](https://github.com/mattreid1/baojs)|48564|52332|44507|48852|
  



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


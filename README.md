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
Created At : Sat Feb 22 2025, 12:48:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58519|63476|60422|51659|
|[nhttp](https://github.com/nhttp/nhttp)|57328|61790|56021|54174|
|[fast](https://github.com/danteissaias/fast)|54307|64425|49248|49247|
|[oak](https://github.com/oakserver/oak)|27708|28960|27215|26950|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40050|46051|40073|34025|
|[fastify](https://github.com/fastify/fastify)|25446|25881|26983|23475|
|[koa](https://github.com/koajs/koa)|17016|17779|16131|17138|
|[express](https://github.com/expressjs/express)|6956|7176|6634|7059|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80233|93157|78405|69136|
|[nhttp](https://github.com/nhttp/nhttp)|70875|94376|60528|57722|
|[hono](https://github.com/honojs/hono)|65170|75117|57425|62969|
|[baojs](https://github.com/mattreid1/baojs)|49619|52136|44119|52601|
  



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


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
Created At : Mon May 22 2023, 12:42:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53621|58946|52116|49800|
|[hono](https://github.com/honojs/hono)|52694|56208|54102|47771|
|[fast](https://github.com/danteissaias/fast)|47770|54643|39571|49095|
|[fastro](https://github.com/fastrodev/fastro)|44710|52657|48708|32766|
|[oak](https://github.com/oakserver/oak)|18096|19274|18264|16751|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37306|40193|37132|34593|
|[fastify](https://github.com/fastify/fastify)|29740|30863|29869|28487|
|[koa](https://github.com/koajs/koa)|18617|19427|17466|18959|
|[express](https://github.com/expressjs/express)|6327|6564|5728|6688|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61873|61508|63622|60489|
|[hono](https://github.com/honojs/hono)|60004|57872|60593|61547|
|[elysia](https://github.com/elysiajs/elysia)|59175|58985|59789|58752|
|[baojs](https://github.com/mattreid1/baojs)|50171|56060|43095|51357|
  



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


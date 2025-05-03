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
Created At : Sat May 03 2025, 12:58:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61106|67568|60413|55338|
|[hono](https://github.com/honojs/hono)|56840|63707|57123|49691|
|[fast](https://github.com/danteissaias/fast)|53707|64438|43870|52812|
|[oak](https://github.com/oakserver/oak)|28423|29309|27232|28729|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39469|45749|38288|34371|
|[fastify](https://github.com/fastify/fastify)|24071|23811|25192|23209|
|[koa](https://github.com/koajs/koa)|17023|17597|16693|16778|
|[express](https://github.com/expressjs/express)|6522|6562|6364|6641|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76422|94299|73728|61238|
|[nhttp](https://github.com/nhttp/nhttp)|69629|88343|60235|60309|
|[hono](https://github.com/honojs/hono)|65425|73421|62011|60843|
|[baojs](https://github.com/mattreid1/baojs)|49880|53656|47936|48049|
  



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


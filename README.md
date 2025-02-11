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
Created At : Tue Feb 11 2025, 12:50:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59363|67341|57266|53483|
|[hono](https://github.com/honojs/hono)|56280|62853|53258|52729|
|[fast](https://github.com/danteissaias/fast)|53862|62231|45555|53801|
|[oak](https://github.com/oakserver/oak)|28009|28062|27220|28744|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39352|46870|36749|34437|
|[fastify](https://github.com/fastify/fastify)|23670|23586|23929|23494|
|[koa](https://github.com/koajs/koa)|17307|18115|16258|17548|
|[express](https://github.com/expressjs/express)|6934|7202|6396|7205|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75927|93867|72276|61638|
|[nhttp](https://github.com/nhttp/nhttp)|68270|91792|54994|58025|
|[hono](https://github.com/honojs/hono)|64409|71764|61279|60185|
|[baojs](https://github.com/mattreid1/baojs)|46972|52773|43309|44835|
  



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


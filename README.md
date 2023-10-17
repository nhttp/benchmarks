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
Created At : Tue Oct 17 2023, 12:36:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59303|63699|59155|55055|
|[hono](https://github.com/honojs/hono)|56877|61293|57411|51928|
|[fast](https://github.com/danteissaias/fast)|53337|62494|40741|56777|
|[fastro](https://github.com/fastrodev/fastro)|25040|61689|6719|6711|
|[oak](https://github.com/oakserver/oak)|17888|19173|17870|16621|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38153|40951|37675|35832|
|[fastify](https://github.com/fastify/fastify)|27690|28582|26947|27540|
|[koa](https://github.com/koajs/koa)|19122|20182|17977|19206|
|[express](https://github.com/expressjs/express)|6100|6281|5706|6312|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59784|58795|60148|60410|
|[nhttp](https://github.com/nhttp/nhttp)|58681|56282|59637|60123|
|[elysia](https://github.com/elysiajs/elysia)|57719|57622|55974|59560|
|[baojs](https://github.com/mattreid1/baojs)|48192|52453|41861|50262|
  



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


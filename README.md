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
Created At : Thu May 16 2024, 12:38:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47727|50689|46437|46055|
|[hono](https://github.com/honojs/hono)|47600|50679|48464|43656|
|[fast](https://github.com/danteissaias/fast)|46815|50961|44303|45182|
|[oak](https://github.com/oakserver/oak)|27787|29175|27846|26340|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24217|30089|22497|20065|
|[fastify](https://github.com/fastify/fastify)|16298|16863|16176|15856|
|[koa](https://github.com/koajs/koa)|14210|14850|13415|14366|
|[express](https://github.com/expressjs/express)|6367|6538|6053|6509|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76798|82802|76793|70800|
|[nhttp](https://github.com/nhttp/nhttp)|55595|81140|40207|45437|
|[hono](https://github.com/honojs/hono)|53109|65971|47063|46293|
|[baojs](https://github.com/mattreid1/baojs)|36588|43766|31003|34994|
  



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


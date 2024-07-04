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
Created At : Thu Jul 04 2024, 12:41:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48159|50639|49480|44358|
|[nhttp](https://github.com/nhttp/nhttp)|47717|51681|47001|44468|
|[fast](https://github.com/danteissaias/fast)|47163|51528|44269|45691|
|[oak](https://github.com/oakserver/oak)|26485|27436|25602|26417|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24303|29743|22474|20692|
|[fastify](https://github.com/fastify/fastify)|16743|17300|16464|16464|
|[koa](https://github.com/koajs/koa)|14217|15065|13378|14207|
|[express](https://github.com/expressjs/express)|6250|6364|5959|6428|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68174|83064|71160|50299|
|[nhttp](https://github.com/nhttp/nhttp)|52471|80963|38803|37648|
|[hono](https://github.com/honojs/hono)|52467|62565|51612|43224|
|[baojs](https://github.com/mattreid1/baojs)|33864|38076|34118|29397|
  



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


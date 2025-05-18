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
Created At : Sun May 18 2025, 1:04:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59200|65931|58754|52914|
|[hono](https://github.com/honojs/hono)|59146|65261|62369|49809|
|[fast](https://github.com/danteissaias/fast)|55345|67224|47044|51766|
|[oak](https://github.com/oakserver/oak)|28517|29522|28192|27836|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39375|46089|38352|33683|
|[fastify](https://github.com/fastify/fastify)|25357|26629|25448|23994|
|[koa](https://github.com/koajs/koa)|17261|17521|17263|16998|
|[express](https://github.com/expressjs/express)|6510|6552|6332|6645|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83844|80079|82089|89365|
|[nhttp](https://github.com/nhttp/nhttp)|73787|96240|62186|62934|
|[hono](https://github.com/honojs/hono)|68199|81865|64567|58164|
|[baojs](https://github.com/mattreid1/baojs)|51504|56564|45927|52020|
  



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


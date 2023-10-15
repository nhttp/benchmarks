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
Created At : Sun Oct 15 2023, 12:38:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66129|66787|69706|61893|
|[hono](https://github.com/honojs/hono)|63508|67705|66177|56642|
|[fast](https://github.com/danteissaias/fast)|57772|69272|58864|45180|
|[fastro](https://github.com/fastrodev/fastro)|27848|68478|7439|7628|
|[oak](https://github.com/oakserver/oak)|19718|20539|19870|18746|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44152|47410|43530|41516|
|[fastify](https://github.com/fastify/fastify)|33133|33967|33232|32200|
|[koa](https://github.com/koajs/koa)|22388|23952|20902|22309|
|[express](https://github.com/expressjs/express)|7466|7674|7329|7395|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62851|61635|59705|67214|
|[hono](https://github.com/honojs/hono)|60518|60144|56368|65042|
|[elysia](https://github.com/elysiajs/elysia)|58926|61221|58775|56781|
|[baojs](https://github.com/mattreid1/baojs)|53768|60157|53876|47271|
  



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


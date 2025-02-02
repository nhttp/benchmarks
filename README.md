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
Created At : Sun Feb 02 2025, 12:57:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57231|61913|56690|53090|
|[nhttp](https://github.com/nhttp/nhttp)|57174|65926|58751|46845|
|[fast](https://github.com/danteissaias/fast)|55631|67102|48238|51554|
|[oak](https://github.com/oakserver/oak)|27968|28692|27900|27313|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38928|43791|38300|34693|
|[fastify](https://github.com/fastify/fastify)|24556|24479|23268|25922|
|[koa](https://github.com/koajs/koa)|17340|18139|16421|17460|
|[express](https://github.com/expressjs/express)|6967|7203|6493|7206|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79223|92240|77773|67657|
|[nhttp](https://github.com/nhttp/nhttp)|71648|93772|57758|63414|
|[hono](https://github.com/honojs/hono)|67757|77747|62884|62639|
|[baojs](https://github.com/mattreid1/baojs)|50870|54507|48609|49493|
  



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


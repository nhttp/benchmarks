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
Created At : Mon Jul 17 2023, 12:54:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49782|53571|48957|46819|
|[hono](https://github.com/honojs/hono)|48698|51159|49819|45117|
|[fastro](https://github.com/fastrodev/fastro)|18775|47770|3764|4792|
|[oak](https://github.com/oakserver/oak)|14828|15394|14938|14152|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31279|33416|31280|29141|
|[fastify](https://github.com/fastify/fastify)|25875|26668|25848|25109|
|[koa](https://github.com/koajs/koa)|15664|16510|14611|15872|
|[express](https://github.com/expressjs/express)|5420|5644|5247|5369|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55475|55130|57143|54152|
|[hono](https://github.com/honojs/hono)|54815|53937|56058|54449|
|[elysia](https://github.com/elysiajs/elysia)|53654|52611|52875|55477|
|[baojs](https://github.com/mattreid1/baojs)|44712|50315|36795|47027|
  



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


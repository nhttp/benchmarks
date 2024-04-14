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
Created At : Sun Apr 14 2024, 12:43:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48387|52271|45990|46901|
|[hono](https://github.com/honojs/hono)|48197|51542|48342|44706|
|[nhttp](https://github.com/nhttp/nhttp)|48017|51731|46680|45641|
|[oak](https://github.com/oakserver/oak)|27693|29252|27711|26117|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25509|31933|23266|21329|
|[fastify](https://github.com/fastify/fastify)|16868|17291|16477|16836|
|[koa](https://github.com/koajs/koa)|14593|15153|13986|14640|
|[express](https://github.com/expressjs/express)|6458|6562|6357|6454|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75211|83642|76621|65370|
|[nhttp](https://github.com/nhttp/nhttp)|61225|84703|48885|50088|
|[hono](https://github.com/honojs/hono)|56098|62317|54418|51558|
|[baojs](https://github.com/mattreid1/baojs)|36324|39763|36093|33116|
  



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


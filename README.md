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
Created At : Sun Apr 13 2025, 2:24:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60969|70352|62421|50135|
|[nhttp](https://github.com/nhttp/nhttp)|56891|61443|55637|53594|
|[fast](https://github.com/danteissaias/fast)|56143|68607|46916|52907|
|[oak](https://github.com/oakserver/oak)|28401|29558|26900|28746|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37239|43347|36855|31515|
|[fastify](https://github.com/fastify/fastify)|24821|25102|24527|24834|
|[koa](https://github.com/koajs/koa)|16914|17484|16174|17085|
|[express](https://github.com/expressjs/express)|6494|6592|6328|6561|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76281|87199|72835|68809|
|[nhttp](https://github.com/nhttp/nhttp)|72814|96075|60807|61560|
|[hono](https://github.com/honojs/hono)|65524|72797|64520|59254|
|[baojs](https://github.com/mattreid1/baojs)|47706|51644|45478|45996|
  



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


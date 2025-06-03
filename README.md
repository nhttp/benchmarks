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
Created At : Tue Jun 03 2025, 1:05:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56258|60738|58117|49920|
|[hono](https://github.com/honojs/hono)|55933|58984|57998|50817|
|[fast](https://github.com/danteissaias/fast)|53294|59409|49904|50569|
|[oak](https://github.com/oakserver/oak)|27398|28691|26500|27003|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39872|47651|39276|32689|
|[fastify](https://github.com/fastify/fastify)|24691|25029|24543|24501|
|[koa](https://github.com/koajs/koa)|17002|17660|16701|16646|
|[express](https://github.com/expressjs/express)|6538|6746|6174|6695|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80511|92494|73072|75968|
|[nhttp](https://github.com/nhttp/nhttp)|66207|87909|55419|55293|
|[hono](https://github.com/honojs/hono)|59313|65642|56197|56101|
|[baojs](https://github.com/mattreid1/baojs)|45688|47316|43425|46324|
  



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


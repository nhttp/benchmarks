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
Created At : Fri Feb 07 2025, 12:50:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57434|65018|55256|52029|
|[hono](https://github.com/honojs/hono)|56434|61895|56866|50540|
|[fast](https://github.com/danteissaias/fast)|52664|61132|47211|49649|
|[oak](https://github.com/oakserver/oak)|27699|28433|27045|27620|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39718|47108|37595|34451|
|[fastify](https://github.com/fastify/fastify)|24475|25930|24290|23206|
|[koa](https://github.com/koajs/koa)|17102|17849|15996|17460|
|[express](https://github.com/expressjs/express)|7088|7226|6613|7425|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74270|86908|71156|64745|
|[nhttp](https://github.com/nhttp/nhttp)|65881|87084|56500|54059|
|[hono](https://github.com/honojs/hono)|60496|68543|56816|56128|
|[baojs](https://github.com/mattreid1/baojs)|46652|51970|43260|44727|
  



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


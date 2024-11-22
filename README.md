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
Created At : Fri Nov 22 2024, 12:53:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47603|51681|47099|44030|
|[hono](https://github.com/honojs/hono)|47516|50701|48573|43274|
|[fast](https://github.com/danteissaias/fast)|47118|51622|44236|45496|
|[oak](https://github.com/oakserver/oak)|25800|26568|25162|25669|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23097|27737|21787|19768|
|[fastify](https://github.com/fastify/fastify)|16915|17229|16913|16604|
|[koa](https://github.com/koajs/koa)|13920|14788|12868|14105|
|[express](https://github.com/expressjs/express)|6284|6518|5925|6408|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69389|82479|68629|57059|
|[nhttp](https://github.com/nhttp/nhttp)|52728|78965|35527|43692|
|[hono](https://github.com/honojs/hono)|49176|61757|37279|48491|
|[baojs](https://github.com/mattreid1/baojs)|31048|34599|31417|27128|
  



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


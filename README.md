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
Created At : Sun Mar 24 2024, 12:41:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47526|50613|46624|45341|
|[fast](https://github.com/danteissaias/fast)|47456|50859|44773|46736|
|[hono](https://github.com/honojs/hono)|47207|50242|47659|43721|
|[oak](https://github.com/oakserver/oak)|27130|28774|27016|25601|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24747|30518|23019|20704|
|[fastify](https://github.com/fastify/fastify)|16619|16810|16557|16489|
|[koa](https://github.com/koajs/koa)|14726|15610|13946|14622|
|[express](https://github.com/expressjs/express)|6462|6675|6286|6424|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68787|82466|67108|56787|
|[nhttp](https://github.com/nhttp/nhttp)|59956|83082|48708|48079|
|[hono](https://github.com/honojs/hono)|47815|63558|41839|38048|
|[baojs](https://github.com/mattreid1/baojs)|31081|35254|31253|26737|
  



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


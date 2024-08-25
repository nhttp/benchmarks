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
Created At : Sun Aug 25 2024, 12:48:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48460|51954|47683|45744|
|[hono](https://github.com/honojs/hono)|48231|51709|49178|43807|
|[fast](https://github.com/danteissaias/fast)|48127|52150|45434|46798|
|[oak](https://github.com/oakserver/oak)|26548|27496|25881|26267|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24738|30722|22497|20994|
|[fastify](https://github.com/fastify/fastify)|16629|17160|16260|16468|
|[koa](https://github.com/koajs/koa)|13980|14783|13012|14145|
|[express](https://github.com/expressjs/express)|6343|6507|6037|6484|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77156|82286|82086|67095|
|[hono](https://github.com/honojs/hono)|62016|73144|62252|50652|
|[nhttp](https://github.com/nhttp/nhttp)|61583|81899|50356|52495|
|[baojs](https://github.com/mattreid1/baojs)|36946|44237|36182|30419|
  



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


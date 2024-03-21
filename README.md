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
Created At : Thu Mar 21 2024, 12:37:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|49766|52533|51079|45685|
|[nhttp](https://github.com/nhttp/nhttp)|48220|51533|46914|46214|
|[fast](https://github.com/danteissaias/fast)|47873|51342|45934|46343|
|[oak](https://github.com/oakserver/oak)|28234|30018|28382|26301|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24827|30762|23097|20622|
|[fastify](https://github.com/fastify/fastify)|16610|16774|16899|16156|
|[koa](https://github.com/koajs/koa)|14700|15502|13807|14790|
|[express](https://github.com/expressjs/express)|6392|6550|6145|6480|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77725|86590|80723|65861|
|[nhttp](https://github.com/nhttp/nhttp)|67872|85708|60747|57160|
|[hono](https://github.com/honojs/hono)|59800|71481|61468|46452|
|[baojs](https://github.com/mattreid1/baojs)|35196|39784|33679|32124|
  



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


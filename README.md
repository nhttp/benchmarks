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
Created At : Sun Feb 16 2025, 12:59:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60283|70390|58075|52385|
|[hono](https://github.com/honojs/hono)|57687|64629|58082|50350|
|[fast](https://github.com/danteissaias/fast)|56625|67295|53091|49489|
|[oak](https://github.com/oakserver/oak)|27051|28224|25945|26984|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41426|49235|38739|36304|
|[fastify](https://github.com/fastify/fastify)|24757|24617|26086|23569|
|[koa](https://github.com/koajs/koa)|16965|18657|15646|16593|
|[express](https://github.com/expressjs/express)|6899|7176|6332|7190|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78778|91265|78162|66908|
|[nhttp](https://github.com/nhttp/nhttp)|71919|97184|61238|57335|
|[hono](https://github.com/honojs/hono)|66240|76783|60501|61437|
|[baojs](https://github.com/mattreid1/baojs)|49956|55167|46010|48691|
  



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


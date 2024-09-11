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
Created At : Wed Sep 11 2024, 12:45:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48345|52988|47186|44862|
|[hono](https://github.com/honojs/hono)|48116|51469|48813|44067|
|[fast](https://github.com/danteissaias/fast)|47498|50901|43812|47782|
|[oak](https://github.com/oakserver/oak)|25993|26909|25462|25609|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24435|30529|22260|20516|
|[fastify](https://github.com/fastify/fastify)|16789|17330|16737|16301|
|[koa](https://github.com/koajs/koa)|13925|14838|12863|14075|
|[express](https://github.com/expressjs/express)|6369|6473|6083|6552|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73681|81715|78962|60367|
|[nhttp](https://github.com/nhttp/nhttp)|63375|81762|49319|59044|
|[hono](https://github.com/honojs/hono)|59765|73827|52703|52766|
|[baojs](https://github.com/mattreid1/baojs)|35797|39736|33072|34584|
  



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


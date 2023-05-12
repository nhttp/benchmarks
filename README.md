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
Created At : Fri May 12 2023, 12:40:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63186|68634|62372|58552|
|[hono](https://github.com/honojs/hono)|60508|65982|62453|53088|
|[fast](https://github.com/danteissaias/fast)|52427|67180|55835|34266|
|[fastro](https://github.com/fastrodev/fastro)|51678|65967|50004|39064|
|[oak](https://github.com/oakserver/oak)|19648|21059|19531|18353|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44171|47312|44141|41059|
|[fastify](https://github.com/fastify/fastify)|35824|37411|35480|34581|
|[koa](https://github.com/koajs/koa)|21853|22596|20763|22201|
|[express](https://github.com/expressjs/express)|7774|8007|7400|7916|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|70612|68115|72327|71395|
|[hono](https://github.com/honojs/hono)|67157|67692|67013|66767|
|[elysia](https://github.com/elysiajs/elysia)|67093|68108|67410|65762|
|[baojs](https://github.com/mattreid1/baojs)|58528|65535|61747|48301|
  



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


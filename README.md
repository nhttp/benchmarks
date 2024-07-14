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
Created At : Sun Jul 14 2024, 12:47:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47120|50675|46441|44245|
|[hono](https://github.com/honojs/hono)|46809|49562|47800|43065|
|[fast](https://github.com/danteissaias/fast)|46751|50918|44529|44806|
|[oak](https://github.com/oakserver/oak)|25903|26733|25279|25696|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24444|30667|22432|20234|
|[fastify](https://github.com/fastify/fastify)|17056|17524|17033|16612|
|[koa](https://github.com/koajs/koa)|14575|15476|13869|14380|
|[express](https://github.com/expressjs/express)|6528|6585|6270|6730|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66399|83650|72606|42941|
|[nhttp](https://github.com/nhttp/nhttp)|63950|85608|53624|52619|
|[hono](https://github.com/honojs/hono)|57069|71026|48221|51960|
|[baojs](https://github.com/mattreid1/baojs)|33830|39331|29367|32792|
  



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


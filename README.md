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
Created At : Tue May 28 2024, 12:39:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48758|52540|47955|45779|
|[fast](https://github.com/danteissaias/fast)|47666|51265|45690|46043|
|[hono](https://github.com/honojs/hono)|47312|49724|47962|44250|
|[oak](https://github.com/oakserver/oak)|27342|28893|27533|25599|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25056|31833|22633|20702|
|[fastify](https://github.com/fastify/fastify)|16780|17208|16670|16463|
|[koa](https://github.com/koajs/koa)|14508|15313|13579|14633|
|[express](https://github.com/expressjs/express)|6390|6576|6224|6370|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72934|85175|81072|52556|
|[hono](https://github.com/honojs/hono)|63118|72981|67088|49285|
|[nhttp](https://github.com/nhttp/nhttp)|60541|83244|50657|47722|
|[baojs](https://github.com/mattreid1/baojs)|37349|42351|37023|32673|
  



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


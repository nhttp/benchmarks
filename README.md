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
Created At : Sun May 04 2025, 1:05:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60422|68112|58667|54487|
|[hono](https://github.com/honojs/hono)|58136|59855|62081|52473|
|[fast](https://github.com/danteissaias/fast)|51744|60043|44004|51185|
|[oak](https://github.com/oakserver/oak)|27731|28113|27282|27797|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39772|47232|35381|36704|
|[fastify](https://github.com/fastify/fastify)|24823|25085|24987|24396|
|[koa](https://github.com/koajs/koa)|16902|17699|16547|16461|
|[express](https://github.com/expressjs/express)|6529|6604|6327|6656|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76197|86120|75807|66664|
|[nhttp](https://github.com/nhttp/nhttp)|70241|94608|57973|58141|
|[hono](https://github.com/honojs/hono)|65844|74266|60972|62293|
|[baojs](https://github.com/mattreid1/baojs)|47723|52218|40472|50480|
  



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


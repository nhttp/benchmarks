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
Created At : Sun Jun 16 2024, 12:44:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47898|52038|47203|44453|
|[hono](https://github.com/honojs/hono)|47783|51339|48518|43492|
|[fast](https://github.com/danteissaias/fast)|46829|50472|44827|45189|
|[oak](https://github.com/oakserver/oak)|26070|27189|25510|25512|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24178|29931|22133|20471|
|[fastify](https://github.com/fastify/fastify)|16712|17121|16567|16449|
|[koa](https://github.com/koajs/koa)|13963|14425|13287|14176|
|[express](https://github.com/expressjs/express)|6157|6241|5955|6276|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68921|82698|73990|50074|
|[nhttp](https://github.com/nhttp/nhttp)|56456|84899|44141|40327|
|[hono](https://github.com/honojs/hono)|55876|67872|52344|47411|
|[baojs](https://github.com/mattreid1/baojs)|32392|36568|31725|28883|
  



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


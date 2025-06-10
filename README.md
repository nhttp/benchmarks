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
Created At : Tue Jun 10 2025, 1:05:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59459|68860|58433|51085|
|[hono](https://github.com/honojs/hono)|54038|57095|56632|48387|
|[fast](https://github.com/danteissaias/fast)|53164|64159|45200|50132|
|[oak](https://github.com/oakserver/oak)|26795|27782|25380|27224|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37882|43783|34729|35134|
|[fastify](https://github.com/fastify/fastify)|23996|23896|25107|22985|
|[koa](https://github.com/koajs/koa)|16975|17038|17035|16852|
|[express](https://github.com/expressjs/express)|6455|6607|6158|6600|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|84386|95408|75040|82711|
|[nhttp](https://github.com/nhttp/nhttp)|68711|92528|57697|55907|
|[hono](https://github.com/honojs/hono)|64181|73839|60183|58522|
|[baojs](https://github.com/mattreid1/baojs)|47994|53577|44796|45609|
  



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


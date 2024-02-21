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
Created At : Wed Feb 21 2024, 12:36:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47249|50558|44378|46812|
|[nhttp](https://github.com/nhttp/nhttp)|47018|51093|45875|44085|
|[hono](https://github.com/honojs/hono)|46035|48450|46679|42976|
|[oak](https://github.com/oakserver/oak)|27251|28636|27471|25646|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24386|30457|22500|20200|
|[fastify](https://github.com/fastify/fastify)|16029|16664|15768|15654|
|[koa](https://github.com/koajs/koa)|14421|15352|13441|14471|
|[express](https://github.com/expressjs/express)|6439|6614|6125|6577|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70055|79654|72736|57775|
|[hono](https://github.com/honojs/hono)|62966|73695|61043|54161|
|[nhttp](https://github.com/nhttp/nhttp)|61664|81928|52666|50398|
|[baojs](https://github.com/mattreid1/baojs)|36818|44308|35117|31030|
  



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


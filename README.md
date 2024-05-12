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
Created At : Sun May 12 2024, 12:42:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47492|50441|47089|44945|
|[fast](https://github.com/danteissaias/fast)|47136|52064|43642|45702|
|[hono](https://github.com/honojs/hono)|46753|49826|47600|42832|
|[oak](https://github.com/oakserver/oak)|27103|28380|27325|25605|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24229|32180|21578|18928|
|[fastify](https://github.com/fastify/fastify)|15602|15933|15158|15716|
|[koa](https://github.com/koajs/koa)|14140|14350|13613|14457|
|[express](https://github.com/expressjs/express)|6072|6147|5835|6233|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68604|78481|71154|56176|
|[nhttp](https://github.com/nhttp/nhttp)|53998|80085|41150|40758|
|[hono](https://github.com/honojs/hono)|48874|62765|44246|39610|
|[baojs](https://github.com/mattreid1/baojs)|31884|36100|31517|28034|
  



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


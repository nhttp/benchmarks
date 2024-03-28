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
Created At : Thu Mar 28 2024, 12:36:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48200|51018|44302|49280|
|[hono](https://github.com/honojs/hono)|47996|50025|48851|45112|
|[nhttp](https://github.com/nhttp/nhttp)|47936|51431|46652|45724|
|[oak](https://github.com/oakserver/oak)|27623|29299|27755|25814|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24943|31612|23120|20097|
|[fastify](https://github.com/fastify/fastify)|16565|17163|16483|16048|
|[koa](https://github.com/koajs/koa)|14530|15341|13604|14644|
|[express](https://github.com/expressjs/express)|6410|6507|6177|6545|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76006|84961|78452|64604|
|[nhttp](https://github.com/nhttp/nhttp)|57061|82412|45786|42986|
|[hono](https://github.com/honojs/hono)|50008|56354|49436|44235|
|[baojs](https://github.com/mattreid1/baojs)|36940|42982|34623|33215|
  



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


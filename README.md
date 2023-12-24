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
Created At : Sun Dec 24 2023, 12:40:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45946|49294|44497|44048|
|[fast](https://github.com/danteissaias/fast)|45710|49722|43606|43803|
|[hono](https://github.com/honojs/hono)|44646|47149|45474|41314|
|[fastro](https://github.com/fastrodev/fastro)|23313|47462|11290|11187|
|[oak](https://github.com/oakserver/oak)|20560|21503|20462|19716|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24102|29782|22337|20188|
|[fastify](https://github.com/fastify/fastify)|15245|15405|15511|14820|
|[koa](https://github.com/koajs/koa)|13916|14771|13232|13745|
|[express](https://github.com/expressjs/express)|6400|6523|6081|6595|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67382|81470|69600|51077|
|[hono](https://github.com/honojs/hono)|63163|73917|61404|54168|
|[nhttp](https://github.com/nhttp/nhttp)|60579|80793|51526|49419|
|[baojs](https://github.com/mattreid1/baojs)|35354|41368|34556|30137|
  



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


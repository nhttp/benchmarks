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
Created At : Sun Jun 23 2024, 12:44:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48371|52306|48889|43919|
|[nhttp](https://github.com/nhttp/nhttp)|48214|52078|47238|45325|
|[fast](https://github.com/danteissaias/fast)|47786|51799|45368|46192|
|[oak](https://github.com/oakserver/oak)|27283|28199|26862|26787|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24427|29811|22587|20883|
|[fastify](https://github.com/fastify/fastify)|17082|17560|16915|16770|
|[koa](https://github.com/koajs/koa)|14379|15233|13586|14317|
|[express](https://github.com/expressjs/express)|6437|6569|6129|6612|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70318|83647|77295|50012|
|[nhttp](https://github.com/nhttp/nhttp)|61764|86294|51199|47799|
|[hono](https://github.com/honojs/hono)|61555|81388|57671|45605|
|[baojs](https://github.com/mattreid1/baojs)|35920|39698|31101|36962|
  



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


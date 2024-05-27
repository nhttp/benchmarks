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
Created At : Mon May 27 2024, 12:40:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48173|52211|46032|46276|
|[hono](https://github.com/honojs/hono)|47402|50351|48181|43675|
|[nhttp](https://github.com/nhttp/nhttp)|47092|50131|45745|45399|
|[oak](https://github.com/oakserver/oak)|27581|29076|27602|26065|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24525|30591|22708|20276|
|[fastify](https://github.com/fastify/fastify)|15919|16416|15438|15904|
|[koa](https://github.com/koajs/koa)|14364|15106|13604|14382|
|[express](https://github.com/expressjs/express)|6306|6404|6142|6371|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72314|82352|74524|60065|
|[hono](https://github.com/honojs/hono)|57472|74845|48827|48744|
|[nhttp](https://github.com/nhttp/nhttp)|56789|84533|47141|38694|
|[baojs](https://github.com/mattreid1/baojs)|35420|40322|35684|30254|
  



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


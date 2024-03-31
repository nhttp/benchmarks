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
Created At : Sun Mar 31 2024, 12:41:21 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48138|51647|46596|46172|
|[fast](https://github.com/danteissaias/fast)|47703|51431|44890|46788|
|[hono](https://github.com/honojs/hono)|47392|50714|47742|43721|
|[oak](https://github.com/oakserver/oak)|27461|29048|27595|25740|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25194|32412|22809|20360|
|[fastify](https://github.com/fastify/fastify)|16574|16927|16330|16465|
|[koa](https://github.com/koajs/koa)|14277|15108|13489|14234|
|[express](https://github.com/expressjs/express)|6368|6547|6071|6487|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71191|83480|67967|62126|
|[nhttp](https://github.com/nhttp/nhttp)|63392|82549|51233|56395|
|[hono](https://github.com/honojs/hono)|60233|77254|55190|48255|
|[baojs](https://github.com/mattreid1/baojs)|35968|39560|32081|36262|
  



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


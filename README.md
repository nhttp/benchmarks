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
Created At : Wed Dec 04 2024, 12:55:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48216|52401|47981|44265|
|[fast](https://github.com/danteissaias/fast)|48169|52301|44472|47735|
|[hono](https://github.com/honojs/hono)|47436|50296|48366|43646|
|[oak](https://github.com/oakserver/oak)|26342|27113|25848|26066|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24291|30676|22127|20069|
|[fastify](https://github.com/fastify/fastify)|16910|17425|16804|16502|
|[koa](https://github.com/koajs/koa)|14099|14889|13118|14289|
|[express](https://github.com/expressjs/express)|6429|6628|6007|6651|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74308|84634|77679|60612|
|[nhttp](https://github.com/nhttp/nhttp)|59488|82977|41297|54191|
|[hono](https://github.com/honojs/hono)|52887|65823|43446|49393|
|[baojs](https://github.com/mattreid1/baojs)|34523|41693|31516|30359|
  



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


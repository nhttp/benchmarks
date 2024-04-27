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
Created At : Sat Apr 27 2024, 12:37:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48210|51404|47022|46205|
|[fast](https://github.com/danteissaias/fast)|48170|51750|44859|47900|
|[hono](https://github.com/honojs/hono)|47594|50133|48039|44610|
|[oak](https://github.com/oakserver/oak)|27697|29481|28011|25600|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24151|30119|22248|20086|
|[fastify](https://github.com/fastify/fastify)|16258|16512|16245|16017|
|[koa](https://github.com/koajs/koa)|14277|15087|13454|14289|
|[express](https://github.com/expressjs/express)|6338|6431|6119|6463|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77500|85621|78275|68603|
|[hono](https://github.com/honojs/hono)|62183|72594|55472|58484|
|[nhttp](https://github.com/nhttp/nhttp)|60346|85380|53031|42626|
|[baojs](https://github.com/mattreid1/baojs)|38144|44580|36331|33522|
  



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


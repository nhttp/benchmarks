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
Created At : Sun Sep 29 2024, 12:54:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47889|51289|47364|45014|
|[hono](https://github.com/honojs/hono)|47143|50343|47800|43287|
|[fast](https://github.com/danteissaias/fast)|46876|51738|43050|45839|
|[oak](https://github.com/oakserver/oak)|25589|26580|25000|25187|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24364|30998|22058|20037|
|[fastify](https://github.com/fastify/fastify)|16559|16999|16488|16189|
|[koa](https://github.com/koajs/koa)|13464|14192|12386|13814|
|[express](https://github.com/expressjs/express)|6140|6327|5724|6368|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65107|81615|67729|45977|
|[nhttp](https://github.com/nhttp/nhttp)|58265|82598|45474|46722|
|[hono](https://github.com/honojs/hono)|55501|69075|50880|46547|
|[baojs](https://github.com/mattreid1/baojs)|35210|39980|35404|30246|
  



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


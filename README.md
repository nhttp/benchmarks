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
Created At : Sat Jun 14 2025, 1:00:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61144|65691|62961|54780|
|[hono](https://github.com/honojs/hono)|58504|63208|63098|49206|
|[fast](https://github.com/danteissaias/fast)|54719|61310|51076|51770|
|[oak](https://github.com/oakserver/oak)|27855|28391|27251|27924|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40615|48396|39550|33900|
|[fastify](https://github.com/fastify/fastify)|25547|25314|26035|25292|
|[koa](https://github.com/koajs/koa)|16997|17423|16836|16733|
|[express](https://github.com/expressjs/express)|6583|6593|6481|6675|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82039|89410|78985|77721|
|[nhttp](https://github.com/nhttp/nhttp)|70865|93535|64145|54914|
|[hono](https://github.com/honojs/hono)|66809|78338|65589|56500|
|[baojs](https://github.com/mattreid1/baojs)|50144|57186|46026|47219|
  



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


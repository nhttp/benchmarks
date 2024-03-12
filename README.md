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
Created At : Tue Mar 12 2024, 12:35:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48181|52820|44942|46782|
|[nhttp](https://github.com/nhttp/nhttp)|47977|50978|47068|45884|
|[hono](https://github.com/honojs/hono)|47018|50247|47583|43223|
|[oak](https://github.com/oakserver/oak)|27595|29301|27694|25789|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24368|31241|22220|19642|
|[fastify](https://github.com/fastify/fastify)|16418|16953|16059|16241|
|[koa](https://github.com/koajs/koa)|14537|15186|13760|14666|
|[express](https://github.com/expressjs/express)|6400|6646|6022|6531|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73086|82498|77891|58869|
|[nhttp](https://github.com/nhttp/nhttp)|59951|85924|50144|43785|
|[hono](https://github.com/honojs/hono)|53268|64025|51343|44435|
|[baojs](https://github.com/mattreid1/baojs)|32932|37060|31499|30238|
  



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


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
Created At : Sat Jan 20 2024, 12:38:41 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47599|51145|46275|45377|
|[fast](https://github.com/danteissaias/fast)|47095|50478|45200|45608|
|[hono](https://github.com/honojs/hono)|46776|49174|47174|43981|
|[fastro](https://github.com/fastrodev/fastro)|23744|49694|10417|11122|
|[oak](https://github.com/oakserver/oak)|23032|23980|23082|22034|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24818|32124|22655|19674|
|[fastify](https://github.com/fastify/fastify)|16791|17317|16511|16546|
|[koa](https://github.com/koajs/koa)|14499|15462|13595|14440|
|[express](https://github.com/expressjs/express)|6366|6389|6157|6551|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73191|79639|79572|60363|
|[nhttp](https://github.com/nhttp/nhttp)|63583|89948|54776|46026|
|[hono](https://github.com/honojs/hono)|58722|74386|54089|47692|
|[baojs](https://github.com/mattreid1/baojs)|32775|36330|32270|29725|
  



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


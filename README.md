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
Created At : Sat Aug 10 2024, 12:43:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47074|50200|47174|43847|
|[hono](https://github.com/honojs/hono)|46438|49295|47465|42553|
|[fast](https://github.com/danteissaias/fast)|46278|49733|43611|45490|
|[oak](https://github.com/oakserver/oak)|26332|27342|25737|25918|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24612|30589|22777|20469|
|[fastify](https://github.com/fastify/fastify)|17354|17742|17195|17124|
|[koa](https://github.com/koajs/koa)|14435|15180|13561|14564|
|[express](https://github.com/expressjs/express)|6436|6566|6195|6546|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69441|84612|72062|51648|
|[nhttp](https://github.com/nhttp/nhttp)|63518|84262|53435|52858|
|[hono](https://github.com/honojs/hono)|58364|70317|59533|45241|
|[baojs](https://github.com/mattreid1/baojs)|38795|42182|37006|37198|
  



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


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
Created At : Fri Jan 19 2024, 12:39:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47735|50509|46106|46590|
|[nhttp](https://github.com/nhttp/nhttp)|47690|51181|46652|45237|
|[hono](https://github.com/honojs/hono)|46523|48956|46681|43931|
|[fastro](https://github.com/fastrodev/fastro)|23950|49200|11710|10941|
|[oak](https://github.com/oakserver/oak)|22386|23565|22382|21210|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24833|30846|23105|20548|
|[fastify](https://github.com/fastify/fastify)|16642|17141|16473|16313|
|[koa](https://github.com/koajs/koa)|14454|15146|13838|14377|
|[express](https://github.com/expressjs/express)|6426|6559|6115|6604|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71732|85197|77186|52812|
|[hono](https://github.com/honojs/hono)|60648|69323|58904|53716|
|[nhttp](https://github.com/nhttp/nhttp)|56585|82883|47611|39260|
|[baojs](https://github.com/mattreid1/baojs)|35584|41377|33132|32242|
  



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


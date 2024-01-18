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
Created At : Thu Jan 18 2024, 12:39:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47625|50655|44721|47500|
|[nhttp](https://github.com/nhttp/nhttp)|47457|50583|46448|45341|
|[hono](https://github.com/honojs/hono)|46069|48366|46711|43130|
|[fastro](https://github.com/fastrodev/fastro)|23103|49528|9898|9882|
|[oak](https://github.com/oakserver/oak)|22291|23641|22087|21144|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24597|30757|22895|20140|
|[fastify](https://github.com/fastify/fastify)|17010|17589|16833|16608|
|[koa](https://github.com/koajs/koa)|14375|15205|13545|14375|
|[express](https://github.com/expressjs/express)|6365|6549|6145|6402|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69699|81494|72449|55155|
|[hono](https://github.com/honojs/hono)|61547|73261|56418|54961|
|[nhttp](https://github.com/nhttp/nhttp)|58211|85721|47742|41171|
|[baojs](https://github.com/mattreid1/baojs)|37444|44320|36229|31783|
  



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


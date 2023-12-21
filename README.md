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
Created At : Thu Dec 21 2023, 12:37:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46742|50729|44986|44512|
|[fast](https://github.com/danteissaias/fast)|45743|49663|44195|43372|
|[hono](https://github.com/honojs/hono)|43945|46553|43898|41383|
|[fastro](https://github.com/fastrodev/fastro)|23427|48123|11568|10590|
|[oak](https://github.com/oakserver/oak)|20186|21291|20021|19247|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24378|30525|22661|19947|
|[fastify](https://github.com/fastify/fastify)|15136|15750|14937|14720|
|[koa](https://github.com/koajs/koa)|14035|14445|13165|14494|
|[express](https://github.com/expressjs/express)|6270|6341|5982|6488|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70821|79520|72401|60543|
|[nhttp](https://github.com/nhttp/nhttp)|58081|77826|45585|50831|
|[hono](https://github.com/honojs/hono)|57983|66709|58861|48380|
|[baojs](https://github.com/mattreid1/baojs)|34385|38574|33530|31052|
  



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


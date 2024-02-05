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
Created At : Mon Feb 05 2024, 12:39:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47857|50990|46779|45802|
|[fast](https://github.com/danteissaias/fast)|47399|50846|44669|46682|
|[hono](https://github.com/honojs/hono)|46752|49252|47619|43385|
|[oak](https://github.com/oakserver/oak)|27099|28487|27147|25662|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25368|32457|23068|20578|
|[fastify](https://github.com/fastify/fastify)|16385|16739|16434|15982|
|[koa](https://github.com/koajs/koa)|14139|14766|13468|14184|
|[express](https://github.com/expressjs/express)|6338|6525|6081|6408|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72541|81980|77659|57984|
|[nhttp](https://github.com/nhttp/nhttp)|65495|83818|61656|51012|
|[hono](https://github.com/honojs/hono)|61316|71724|58626|53597|
|[baojs](https://github.com/mattreid1/baojs)|35296|40815|33575|31497|
  



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


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
Created At : Thu Dec 12 2024, 12:54:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47772|51834|47808|43674|
|[fast](https://github.com/danteissaias/fast)|47124|50978|44197|46196|
|[hono](https://github.com/honojs/hono)|46852|49641|47933|42981|
|[oak](https://github.com/oakserver/oak)|26138|27073|25651|25690|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24416|30573|22488|20187|
|[fastify](https://github.com/fastify/fastify)|16773|17115|16680|16524|
|[koa](https://github.com/koajs/koa)|14186|14834|13055|14670|
|[express](https://github.com/expressjs/express)|6206|6379|5855|6385|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75254|79841|77799|68123|
|[nhttp](https://github.com/nhttp/nhttp)|62274|82956|50222|53644|
|[hono](https://github.com/honojs/hono)|60892|76636|50164|55875|
|[baojs](https://github.com/mattreid1/baojs)|34942|41564|32192|31071|
  



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


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
Created At : Mon May 13 2024, 12:40:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49178|53155|47671|46707|
|[fast](https://github.com/danteissaias/fast)|48189|53116|45224|46227|
|[hono](https://github.com/honojs/hono)|47536|50328|48117|44163|
|[oak](https://github.com/oakserver/oak)|28263|29806|28422|26560|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25236|31866|23071|20770|
|[fastify](https://github.com/fastify/fastify)|17122|17442|17127|16797|
|[koa](https://github.com/koajs/koa)|14532|15345|13605|14645|
|[express](https://github.com/expressjs/express)|6476|6637|6155|6635|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74357|85697|78513|58862|
|[nhttp](https://github.com/nhttp/nhttp)|60993|85312|47041|50627|
|[hono](https://github.com/honojs/hono)|60920|72023|57017|53720|
|[baojs](https://github.com/mattreid1/baojs)|37982|41660|37403|34882|
  



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


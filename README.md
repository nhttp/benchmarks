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
Created At : Sun Oct 08 2023, 12:38:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52470|53756|53009|50646|
|[fast](https://github.com/danteissaias/fast)|44302|56561|38242|38104|
|[oak](https://github.com/oakserver/oak)|15959|17097|15845|14934|
|[fastro](https://github.com/fastrodev/fastro)|0|0|0|0|
|[hono](https://github.com/honojs/hono)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|34387|37305|33936|31921|
|[fastify](https://github.com/fastify/fastify)|25382|26035|25720|24390|
|[koa](https://github.com/koajs/koa)|16298|17228|15158|16508|
|[express](https://github.com/expressjs/express)|5445|5592|5015|5728|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51827|48028|53391|54061|
|[hono](https://github.com/honojs/hono)|49353|46914|49612|51533|
|[elysia](https://github.com/elysiajs/elysia)|49165|48477|45599|53418|
|[baojs](https://github.com/mattreid1/baojs)|44025|50161|36679|45234|
  



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


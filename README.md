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
Created At : Sat May 24 2025, 12:58:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59602|68435|58564|51806|
|[hono](https://github.com/honojs/hono)|59196|65843|60801|50943|
|[fast](https://github.com/danteissaias/fast)|55136|60092|48515|56800|
|[oak](https://github.com/oakserver/oak)|28611|28587|28924|28321|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39442|46410|38138|33778|
|[fastify](https://github.com/fastify/fastify)|24767|24583|25713|24006|
|[koa](https://github.com/koajs/koa)|16640|17389|15866|16664|
|[express](https://github.com/expressjs/express)|6523|6667|6393|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|84863|98678|75048|80862|
|[nhttp](https://github.com/nhttp/nhttp)|71449|90515|61425|62407|
|[hono](https://github.com/honojs/hono)|66512|77591|60488|61457|
|[baojs](https://github.com/mattreid1/baojs)|49646|53842|44830|50265|
  



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


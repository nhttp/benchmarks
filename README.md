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
Created At : Wed Jan 01 2025, 12:55:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48608|51758|48561|45506|
|[hono](https://github.com/honojs/hono)|47370|50285|47952|43874|
|[fast](https://github.com/danteissaias/fast)|47230|51421|44194|46075|
|[oak](https://github.com/oakserver/oak)|26354|27211|25826|26024|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24779|30382|22812|21143|
|[fastify](https://github.com/fastify/fastify)|16798|16937|16974|16482|
|[koa](https://github.com/koajs/koa)|14260|15156|13514|14109|
|[express](https://github.com/expressjs/express)|6430|6609|6062|6618|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73135|84449|72678|62278|
|[hono](https://github.com/honojs/hono)|61742|76079|51621|57527|
|[nhttp](https://github.com/nhttp/nhttp)|58263|77633|48138|49017|
|[baojs](https://github.com/mattreid1/baojs)|35739|44032|33229|29956|
  



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


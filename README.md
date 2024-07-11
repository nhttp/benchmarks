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
Created At : Thu Jul 11 2024, 12:42:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46533|50967|45763|42870|
|[hono](https://github.com/honojs/hono)|45273|48230|46125|41464|
|[fast](https://github.com/danteissaias/fast)|45109|48569|42320|44438|
|[oak](https://github.com/oakserver/oak)|26094|27151|25682|25448|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24691|31729|22357|19988|
|[fastify](https://github.com/fastify/fastify)|17165|17571|16868|17056|
|[koa](https://github.com/koajs/koa)|14336|15376|13330|14302|
|[express](https://github.com/expressjs/express)|6397|6518|6060|6612|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72508|83776|77735|56012|
|[hono](https://github.com/honojs/hono)|59395|71830|53226|53129|
|[nhttp](https://github.com/nhttp/nhttp)|58740|86424|44205|45591|
|[baojs](https://github.com/mattreid1/baojs)|38595|45385|36792|33607|
  



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


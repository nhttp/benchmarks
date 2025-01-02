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
Created At : Thu Jan 02 2025, 12:50:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49026|54061|48379|44638|
|[hono](https://github.com/honojs/hono)|48087|50890|48899|44471|
|[fast](https://github.com/danteissaias/fast)|47560|51321|44605|46754|
|[oak](https://github.com/oakserver/oak)|26326|27365|25623|25991|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24637|31227|22530|20153|
|[fastify](https://github.com/fastify/fastify)|16997|17462|16624|16904|
|[koa](https://github.com/koajs/koa)|14287|15283|13307|14272|
|[express](https://github.com/expressjs/express)|6395|6585|6005|6595|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74925|79347|78778|66650|
|[nhttp](https://github.com/nhttp/nhttp)|60342|82746|45459|52820|
|[hono](https://github.com/honojs/hono)|57592|73549|46561|52667|
|[baojs](https://github.com/mattreid1/baojs)|34560|38357|34578|30745|
  



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


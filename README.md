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
Created At : Wed Oct 30 2024, 12:50:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48564|52555|48079|45058|
|[hono](https://github.com/honojs/hono)|48013|51496|48991|43551|
|[fast](https://github.com/danteissaias/fast)|47205|51168|44161|46285|
|[oak](https://github.com/oakserver/oak)|25642|26677|25095|25154|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24108|28963|22681|20680|
|[fastify](https://github.com/fastify/fastify)|16994|17367|16819|16796|
|[koa](https://github.com/koajs/koa)|13841|14427|12969|14126|
|[express](https://github.com/expressjs/express)|6224|6314|5830|6527|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72679|82798|68773|66466|
|[hono](https://github.com/honojs/hono)|60665|78537|56655|46803|
|[nhttp](https://github.com/nhttp/nhttp)|57798|87006|43740|42647|
|[baojs](https://github.com/mattreid1/baojs)|34037|39810|34409|27891|
  



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


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
Created At : Wed Nov 20 2024, 12:52:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48061|52387|47096|44701|
|[hono](https://github.com/honojs/hono)|47905|50967|48873|43876|
|[fast](https://github.com/danteissaias/fast)|47616|52083|44266|46500|
|[oak](https://github.com/oakserver/oak)|26516|27658|26211|25680|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24801|30652|23102|20649|
|[fastify](https://github.com/fastify/fastify)|17357|17802|17302|16968|
|[koa](https://github.com/koajs/koa)|14336|15313|13447|14248|
|[express](https://github.com/expressjs/express)|6377|6561|6005|6566|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72532|81221|74434|61941|
|[nhttp](https://github.com/nhttp/nhttp)|59222|82815|42329|52522|
|[hono](https://github.com/honojs/hono)|55909|76240|48635|42853|
|[baojs](https://github.com/mattreid1/baojs)|35679|41520|35497|30020|
  



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


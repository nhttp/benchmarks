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
Created At : Wed Nov 06 2024, 12:49:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48273|52058|47824|44937|
|[hono](https://github.com/honojs/hono)|47893|50622|48560|44497|
|[fast](https://github.com/danteissaias/fast)|47605|51830|45800|45186|
|[oak](https://github.com/oakserver/oak)|26319|27376|25909|25672|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23831|29321|22256|19917|
|[fastify](https://github.com/fastify/fastify)|17001|17350|16874|16779|
|[koa](https://github.com/koajs/koa)|13970|14821|12950|14140|
|[express](https://github.com/expressjs/express)|6333|6498|5979|6523|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79316|86517|80980|70450|
|[hono](https://github.com/honojs/hono)|61982|74444|58106|53395|
|[nhttp](https://github.com/nhttp/nhttp)|60725|84072|45411|52692|
|[baojs](https://github.com/mattreid1/baojs)|34448|41801|30689|30854|
  



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


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
Created At : Wed Apr 10 2024, 12:36:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47588|51689|45216|45859|
|[hono](https://github.com/honojs/hono)|47566|50047|48184|44467|
|[nhttp](https://github.com/nhttp/nhttp)|47495|50532|46367|45586|
|[oak](https://github.com/oakserver/oak)|27593|29288|27550|25941|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24758|30083|23181|21011|
|[fastify](https://github.com/fastify/fastify)|16585|17028|16476|16250|
|[koa](https://github.com/koajs/koa)|14510|15274|13648|14607|
|[express](https://github.com/expressjs/express)|6401|6588|6052|6564|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71606|81976|69608|63233|
|[hono](https://github.com/honojs/hono)|64537|78622|58069|56921|
|[nhttp](https://github.com/nhttp/nhttp)|63777|83375|56317|51638|
|[baojs](https://github.com/mattreid1/baojs)|35943|43292|30813|33725|
  



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


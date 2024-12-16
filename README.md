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
Created At : Mon Dec 16 2024, 12:57:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47606|50813|46865|45139|
|[hono](https://github.com/honojs/hono)|47249|49580|48305|43861|
|[fast](https://github.com/danteissaias/fast)|46655|50670|44000|45294|
|[oak](https://github.com/oakserver/oak)|25671|26679|25129|25206|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24725|31729|22203|20244|
|[fastify](https://github.com/fastify/fastify)|16549|16899|16491|16256|
|[koa](https://github.com/koajs/koa)|13880|14496|13189|13956|
|[express](https://github.com/expressjs/express)|6096|6239|5744|6305|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68551|81441|68594|55618|
|[nhttp](https://github.com/nhttp/nhttp)|53580|79248|39368|42125|
|[hono](https://github.com/honojs/hono)|52508|65536|46049|45940|
|[baojs](https://github.com/mattreid1/baojs)|31200|37023|29727|26851|
  



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


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
Created At : Mon Mar 11 2024, 12:37:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|49451|52974|46137|49241|
|[nhttp](https://github.com/nhttp/nhttp)|49288|53056|48036|46772|
|[hono](https://github.com/honojs/hono)|47875|50540|48173|44912|
|[oak](https://github.com/oakserver/oak)|27993|29969|28004|26006|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25097|32044|22943|20304|
|[fastify](https://github.com/fastify/fastify)|17088|17686|16729|16850|
|[koa](https://github.com/koajs/koa)|14711|15702|13983|14448|
|[express](https://github.com/expressjs/express)|6476|6602|6201|6624|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71308|83843|66917|63163|
|[nhttp](https://github.com/nhttp/nhttp)|63473|87050|50568|52800|
|[hono](https://github.com/honojs/hono)|63349|74072|59584|56392|
|[baojs](https://github.com/mattreid1/baojs)|36752|38967|35649|35641|
  



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


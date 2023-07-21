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
Created At : Fri Jul 21 2023, 12:44:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46967|50111|45555|45236|
|[hono](https://github.com/honojs/hono)|45487|48455|46935|41072|
|[fastro](https://github.com/fastrodev/fastro)|16947|43365|3756|3719|
|[oak](https://github.com/oakserver/oak)|13868|14629|13996|12980|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|28939|30775|28775|27266|
|[fastify](https://github.com/fastify/fastify)|24616|24973|25291|23584|
|[koa](https://github.com/koajs/koa)|15229|15957|14206|15525|
|[express](https://github.com/expressjs/express)|5354|5396|4893|5773|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51808|53797|51342|50286|
|[hono](https://github.com/honojs/hono)|51767|52143|52595|50563|
|[elysia](https://github.com/elysiajs/elysia)|51594|52047|50275|52459|
|[baojs](https://github.com/mattreid1/baojs)|41566|47702|37390|39606|
  



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


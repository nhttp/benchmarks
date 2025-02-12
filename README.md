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
Created At : Wed Feb 12 2025, 12:50:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60462|67375|57691|56321|
|[fast](https://github.com/danteissaias/fast)|55505|64172|45041|57302|
|[hono](https://github.com/honojs/hono)|55440|60265|57141|48915|
|[oak](https://github.com/oakserver/oak)|27826|29318|26314|27847|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39655|47981|35316|35669|
|[fastify](https://github.com/fastify/fastify)|26306|26891|27402|24625|
|[koa](https://github.com/koajs/koa)|17116|18194|15997|17157|
|[express](https://github.com/expressjs/express)|6854|7005|6358|7200|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79654|93791|83716|61455|
|[nhttp](https://github.com/nhttp/nhttp)|71309|92882|61550|59496|
|[hono](https://github.com/honojs/hono)|63065|69980|60160|59056|
|[baojs](https://github.com/mattreid1/baojs)|49817|56578|44801|48072|
  



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


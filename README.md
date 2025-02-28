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
Created At : Fri Feb 28 2025, 12:52:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58869|67092|57205|52309|
|[hono](https://github.com/honojs/hono)|58198|61914|60443|52236|
|[fast](https://github.com/danteissaias/fast)|57270|67823|50045|53943|
|[oak](https://github.com/oakserver/oak)|27964|28905|26920|28066|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40640|46824|39801|35295|
|[fastify](https://github.com/fastify/fastify)|24652|25031|25792|23134|
|[koa](https://github.com/koajs/koa)|17334|18439|15951|17611|
|[express](https://github.com/expressjs/express)|7148|7195|6769|7481|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76103|89130|75442|63737|
|[nhttp](https://github.com/nhttp/nhttp)|70447|92213|61233|57895|
|[hono](https://github.com/honojs/hono)|65867|74995|61275|61330|
|[baojs](https://github.com/mattreid1/baojs)|47265|53416|43798|44581|
  



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


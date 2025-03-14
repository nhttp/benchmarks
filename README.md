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
Created At : Fri Mar 14 2025, 12:52:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61953|69922|62461|53475|
|[hono](https://github.com/honojs/hono)|56783|58869|59887|51592|
|[fast](https://github.com/danteissaias/fast)|55214|64348|48272|53023|
|[oak](https://github.com/oakserver/oak)|28619|29403|28701|27754|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41820|46521|41287|37652|
|[fastify](https://github.com/fastify/fastify)|25520|25125|26581|24854|
|[koa](https://github.com/koajs/koa)|17174|17816|16048|17659|
|[express](https://github.com/expressjs/express)|7063|7315|6600|7273|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79348|90180|80424|67440|
|[nhttp](https://github.com/nhttp/nhttp)|70612|94197|60067|57572|
|[hono](https://github.com/honojs/hono)|65116|74754|62399|58195|
|[baojs](https://github.com/mattreid1/baojs)|46822|52072|43258|45135|
  



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


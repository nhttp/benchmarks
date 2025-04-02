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
Created At : Wed Apr 02 2025, 12:55:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58796|65789|59254|51346|
|[hono](https://github.com/honojs/hono)|56385|59675|58052|51427|
|[fast](https://github.com/danteissaias/fast)|51777|58286|45246|51798|
|[oak](https://github.com/oakserver/oak)|27738|29215|26650|27348|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39443|45869|36367|36094|
|[fastify](https://github.com/fastify/fastify)|24609|24659|24456|24713|
|[koa](https://github.com/koajs/koa)|17186|18100|16339|17118|
|[express](https://github.com/expressjs/express)|6570|6737|6196|6777|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74480|87322|74251|61866|
|[nhttp](https://github.com/nhttp/nhttp)|64648|87131|50045|56767|
|[hono](https://github.com/honojs/hono)|61447|70031|56027|58283|
|[baojs](https://github.com/mattreid1/baojs)|42115|48552|39592|38200|
  



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


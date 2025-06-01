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
Created At : Sun Jun 01 2025, 1:15:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60558|69686|58731|53258|
|[hono](https://github.com/honojs/hono)|57039|61716|59332|50068|
|[fast](https://github.com/danteissaias/fast)|56404|65996|52123|51094|
|[oak](https://github.com/oakserver/oak)|29020|28814|27950|30295|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39348|45088|35994|36962|
|[fastify](https://github.com/fastify/fastify)|25580|25388|26914|24437|
|[koa](https://github.com/koajs/koa)|17143|18034|16873|16521|
|[express](https://github.com/expressjs/express)|6603|6750|6344|6715|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83645|94143|79765|77026|
|[nhttp](https://github.com/nhttp/nhttp)|69423|89875|58112|60283|
|[hono](https://github.com/honojs/hono)|62924|74159|57406|57208|
|[baojs](https://github.com/mattreid1/baojs)|49758|56668|45507|47098|
  



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


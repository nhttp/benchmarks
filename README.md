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
Created At : Fri Mar 28 2025, 12:53:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59594|62922|60840|55021|
|[nhttp](https://github.com/nhttp/nhttp)|59103|63385|59700|54224|
|[fast](https://github.com/danteissaias/fast)|54736|63579|51085|49543|
|[oak](https://github.com/oakserver/oak)|28289|28566|28393|27908|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37930|44574|36213|33004|
|[fastify](https://github.com/fastify/fastify)|25875|26363|27065|24198|
|[koa](https://github.com/koajs/koa)|16989|17867|15764|17337|
|[express](https://github.com/expressjs/express)|7097|7229|6613|7448|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80193|92336|80742|67500|
|[nhttp](https://github.com/nhttp/nhttp)|68212|92146|56113|56377|
|[hono](https://github.com/honojs/hono)|62603|70055|61340|56413|
|[baojs](https://github.com/mattreid1/baojs)|47298|51039|44700|46154|
  



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


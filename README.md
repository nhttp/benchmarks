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
Created At : Thu Apr 10 2025, 12:54:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57188|64792|53839|52933|
|[nhttp](https://github.com/nhttp/nhttp)|56850|61210|59222|50118|
|[fast](https://github.com/danteissaias/fast)|55983|66401|46280|55267|
|[oak](https://github.com/oakserver/oak)|29093|29706|28345|29229|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38000|44985|36480|32536|
|[fastify](https://github.com/fastify/fastify)|25264|24921|27668|23204|
|[koa](https://github.com/koajs/koa)|16591|17463|15735|16575|
|[express](https://github.com/expressjs/express)|6608|6745|6333|6746|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79957|93213|78891|67767|
|[nhttp](https://github.com/nhttp/nhttp)|68091|88298|57334|58642|
|[hono](https://github.com/honojs/hono)|62392|73855|56271|57049|
|[baojs](https://github.com/mattreid1/baojs)|47251|49750|47040|44962|
  



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


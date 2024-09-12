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
Created At : Thu Sep 12 2024, 12:46:29 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48595|52046|49774|43964|
|[nhttp](https://github.com/nhttp/nhttp)|48564|52228|47729|45735|
|[fast](https://github.com/danteissaias/fast)|48145|51882|44999|47554|
|[oak](https://github.com/oakserver/oak)|26169|27227|25789|25490|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24774|30514|22576|21231|
|[fastify](https://github.com/fastify/fastify)|16367|16512|16382|16206|
|[koa](https://github.com/koajs/koa)|13928|14573|13214|13996|
|[express](https://github.com/expressjs/express)|6111|6393|5766|6175|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69520|79583|74915|54063|
|[hono](https://github.com/honojs/hono)|65082|73489|64127|57630|
|[nhttp](https://github.com/nhttp/nhttp)|60941|81425|48668|52730|
|[baojs](https://github.com/mattreid1/baojs)|38954|46482|38958|31421|
  



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


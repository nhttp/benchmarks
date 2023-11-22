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
Created At : Wed Nov 22 2023, 12:39:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45666|49068|44675|43254|
|[fast](https://github.com/danteissaias/fast)|44981|48340|42963|43640|
|[hono](https://github.com/honojs/hono)|44352|47229|44427|41401|
|[fastro](https://github.com/fastrodev/fastro)|23600|48422|11707|10672|
|[oak](https://github.com/oakserver/oak)|19848|21083|19788|18672|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26277|31366|24423|23042|
|[fastify](https://github.com/fastify/fastify)|15753|16582|15272|15405|
|[koa](https://github.com/koajs/koa)|14084|14804|13406|14043|
|[express](https://github.com/expressjs/express)|6331|6509|6014|6469|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70000|77533|71330|61137|
|[hono](https://github.com/honojs/hono)|68340|76937|64294|63789|
|[nhttp](https://github.com/nhttp/nhttp)|67629|79568|65787|57533|
|[baojs](https://github.com/mattreid1/baojs)|33599|38776|32392|29629|
  



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


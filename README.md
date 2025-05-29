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
Created At : Thu May 29 2025, 1:04:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59216|64654|56563|56430|
|[hono](https://github.com/honojs/hono)|57150|60785|60105|50561|
|[fast](https://github.com/danteissaias/fast)|56363|68686|46376|54028|
|[oak](https://github.com/oakserver/oak)|28184|28671|27664|28218|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39147|46473|35672|35295|
|[fastify](https://github.com/fastify/fastify)|25995|25293|26918|25774|
|[koa](https://github.com/koajs/koa)|16823|17401|17149|15920|
|[express](https://github.com/expressjs/express)|6441|6551|6228|6543|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|81659|89967|75285|79726|
|[nhttp](https://github.com/nhttp/nhttp)|67239|88629|55286|57801|
|[hono](https://github.com/honojs/hono)|64246|74266|58754|59717|
|[baojs](https://github.com/mattreid1/baojs)|45185|51673|40044|43839|
  



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


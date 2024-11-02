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
Created At : Sat Nov 02 2024, 12:49:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48219|52085|47958|44613|
|[hono](https://github.com/honojs/hono)|47686|51399|47763|43897|
|[fast](https://github.com/danteissaias/fast)|47592|52248|44886|45641|
|[oak](https://github.com/oakserver/oak)|25726|26813|25172|25192|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24534|30478|22514|20611|
|[fastify](https://github.com/fastify/fastify)|16813|17203|16613|16622|
|[koa](https://github.com/koajs/koa)|14082|14727|13286|14232|
|[express](https://github.com/expressjs/express)|6299|6497|6078|6322|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69629|79283|72617|56987|
|[nhttp](https://github.com/nhttp/nhttp)|59146|87162|45812|44463|
|[hono](https://github.com/honojs/hono)|53744|69906|42557|48769|
|[baojs](https://github.com/mattreid1/baojs)|34295|39828|34240|28816|
  



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


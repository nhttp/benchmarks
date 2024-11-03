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
Created At : Sun Nov 03 2024, 12:54:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49086|52390|48709|46159|
|[fast](https://github.com/danteissaias/fast)|48668|54174|46276|45554|
|[hono](https://github.com/honojs/hono)|48040|50607|49531|43983|
|[oak](https://github.com/oakserver/oak)|26360|27106|25900|26073|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25190|31407|23109|21054|
|[fastify](https://github.com/fastify/fastify)|17387|17805|17292|17063|
|[koa](https://github.com/koajs/koa)|14273|15102|13344|14372|
|[express](https://github.com/expressjs/express)|6358|6586|5994|6493|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79320|85916|82225|69820|
|[nhttp](https://github.com/nhttp/nhttp)|63586|83755|50508|56496|
|[hono](https://github.com/honojs/hono)|60709|74984|51758|55385|
|[baojs](https://github.com/mattreid1/baojs)|36151|41642|36395|30417|
  



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


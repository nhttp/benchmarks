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
Created At : Fri Apr 12 2024, 12:37:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48557|51970|47233|46467|
|[hono](https://github.com/honojs/hono)|48363|51606|48549|44933|
|[fast](https://github.com/danteissaias/fast)|47917|51966|45786|45998|
|[oak](https://github.com/oakserver/oak)|27853|29631|27825|26104|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26163|33627|23484|21378|
|[fastify](https://github.com/fastify/fastify)|16721|17147|16667|16350|
|[koa](https://github.com/koajs/koa)|14397|14891|13785|14514|
|[express](https://github.com/expressjs/express)|6420|6517|6082|6660|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77051|88203|73731|69218|
|[nhttp](https://github.com/nhttp/nhttp)|63677|85933|53710|51387|
|[hono](https://github.com/honojs/hono)|61077|75608|53858|53764|
|[baojs](https://github.com/mattreid1/baojs)|36882|43261|32182|35202|
  



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


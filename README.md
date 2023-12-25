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
Created At : Mon Dec 25 2023, 12:38:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46271|50344|44792|43677|
|[nhttp](https://github.com/nhttp/nhttp)|46168|49554|44804|44147|
|[hono](https://github.com/honojs/hono)|45073|47607|46011|41601|
|[fastro](https://github.com/fastrodev/fastro)|23466|48216|11468|10714|
|[oak](https://github.com/oakserver/oak)|21069|22142|21133|19932|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25351|31205|23551|21297|
|[fastify](https://github.com/fastify/fastify)|15753|16203|15653|15402|
|[koa](https://github.com/koajs/koa)|14213|14704|13451|14485|
|[express](https://github.com/expressjs/express)|6412|6582|6089|6566|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74594|82174|76758|64849|
|[nhttp](https://github.com/nhttp/nhttp)|63583|80531|53898|56320|
|[hono](https://github.com/honojs/hono)|60305|73260|58764|48891|
|[baojs](https://github.com/mattreid1/baojs)|40399|50267|33135|37796|
  



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


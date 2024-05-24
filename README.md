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
Created At : Fri May 24 2024, 12:39:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47837|51207|44927|47377|
|[nhttp](https://github.com/nhttp/nhttp)|47739|51479|46451|45288|
|[hono](https://github.com/honojs/hono)|47060|49209|47914|44058|
|[oak](https://github.com/oakserver/oak)|27873|29439|27993|26187|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25629|32082|23460|21344|
|[fastify](https://github.com/fastify/fastify)|16669|17190|16442|16374|
|[koa](https://github.com/koajs/koa)|14523|15370|13608|14591|
|[express](https://github.com/expressjs/express)|6512|6630|6329|6578|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75089|87284|81129|56855|
|[nhttp](https://github.com/nhttp/nhttp)|64423|84596|53757|54917|
|[hono](https://github.com/honojs/hono)|63862|71482|66318|53786|
|[baojs](https://github.com/mattreid1/baojs)|37423|42984|37167|32118|
  



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


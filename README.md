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
Created At : Thu Oct 10 2024, 12:49:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48403|52272|44578|48359|
|[hono](https://github.com/honojs/hono)|48025|51641|48512|43922|
|[nhttp](https://github.com/nhttp/nhttp)|47976|52146|47206|44577|
|[oak](https://github.com/oakserver/oak)|26159|26958|25894|25624|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25568|32258|23322|21125|
|[fastify](https://github.com/fastify/fastify)|16664|16785|16408|16799|
|[koa](https://github.com/koajs/koa)|14278|14984|13278|14571|
|[express](https://github.com/expressjs/express)|6355|6581|5953|6532|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70339|79743|77030|54245|
|[nhttp](https://github.com/nhttp/nhttp)|61978|80802|53115|52018|
|[hono](https://github.com/honojs/hono)|59706|69238|59453|50426|
|[baojs](https://github.com/mattreid1/baojs)|35786|40579|34861|31919|
  



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


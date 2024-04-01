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
Created At : Mon Apr 01 2024, 12:41:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47138|50733|43206|47476|
|[nhttp](https://github.com/nhttp/nhttp)|47068|50450|45934|44821|
|[hono](https://github.com/honojs/hono)|46552|48946|46596|44114|
|[oak](https://github.com/oakserver/oak)|26684|28195|26633|25224|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24001|30659|22611|18734|
|[fastify](https://github.com/fastify/fastify)|16131|16667|15791|15935|
|[koa](https://github.com/koajs/koa)|14378|15165|13437|14531|
|[express](https://github.com/expressjs/express)|6237|6405|5966|6339|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71152|81242|73844|58369|
|[nhttp](https://github.com/nhttp/nhttp)|55887|81981|45260|40419|
|[hono](https://github.com/honojs/hono)|52628|69318|45554|43012|
|[baojs](https://github.com/mattreid1/baojs)|30077|33081|29016|28135|
  



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


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
Created At : Thu Jun 13 2024, 12:40:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48558|52764|47811|45099|
|[hono](https://github.com/honojs/hono)|48524|51250|49998|44325|
|[fast](https://github.com/danteissaias/fast)|47801|52719|45236|45449|
|[oak](https://github.com/oakserver/oak)|27232|28201|26690|26805|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24563|30364|22735|20590|
|[fastify](https://github.com/fastify/fastify)|16739|17131|16502|16585|
|[koa](https://github.com/koajs/koa)|14534|15540|13661|14401|
|[express](https://github.com/expressjs/express)|6379|6536|6070|6531|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72739|88328|73046|56843|
|[nhttp](https://github.com/nhttp/nhttp)|60471|86827|47684|46901|
|[hono](https://github.com/honojs/hono)|57787|73638|58537|41187|
|[baojs](https://github.com/mattreid1/baojs)|36116|43570|33508|31271|
  



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


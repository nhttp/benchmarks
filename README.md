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
Created At : Fri Nov 15 2024, 12:53:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48980|52231|49298|45411|
|[nhttp](https://github.com/nhttp/nhttp)|48826|52927|48359|45191|
|[fast](https://github.com/danteissaias/fast)|48388|53301|46179|45684|
|[oak](https://github.com/oakserver/oak)|26034|27136|25488|25479|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23796|29085|21784|20520|
|[fastify](https://github.com/fastify/fastify)|17141|17402|17020|17000|
|[koa](https://github.com/koajs/koa)|14259|15280|13285|14211|
|[express](https://github.com/expressjs/express)|6314|6462|6007|6474|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79734|85500|81195|72506|
|[nhttp](https://github.com/nhttp/nhttp)|64061|85824|51306|55052|
|[hono](https://github.com/honojs/hono)|61198|78870|52304|52420|
|[baojs](https://github.com/mattreid1/baojs)|35449|43172|33336|29840|
  



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


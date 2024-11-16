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
Created At : Sat Nov 16 2024, 12:51:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48151|51301|48947|44204|
|[nhttp](https://github.com/nhttp/nhttp)|47878|51709|47298|44627|
|[fast](https://github.com/danteissaias/fast)|47489|51338|45201|45928|
|[oak](https://github.com/oakserver/oak)|26794|27754|26424|26204|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24982|30479|23433|21034|
|[fastify](https://github.com/fastify/fastify)|17486|18050|17324|17084|
|[koa](https://github.com/koajs/koa)|14383|15473|13326|14351|
|[express](https://github.com/expressjs/express)|6374|6501|6048|6573|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79859|85610|82581|71386|
|[nhttp](https://github.com/nhttp/nhttp)|66158|89577|52706|56192|
|[hono](https://github.com/honojs/hono)|64820|74467|60221|59771|
|[baojs](https://github.com/mattreid1/baojs)|37118|44031|36127|31195|
  



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


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
Created At : Mon Jan 01 2024, 12:42:28 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46118|49891|45252|43212|
|[fast](https://github.com/danteissaias/fast)|45389|48897|43753|43516|
|[hono](https://github.com/honojs/hono)|44489|47047|45482|40939|
|[fastro](https://github.com/fastrodev/fastro)|23417|47816|11230|11206|
|[oak](https://github.com/oakserver/oak)|20659|21697|20433|19848|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25242|30900|23017|21808|
|[fastify](https://github.com/fastify/fastify)|16012|16720|15731|15585|
|[koa](https://github.com/koajs/koa)|14436|15076|13541|14692|
|[express](https://github.com/expressjs/express)|6353|6492|6058|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67742|78677|70303|54247|
|[hono](https://github.com/honojs/hono)|61474|73339|62418|48665|
|[nhttp](https://github.com/nhttp/nhttp)|61251|80465|55590|47698|
|[baojs](https://github.com/mattreid1/baojs)|35862|41490|36020|30076|
  



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


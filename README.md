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
Created At : Wed May 08 2024, 12:32:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48039|51604|47820|44692|
|[fast](https://github.com/danteissaias/fast)|47787|50578|45383|47400|
|[nhttp](https://github.com/nhttp/nhttp)|47525|51270|46181|45124|
|[oak](https://github.com/oakserver/oak)|27250|28747|27288|25715|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24887|32057|22405|20199|
|[fastify](https://github.com/fastify/fastify)|16489|16987|16411|16070|
|[koa](https://github.com/koajs/koa)|14609|15842|13653|14331|
|[express](https://github.com/expressjs/express)|6295|6362|6036|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75299|87352|73343|65201|
|[nhttp](https://github.com/nhttp/nhttp)|61517|83528|54109|46914|
|[hono](https://github.com/honojs/hono)|52646|63505|53472|40960|
|[baojs](https://github.com/mattreid1/baojs)|34931|37259|34272|33262|
  



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


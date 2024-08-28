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
Created At : Wed Aug 28 2024, 12:44:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48304|52849|47364|44698|
|[hono](https://github.com/honojs/hono)|48245|51030|48822|44884|
|[fast](https://github.com/danteissaias/fast)|48002|53294|45805|44908|
|[oak](https://github.com/oakserver/oak)|26852|27853|26211|26493|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25125|32175|22560|20640|
|[fastify](https://github.com/fastify/fastify)|16447|16874|16400|16067|
|[koa](https://github.com/koajs/koa)|14067|14570|13365|14265|
|[express](https://github.com/expressjs/express)|6283|6436|5928|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68517|78014|78498|49038|
|[nhttp](https://github.com/nhttp/nhttp)|62237|80275|51638|54799|
|[hono](https://github.com/honojs/hono)|59357|76597|53338|48137|
|[baojs](https://github.com/mattreid1/baojs)|36455|44281|33481|31602|
  



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


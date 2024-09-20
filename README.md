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
Created At : Fri Sep 20 2024, 12:47:26 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47947|51657|47507|44678|
|[hono](https://github.com/honojs/hono)|47244|50021|48239|43472|
|[fast](https://github.com/danteissaias/fast)|46503|51424|43044|45040|
|[oak](https://github.com/oakserver/oak)|25904|26727|25395|25589|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24930|31824|22752|20215|
|[fastify](https://github.com/fastify/fastify)|17058|17542|16875|16756|
|[koa](https://github.com/koajs/koa)|13697|14251|13131|13708|
|[express](https://github.com/expressjs/express)|6198|6414|5869|6312|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68784|82998|68465|54890|
|[nhttp](https://github.com/nhttp/nhttp)|56309|80276|44443|44207|
|[hono](https://github.com/honojs/hono)|49904|62876|43351|43484|
|[baojs](https://github.com/mattreid1/baojs)|34900|39233|35184|30283|
  



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


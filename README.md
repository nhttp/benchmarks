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
Created At : Thu Jan 04 2024, 12:38:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|46813|51293|42831|46315|
|[nhttp](https://github.com/nhttp/nhttp)|46049|49267|45171|43709|
|[hono](https://github.com/honojs/hono)|44888|47257|45423|41983|
|[fastro](https://github.com/fastrodev/fastro)|23857|49312|11431|10827|
|[oak](https://github.com/oakserver/oak)|20592|21636|20621|19518|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25781|32822|23231|21291|
|[fastify](https://github.com/fastify/fastify)|15491|16127|15252|15094|
|[koa](https://github.com/koajs/koa)|14163|14821|13390|14277|
|[express](https://github.com/expressjs/express)|6435|6492|6191|6623|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72374|80544|77114|59465|
|[nhttp](https://github.com/nhttp/nhttp)|63379|78763|59825|51548|
|[hono](https://github.com/honojs/hono)|61786|72066|60082|53211|
|[baojs](https://github.com/mattreid1/baojs)|37322|45703|34506|31757|
  



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


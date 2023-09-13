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
Created At : Wed Sep 13 2023, 12:35:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61066|66654|58805|57740|
|[hono](https://github.com/honojs/hono)|59480|61966|60619|55856|
|[fast](https://github.com/danteissaias/fast)|58570|69105|45751|60853|
|[fastro](https://github.com/fastrodev/fastro)|26123|65637|6198|6535|
|[oak](https://github.com/oakserver/oak)|19476|20577|19263|18588|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45932|48995|45340|43460|
|[fastify](https://github.com/fastify/fastify)|34398|36338|33984|32871|
|[koa](https://github.com/koajs/koa)|21787|23194|20704|21462|
|[express](https://github.com/expressjs/express)|7730|7975|7213|8002|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70386|70300|69219|71640|
|[hono](https://github.com/honojs/hono)|70299|69263|71011|70622|
|[nhttp](https://github.com/nhttp/nhttp)|70043|70576|71742|67812|
|[baojs](https://github.com/mattreid1/baojs)|51396|57606|44031|52552|
  



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


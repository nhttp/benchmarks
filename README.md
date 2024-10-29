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
Created At : Tue Oct 29 2024, 12:51:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48457|52391|47345|45636|
|[fast](https://github.com/danteissaias/fast)|47638|52304|45584|45027|
|[hono](https://github.com/honojs/hono)|47212|50043|48061|43532|
|[oak](https://github.com/oakserver/oak)|26149|26966|25696|25786|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25155|32175|22729|20561|
|[fastify](https://github.com/fastify/fastify)|17065|17461|17090|16645|
|[koa](https://github.com/koajs/koa)|14418|15272|13623|14360|
|[express](https://github.com/expressjs/express)|6318|6526|5912|6517|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71847|80107|69572|65862|
|[nhttp](https://github.com/nhttp/nhttp)|55133|82072|38399|44928|
|[hono](https://github.com/honojs/hono)|54558|75592|42413|45669|
|[baojs](https://github.com/mattreid1/baojs)|32437|38516|29328|29466|
  



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


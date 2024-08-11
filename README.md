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
Created At : Sun Aug 11 2024, 12:48:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47064|50637|46185|44369|
|[hono](https://github.com/honojs/hono)|46470|49315|47083|43013|
|[fast](https://github.com/danteissaias/fast)|45212|48870|41726|45041|
|[oak](https://github.com/oakserver/oak)|25782|26808|25391|25148|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24811|31179|22693|20561|
|[fastify](https://github.com/fastify/fastify)|16804|17146|16594|16671|
|[koa](https://github.com/koajs/koa)|14281|15073|13409|14361|
|[express](https://github.com/expressjs/express)|6386|6520|6067|6571|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73532|83499|78485|58613|
|[hono](https://github.com/honojs/hono)|67366|78979|63046|60073|
|[nhttp](https://github.com/nhttp/nhttp)|61896|80456|55341|49892|
|[baojs](https://github.com/mattreid1/baojs)|36849|42257|35391|32898|
  



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


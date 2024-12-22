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
Created At : Sun Dec 22 2024, 12:55:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47717|51983|44024|47144|
|[nhttp](https://github.com/nhttp/nhttp)|47611|52706|46549|43579|
|[hono](https://github.com/honojs/hono)|46856|49873|47232|43464|
|[oak](https://github.com/oakserver/oak)|26256|27267|25812|25690|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25121|33390|22330|19643|
|[fastify](https://github.com/fastify/fastify)|16527|17288|16127|16166|
|[koa](https://github.com/koajs/koa)|13939|14643|13085|14089|
|[express](https://github.com/expressjs/express)|6194|6360|5812|6410|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74151|80125|75524|66803|
|[nhttp](https://github.com/nhttp/nhttp)|57316|81464|40154|50330|
|[hono](https://github.com/honojs/hono)|56529|74049|43591|51946|
|[baojs](https://github.com/mattreid1/baojs)|34316|41286|31806|29856|
  



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


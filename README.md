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
Created At : Thu Feb 15 2024, 12:36:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47867|50736|47365|45500|
|[fast](https://github.com/danteissaias/fast)|47201|51011|44901|45692|
|[hono](https://github.com/honojs/hono)|46908|49305|47771|43649|
|[oak](https://github.com/oakserver/oak)|27441|28891|27405|26026|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24260|30100|22496|20184|
|[fastify](https://github.com/fastify/fastify)|16651|16904|16810|16238|
|[koa](https://github.com/koajs/koa)|14505|15179|13732|14603|
|[express](https://github.com/expressjs/express)|6488|6622|6229|6614|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78643|86071|80059|69798|
|[hono](https://github.com/honojs/hono)|64738|77098|62718|54398|
|[nhttp](https://github.com/nhttp/nhttp)|62328|86872|49525|50588|
|[baojs](https://github.com/mattreid1/baojs)|36857|43513|34873|32184|
  



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


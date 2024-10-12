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
Created At : Sat Oct 12 2024, 12:47:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47618|51041|47406|44406|
|[hono](https://github.com/honojs/hono)|47545|50962|47899|43774|
|[fast](https://github.com/danteissaias/fast)|46987|50993|45137|44831|
|[oak](https://github.com/oakserver/oak)|25681|26674|25301|25068|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24237|31145|22252|19314|
|[fastify](https://github.com/fastify/fastify)|15879|16565|15704|15368|
|[koa](https://github.com/koajs/koa)|13823|14680|13003|13787|
|[express](https://github.com/expressjs/express)|6075|6319|5681|6226|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70710|80505|75575|56049|
|[hono](https://github.com/honojs/hono)|61054|74626|52609|55926|
|[nhttp](https://github.com/nhttp/nhttp)|55759|77265|44102|45911|
|[baojs](https://github.com/mattreid1/baojs)|32027|36462|28892|30728|
  



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


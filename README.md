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
Created At : Mon May 06 2024, 12:39:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47761|50863|46132|46289|
|[fast](https://github.com/danteissaias/fast)|47439|51637|45237|45443|
|[hono](https://github.com/honojs/hono)|46898|49102|46931|44660|
|[oak](https://github.com/oakserver/oak)|27499|28999|27549|25949|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24508|31149|22464|19911|
|[fastify](https://github.com/fastify/fastify)|16670|17050|16676|16285|
|[koa](https://github.com/koajs/koa)|14631|15195|14012|14685|
|[express](https://github.com/expressjs/express)|6371|6495|6201|6418|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74036|80403|76735|64969|
|[nhttp](https://github.com/nhttp/nhttp)|59713|84236|51453|43449|
|[hono](https://github.com/honojs/hono)|54336|64810|52194|46003|
|[baojs](https://github.com/mattreid1/baojs)|36884|41934|36846|31872|
  



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


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
Created At : Sat Aug 24 2024, 12:42:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48570|52634|49245|43832|
|[nhttp](https://github.com/nhttp/nhttp)|48203|51823|47719|45068|
|[fast](https://github.com/danteissaias/fast)|47875|52743|45276|45606|
|[oak](https://github.com/oakserver/oak)|26684|27481|25751|26821|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25700|32744|23139|21218|
|[fastify](https://github.com/fastify/fastify)|16987|17299|17020|16643|
|[koa](https://github.com/koajs/koa)|13984|14499|13116|14336|
|[express](https://github.com/expressjs/express)|6341|6522|6054|6446|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73157|84339|79157|55976|
|[hono](https://github.com/honojs/hono)|60347|77423|56664|46955|
|[nhttp](https://github.com/nhttp/nhttp)|56150|80593|43899|43957|
|[baojs](https://github.com/mattreid1/baojs)|37523|45638|34456|32474|
  



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


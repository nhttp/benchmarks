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
Created At : Wed Feb 28 2024, 12:35:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47235|50318|44302|47085|
|[nhttp](https://github.com/nhttp/nhttp)|46880|49705|46099|44835|
|[hono](https://github.com/honojs/hono)|45973|48550|46850|42519|
|[oak](https://github.com/oakserver/oak)|27098|28677|27180|25438|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24231|30584|22383|19725|
|[fastify](https://github.com/fastify/fastify)|16244|16661|16299|15772|
|[koa](https://github.com/koajs/koa)|14394|14760|13619|14803|
|[express](https://github.com/expressjs/express)|6403|6497|6105|6606|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72432|80181|77013|60103|
|[hono](https://github.com/honojs/hono)|61304|70537|58767|54609|
|[nhttp](https://github.com/nhttp/nhttp)|60523|82212|53353|46003|
|[baojs](https://github.com/mattreid1/baojs)|35172|41326|33625|30564|
  



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


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
Created At : Fri Dec 06 2024, 12:54:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|47650|50573|48381|43996|
|[nhttp](https://github.com/nhttp/nhttp)|47505|51064|46784|44668|
|[fast](https://github.com/danteissaias/fast)|47381|51583|45066|45493|
|[oak](https://github.com/oakserver/oak)|26419|27417|26037|25802|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24224|30504|22297|19870|
|[fastify](https://github.com/fastify/fastify)|16868|17281|16740|16582|
|[koa](https://github.com/koajs/koa)|14058|14932|12993|14250|
|[express](https://github.com/expressjs/express)|6293|6455|6001|6422|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67585|85560|65569|51627|
|[nhttp](https://github.com/nhttp/nhttp)|55845|84333|43248|39955|
|[hono](https://github.com/honojs/hono)|53618|71935|43331|45587|
|[baojs](https://github.com/mattreid1/baojs)|33435|39636|33550|27118|
  



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


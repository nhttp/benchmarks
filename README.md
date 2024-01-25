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
Created At : Thu Jan 25 2024, 12:39:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48142|51948|46702|45777|
|[fast](https://github.com/danteissaias/fast)|47154|50072|45107|46282|
|[hono](https://github.com/honojs/hono)|46281|48917|46560|43365|
|[fastro](https://github.com/fastrodev/fastro)|24180|50112|11693|10735|
|[oak](https://github.com/oakserver/oak)|22027|22822|22158|21101|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23928|29735|22514|19535|
|[fastify](https://github.com/fastify/fastify)|16431|16668|16229|16396|
|[koa](https://github.com/koajs/koa)|14278|14781|13588|14464|
|[express](https://github.com/expressjs/express)|6392|6467|6132|6578|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72745|83104|74347|60783|
|[nhttp](https://github.com/nhttp/nhttp)|62081|85099|51184|49960|
|[hono](https://github.com/honojs/hono)|60394|72593|56435|52153|
|[baojs](https://github.com/mattreid1/baojs)|34705|37663|34692|31760|
  



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


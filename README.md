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
Created At : Tue Dec 10 2024, 12:55:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48177|52190|47069|45271|
|[hono](https://github.com/honojs/hono)|47866|51783|48143|43672|
|[fast](https://github.com/danteissaias/fast)|47654|52254|45546|45161|
|[oak](https://github.com/oakserver/oak)|25783|26749|25187|25414|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24193|30167|22363|20048|
|[fastify](https://github.com/fastify/fastify)|16463|16803|16379|16207|
|[koa](https://github.com/koajs/koa)|14012|14710|13036|14289|
|[express](https://github.com/expressjs/express)|6300|6432|5959|6510|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70752|79925|73741|58590|
|[nhttp](https://github.com/nhttp/nhttp)|56668|80515|45875|43613|
|[hono](https://github.com/honojs/hono)|56389|73126|50394|45647|
|[baojs](https://github.com/mattreid1/baojs)|34316|40267|30633|32048|
  



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


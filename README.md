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
Created At : Thu Apr 18 2024, 12:37:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48142|51500|46776|46149|
|[fast](https://github.com/danteissaias/fast)|47293|50743|44828|46307|
|[hono](https://github.com/honojs/hono)|47123|50012|47039|44318|
|[oak](https://github.com/oakserver/oak)|27587|29246|27636|25880|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24670|31677|22426|19908|
|[fastify](https://github.com/fastify/fastify)|16173|16517|16408|15595|
|[koa](https://github.com/koajs/koa)|14350|15008|13782|14260|
|[express](https://github.com/expressjs/express)|6346|6506|6112|6419|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76176|85644|79455|63429|
|[hono](https://github.com/honojs/hono)|64341|77760|55914|59350|
|[nhttp](https://github.com/nhttp/nhttp)|61810|84655|53933|46843|
|[baojs](https://github.com/mattreid1/baojs)|37894|45131|36832|31718|
  



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


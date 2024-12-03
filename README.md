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
Created At : Tue Dec 03 2024, 12:55:17 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47860|52825|44778|45977|
|[nhttp](https://github.com/nhttp/nhttp)|47840|51451|47225|44843|
|[hono](https://github.com/honojs/hono)|47112|50097|47775|43464|
|[oak](https://github.com/oakserver/oak)|26373|27139|25928|26052|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24289|30110|22243|20514|
|[fastify](https://github.com/fastify/fastify)|17157|17558|17102|16811|
|[koa](https://github.com/koajs/koa)|14147|15456|12971|14015|
|[express](https://github.com/expressjs/express)|6296|6494|5874|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75235|81725|78335|65644|
|[hono](https://github.com/honojs/hono)|60994|73549|56705|52729|
|[nhttp](https://github.com/nhttp/nhttp)|57561|80624|42685|49373|
|[baojs](https://github.com/mattreid1/baojs)|32822|37015|32183|29268|
  



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


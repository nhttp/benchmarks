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
Created At : Sat Feb 24 2024, 12:34:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46964|51025|45242|44624|
|[fast](https://github.com/danteissaias/fast)|46600|50242|44317|45240|
|[hono](https://github.com/honojs/hono)|45712|48406|45765|42966|
|[oak](https://github.com/oakserver/oak)|27118|28565|27190|25600|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23754|30136|22111|19016|
|[fastify](https://github.com/fastify/fastify)|15325|15493|15377|15106|
|[koa](https://github.com/koajs/koa)|14313|14552|13716|14671|
|[express](https://github.com/expressjs/express)|6374|6419|6128|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74529|80015|79617|63955|
|[nhttp](https://github.com/nhttp/nhttp)|56512|82087|43768|43681|
|[hono](https://github.com/honojs/hono)|51704|57161|48712|49240|
|[baojs](https://github.com/mattreid1/baojs)|34817|40908|33855|29688|
  



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


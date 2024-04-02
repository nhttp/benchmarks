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
Created At : Tue Apr 02 2024, 12:38:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48536|51849|47290|46468|
|[hono](https://github.com/honojs/hono)|48476|50957|49225|45245|
|[fast](https://github.com/danteissaias/fast)|48161|51797|46147|46539|
|[oak](https://github.com/oakserver/oak)|28092|29621|28115|26539|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27049|35771|23918|21457|
|[fastify](https://github.com/fastify/fastify)|17184|17902|16904|16745|
|[koa](https://github.com/koajs/koa)|14605|15502|13848|14466|
|[express](https://github.com/expressjs/express)|6507|6646|6223|6653|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72150|81446|75595|59408|
|[nhttp](https://github.com/nhttp/nhttp)|63689|86042|56825|48199|
|[hono](https://github.com/honojs/hono)|59921|67684|59602|52478|
|[baojs](https://github.com/mattreid1/baojs)|38047|42731|32398|39012|
  



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


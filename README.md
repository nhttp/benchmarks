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
Created At : Wed Jul 10 2024, 12:42:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49026|53564|48096|45418|
|[hono](https://github.com/honojs/hono)|47935|51019|48344|44443|
|[fast](https://github.com/danteissaias/fast)|47702|52349|44768|45989|
|[oak](https://github.com/oakserver/oak)|27175|28284|26585|26657|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24424|30078|22918|20277|
|[fastify](https://github.com/fastify/fastify)|17073|17401|17021|16796|
|[koa](https://github.com/koajs/koa)|14520|15362|13726|14472|
|[express](https://github.com/expressjs/express)|6362|6533|6117|6435|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73082|84161|80610|54476|
|[nhttp](https://github.com/nhttp/nhttp)|60731|85415|53193|43584|
|[hono](https://github.com/honojs/hono)|60210|67977|64678|47976|
|[baojs](https://github.com/mattreid1/baojs)|36435|43534|33608|32163|
  



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


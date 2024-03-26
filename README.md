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
Created At : Tue Mar 26 2024, 12:36:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48647|52416|44327|49197|
|[hono](https://github.com/honojs/hono)|48031|51204|48418|44471|
|[nhttp](https://github.com/nhttp/nhttp)|47952|51308|46574|45975|
|[oak](https://github.com/oakserver/oak)|27475|28610|27419|26396|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25351|32738|22654|20662|
|[fastify](https://github.com/fastify/fastify)|16813|17407|16598|16433|
|[koa](https://github.com/koajs/koa)|14374|15063|13614|14444|
|[express](https://github.com/expressjs/express)|6426|6532|6217|6530|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75690|86776|81492|58801|
|[nhttp](https://github.com/nhttp/nhttp)|63973|87065|57861|46993|
|[hono](https://github.com/honojs/hono)|59336|64361|61583|52064|
|[baojs](https://github.com/mattreid1/baojs)|36777|43507|34599|32225|
  



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


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
Created At : Sat Jan 13 2024, 12:38:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47134|50447|42893|48062|
|[nhttp](https://github.com/nhttp/nhttp)|46674|50014|45192|44817|
|[hono](https://github.com/honojs/hono)|45619|48197|46222|42438|
|[fastro](https://github.com/fastrodev/fastro)|22690|49045|9760|9266|
|[oak](https://github.com/oakserver/oak)|22355|23473|22326|21267|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25954|33976|22992|20895|
|[fastify](https://github.com/fastify/fastify)|15155|15472|14979|15013|
|[koa](https://github.com/koajs/koa)|14081|14551|13796|13897|
|[express](https://github.com/expressjs/express)|6310|6485|6117|6329|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64890|73771|67391|53509|
|[hono](https://github.com/honojs/hono)|58118|68720|55288|50346|
|[nhttp](https://github.com/nhttp/nhttp)|52764|74457|43131|40704|
|[baojs](https://github.com/mattreid1/baojs)|29951|34729|27899|27226|
  



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


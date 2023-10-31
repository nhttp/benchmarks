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
Created At : Tue Oct 31 2023, 12:36:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|51058|55482|52148|45545|
|[nhttp](https://github.com/nhttp/nhttp)|50392|54386|53013|43776|
|[fast](https://github.com/danteissaias/fast)|46363|56299|34378|48411|
|[fastro](https://github.com/fastrodev/fastro)|22185|54230|6097|6228|
|[oak](https://github.com/oakserver/oak)|15780|16421|16014|14905|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33940|36719|33664|31438|
|[fastify](https://github.com/fastify/fastify)|25038|26059|25155|23901|
|[koa](https://github.com/koajs/koa)|16908|17614|15931|17178|
|[express](https://github.com/expressjs/express)|5280|5435|5253|5151|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51799|48417|53811|53169|
|[hono](https://github.com/honojs/hono)|50778|47204|52737|52393|
|[elysia](https://github.com/elysiajs/elysia)|49164|47760|45969|53764|
|[baojs](https://github.com/mattreid1/baojs)|42122|48845|43122|34398|
  



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


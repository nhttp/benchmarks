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
Created At : Fri Jun 23 2023, 12:51:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51145|54552|50053|48831|
|[hono](https://github.com/honojs/hono)|49987|54929|50784|44247|
|[fastro](https://github.com/fastrodev/fastro)|38752|51058|36767|28431|
|[oak](https://github.com/oakserver/oak)|15174|15917|15110|14496|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31574|34606|30081|30034|
|[fastify](https://github.com/fastify/fastify)|25500|26543|25492|24464|
|[koa](https://github.com/koajs/koa)|15904|16598|14839|16276|
|[express](https://github.com/expressjs/express)|5271|5514|4715|5584|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|53456|51198|55226|53943|
|[hono](https://github.com/honojs/hono)|51087|51009|51120|51133|
|[elysia](https://github.com/elysiajs/elysia)|50272|51824|48794|50198|
|[baojs](https://github.com/mattreid1/baojs)|43675|48973|41996|40056|
  



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


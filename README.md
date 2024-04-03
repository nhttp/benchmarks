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
Created At : Wed Apr 03 2024, 12:36:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47765|51446|46122|45728|
|[fast](https://github.com/danteissaias/fast)|47579|50909|44888|46941|
|[hono](https://github.com/honojs/hono)|47540|50027|48932|43661|
|[oak](https://github.com/oakserver/oak)|27352|29086|27332|25638|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25296|34117|22162|19610|
|[fastify](https://github.com/fastify/fastify)|16068|16676|15735|15794|
|[koa](https://github.com/koajs/koa)|14411|15024|13639|14570|
|[express](https://github.com/expressjs/express)|6325|6481|5987|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76187|83478|79897|65185|
|[nhttp](https://github.com/nhttp/nhttp)|63855|84129|56245|51192|
|[hono](https://github.com/honojs/hono)|60297|71303|55453|54135|
|[baojs](https://github.com/mattreid1/baojs)|32195|36632|31262|28691|
  



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


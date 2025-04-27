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
Created At : Sun Apr 27 2025, 1:02:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59595|67745|58223|52816|
|[hono](https://github.com/honojs/hono)|58033|64844|61006|48250|
|[fast](https://github.com/danteissaias/fast)|50998|58576|46393|48025|
|[oak](https://github.com/oakserver/oak)|27356|27982|26942|27144|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40025|45223|36634|38218|
|[fastify](https://github.com/fastify/fastify)|25515|25047|26161|25338|
|[koa](https://github.com/koajs/koa)|16877|17589|15771|17270|
|[express](https://github.com/expressjs/express)|6443|6569|6117|6642|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78984|93790|74498|68664|
|[nhttp](https://github.com/nhttp/nhttp)|72442|96803|55272|65250|
|[hono](https://github.com/honojs/hono)|63259|71065|57450|61262|
|[baojs](https://github.com/mattreid1/baojs)|46814|53074|43793|43575|
  



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


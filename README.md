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
Created At : Thu Jun 15 2023, 12:45:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36901|39914|35188|35601|
|[hono](https://github.com/honojs/hono)|35167|37931|35096|32475|
|[fast](https://github.com/danteissaias/fast)|32181|37773|33510|25260|
|[fastro](https://github.com/fastrodev/fastro)|29605|35195|30774|22845|
|[oak](https://github.com/oakserver/oak)|9999|10561|10000|9435|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19204|20928|18494|18191|
|[fastify](https://github.com/fastify/fastify)|14883|15604|14859|14187|
|[koa](https://github.com/koajs/koa)|8947|9097|8590|9155|
|[express](https://github.com/expressjs/express)|3987|4025|3827|4110|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42774|43569|42504|42249|
|[elysia](https://github.com/elysiajs/elysia)|41008|42860|40668|39495|
|[hono](https://github.com/honojs/hono)|40481|43980|38980|38483|
|[baojs](https://github.com/mattreid1/baojs)|35714|40341|33648|33153|
  



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


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
Created At : Thu Oct 05 2023, 12:36:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66254|66083|69793|62887|
|[hono](https://github.com/honojs/hono)|61486|68359|60382|55718|
|[fast](https://github.com/danteissaias/fast)|59091|69908|44069|63296|
|[fastro](https://github.com/fastrodev/fastro)|28569|69534|8144|8028|
|[oak](https://github.com/oakserver/oak)|19373|20362|19707|18050|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43303|46905|41812|41193|
|[fastify](https://github.com/fastify/fastify)|33998|34948|34224|32822|
|[koa](https://github.com/koajs/koa)|21891|22865|20834|21973|
|[express](https://github.com/expressjs/express)|7554|7687|7182|7792|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61087|59535|62467|61259|
|[hono](https://github.com/honojs/hono)|56519|57908|54340|57308|
|[elysia](https://github.com/elysiajs/elysia)|55636|58496|56056|52355|
|[baojs](https://github.com/mattreid1/baojs)|51799|57362|43215|54819|
  



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


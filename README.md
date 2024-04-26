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
Created At : Fri Apr 26 2024, 12:37:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48342|52066|47342|45619|
|[fast](https://github.com/danteissaias/fast)|48060|52692|44738|46749|
|[hono](https://github.com/honojs/hono)|47722|50521|48139|44506|
|[oak](https://github.com/oakserver/oak)|27908|29521|27913|26291|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23702|29814|21990|19301|
|[fastify](https://github.com/fastify/fastify)|16346|16961|16285|15791|
|[koa](https://github.com/koajs/koa)|14387|15002|13607|14552|
|[express](https://github.com/expressjs/express)|6367|6497|6137|6468|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73408|86278|72090|61855|
|[hono](https://github.com/honojs/hono)|63314|77062|64240|48640|
|[nhttp](https://github.com/nhttp/nhttp)|61638|83409|54735|46769|
|[baojs](https://github.com/mattreid1/baojs)|38514|45896|38263|31382|
  



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


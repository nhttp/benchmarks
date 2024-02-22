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
Created At : Thu Feb 22 2024, 12:36:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47013|50524|46042|44474|
|[fast](https://github.com/danteissaias/fast)|46682|50680|43994|45373|
|[hono](https://github.com/honojs/hono)|46248|48456|46679|43608|
|[oak](https://github.com/oakserver/oak)|27356|28795|27489|25785|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24245|30790|22297|19649|
|[fastify](https://github.com/fastify/fastify)|16270|16508|16238|16063|
|[koa](https://github.com/koajs/koa)|14424|15278|13525|14470|
|[express](https://github.com/expressjs/express)|6459|6579|6202|6595|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|64819|75202|65165|54089|
|[nhttp](https://github.com/nhttp/nhttp)|59226|81030|51554|45094|
|[hono](https://github.com/honojs/hono)|58775|73478|52946|49902|
|[baojs](https://github.com/mattreid1/baojs)|34765|38661|32236|33399|
  



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


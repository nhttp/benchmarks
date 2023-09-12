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
Created At : Tue Sep 12 2023, 12:34:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55261|61902|55524|48357|
|[hono](https://github.com/honojs/hono)|53555|57157|55407|48102|
|[fast](https://github.com/danteissaias/fast)|52881|62947|51401|44294|
|[fastro](https://github.com/fastrodev/fastro)|23433|58709|6186|5404|
|[oak](https://github.com/oakserver/oak)|17385|18204|17305|16645|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40166|43921|39494|37082|
|[fastify](https://github.com/fastify/fastify)|28935|30413|28613|27778|
|[koa](https://github.com/koajs/koa)|18428|19553|17176|18554|
|[express](https://github.com/expressjs/express)|6419|6567|6215|6476|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|64228|64435|65787|62461|
|[elysia](https://github.com/elysiajs/elysia)|62747|60063|62961|65217|
|[nhttp](https://github.com/nhttp/nhttp)|61833|64260|61686|59553|
|[baojs](https://github.com/mattreid1/baojs)|46371|53485|47578|38049|
  



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


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
Created At : Thu Feb 01 2024, 12:38:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47903|52198|45144|46366|
|[nhttp](https://github.com/nhttp/nhttp)|47425|50202|46168|45906|
|[hono](https://github.com/honojs/hono)|46061|48553|46482|43149|
|[oak](https://github.com/oakserver/oak)|27001|28511|26895|25597|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24768|31218|23124|19963|
|[fastify](https://github.com/fastify/fastify)|16571|17176|16528|16010|
|[koa](https://github.com/koajs/koa)|14432|15151|13799|14347|
|[express](https://github.com/expressjs/express)|6296|6353|6130|6406|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74252|82710|77634|62413|
|[hono](https://github.com/honojs/hono)|63094|79003|56699|53580|
|[nhttp](https://github.com/nhttp/nhttp)|59482|85009|48030|45408|
|[baojs](https://github.com/mattreid1/baojs)|31738|36739|30260|28215|
  



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


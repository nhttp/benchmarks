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
Created At : Sun Jul 07 2024, 12:45:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49285|53804|48742|45308|
|[hono](https://github.com/honojs/hono)|48308|51141|49249|44533|
|[fast](https://github.com/danteissaias/fast)|48046|52329|45619|46190|
|[oak](https://github.com/oakserver/oak)|26799|27896|25969|26532|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24856|30237|23131|21199|
|[fastify](https://github.com/fastify/fastify)|17320|17670|17243|17047|
|[koa](https://github.com/koajs/koa)|14382|15519|13629|13997|
|[express](https://github.com/expressjs/express)|6388|6555|6121|6487|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72407|87436|78986|50800|
|[hono](https://github.com/honojs/hono)|62252|74914|51183|60660|
|[nhttp](https://github.com/nhttp/nhttp)|59127|85960|46707|44715|
|[baojs](https://github.com/mattreid1/baojs)|35045|39946|31279|33910|
  



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


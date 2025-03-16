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
Created At : Sun Mar 16 2025, 12:57:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60439|65459|60128|55731|
|[hono](https://github.com/honojs/hono)|57321|60441|61899|49622|
|[fast](https://github.com/danteissaias/fast)|55594|64728|49458|52597|
|[oak](https://github.com/oakserver/oak)|29236|30388|28917|28403|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39518|45797|38254|34503|
|[fastify](https://github.com/fastify/fastify)|24621|24341|25257|24265|
|[koa](https://github.com/koajs/koa)|16929|17884|15876|17028|
|[express](https://github.com/expressjs/express)|6988|7298|6532|7134|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76661|90853|73749|65382|
|[nhttp](https://github.com/nhttp/nhttp)|66791|84052|57248|59074|
|[hono](https://github.com/honojs/hono)|62970|70872|58645|59394|
|[baojs](https://github.com/mattreid1/baojs)|47181|50580|43308|47656|
  



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


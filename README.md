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
Created At : Wed Jan 15 2025, 12:49:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57044|66372|54311|50449|
|[hono](https://github.com/honojs/hono)|56404|61100|56515|51598|
|[fast](https://github.com/danteissaias/fast)|53238|62735|52047|44933|
|[oak](https://github.com/oakserver/oak)|27388|27918|27816|26429|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39887|45936|38134|35592|
|[fastify](https://github.com/fastify/fastify)|24511|24498|25874|23161|
|[koa](https://github.com/koajs/koa)|16591|17079|15747|16948|
|[express](https://github.com/expressjs/express)|6837|6981|6394|7136|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79729|92401|79578|67207|
|[nhttp](https://github.com/nhttp/nhttp)|70570|92840|57877|60992|
|[hono](https://github.com/honojs/hono)|65505|75160|64067|57288|
|[baojs](https://github.com/mattreid1/baojs)|48860|54657|46039|45883|
  



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


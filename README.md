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
Created At : Tue Apr 29 2025, 12:59:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59623|66820|58343|53707|
|[hono](https://github.com/honojs/hono)|58527|60603|60443|54535|
|[fast](https://github.com/danteissaias/fast)|53932|60388|44609|56800|
|[oak](https://github.com/oakserver/oak)|27821|29640|26201|27623|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41637|47065|39068|38778|
|[fastify](https://github.com/fastify/fastify)|24453|25478|25247|22635|
|[koa](https://github.com/koajs/koa)|16272|17069|16333|15414|
|[express](https://github.com/expressjs/express)|6556|6659|6376|6634|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78594|94502|76382|64898|
|[nhttp](https://github.com/nhttp/nhttp)|71031|92769|58736|61587|
|[hono](https://github.com/honojs/hono)|67504|77453|64781|60279|
|[baojs](https://github.com/mattreid1/baojs)|48921|55271|46794|44699|
  



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


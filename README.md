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
Created At : Sat Aug 12 2023, 12:33:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55301|58574|54775|52553|
|[hono](https://github.com/honojs/hono)|52772|56727|52808|48781|
|[fastro](https://github.com/fastrodev/fastro)|20691|52015|4771|5288|
|[oak](https://github.com/oakserver/oak)|16201|17137|15916|15550|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36257|39102|35572|34097|
|[fastify](https://github.com/fastify/fastify)|27632|29029|26769|27098|
|[koa](https://github.com/koajs/koa)|17575|18703|16125|17898|
|[express](https://github.com/expressjs/express)|5974|6231|5681|6011|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|61905|64773|59670|61273|
|[hono](https://github.com/honojs/hono)|61622|62040|61001|61826|
|[elysia](https://github.com/elysiajs/elysia)|59718|59912|57337|61904|
|[baojs](https://github.com/mattreid1/baojs)|47586|52841|40239|49677|
  



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


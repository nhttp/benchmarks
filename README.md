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
Created At : Thu Apr 13 2023, 12:38:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40727|43258|39706|39218|
|[hono](https://github.com/honojs/hono)|38511|43305|35982|36245|
|[fast](https://github.com/danteissaias/fast)|36222|42751|36737|29178|
|[fastro](https://github.com/fastrodev/fastro)|34393|40789|35287|27102|
|[oak](https://github.com/oakserver/oak)|16189|17396|16024|15147|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44057|46867|43678|41625|
|[fastify](https://github.com/fastify/fastify)|35062|36841|34442|33904|
|[koa](https://github.com/koajs/koa)|21960|23005|20858|22018|
|[express](https://github.com/expressjs/express)|7836|7903|7635|7969|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69027|67179|69785|70117|
|[hono](https://github.com/honojs/hono)|66372|67658|65875|65583|
|[elysia](https://github.com/elysiajs/elysia)|65630|65432|67053|64406|
|[baojs](https://github.com/mattreid1/baojs)|57712|63811|50102|59224|
  



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


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
Created At : Fri Jan 05 2024, 12:38:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45797|48912|44608|43870|
|[fast](https://github.com/danteissaias/fast)|45617|49287|41598|45967|
|[hono](https://github.com/honojs/hono)|43990|46861|44507|40602|
|[fastro](https://github.com/fastrodev/fastro)|23433|48167|11279|10854|
|[oak](https://github.com/oakserver/oak)|21273|22580|21090|20150|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24934|32016|22585|20201|
|[fastify](https://github.com/fastify/fastify)|15517|16201|15232|15117|
|[koa](https://github.com/koajs/koa)|14046|14520|13276|14341|
|[express](https://github.com/expressjs/express)|6342|6498|6148|6379|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68971|78784|72957|55171|
|[nhttp](https://github.com/nhttp/nhttp)|59164|78581|48064|50846|
|[hono](https://github.com/honojs/hono)|52209|59168|50529|46930|
|[baojs](https://github.com/mattreid1/baojs)|37699|42471|38725|31900|
  



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


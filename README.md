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
Created At : Fri Dec 01 2023, 12:42:10 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45870|48933|41473|47205|
|[nhttp](https://github.com/nhttp/nhttp)|45592|48700|44904|43172|
|[hono](https://github.com/honojs/hono)|44708|47699|45119|41306|
|[fastro](https://github.com/fastrodev/fastro)|23819|48375|12021|11060|
|[oak](https://github.com/oakserver/oak)|20421|21517|20301|19446|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26173|30822|24730|22967|
|[fastify](https://github.com/fastify/fastify)|16343|16475|16518|16036|
|[koa](https://github.com/koajs/koa)|12726|13402|11974|12802|
|[express](https://github.com/expressjs/express)|6325|6413|6094|6469|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71407|82727|71459|60036|
|[hono](https://github.com/honojs/hono)|70017|77594|70297|62160|
|[nhttp](https://github.com/nhttp/nhttp)|64905|79747|56021|58946|
|[baojs](https://github.com/mattreid1/baojs)|35062|42513|30868|31805|
  



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


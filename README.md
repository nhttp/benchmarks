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
Created At : Mon Nov 06 2023, 12:37:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45869|50523|45280|41804|
|[fast](https://github.com/danteissaias/fast)|44207|47853|40600|44169|
|[hono](https://github.com/honojs/hono)|43532|45868|44638|40090|
|[oak](https://github.com/oakserver/oak)|20479|21736|20077|19624|
|[fastro](https://github.com/fastrodev/fastro)|0|0|0|0|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26608|31289|25643|22891|
|[fastify](https://github.com/fastify/fastify)|15160|15701|14919|14860|
|[koa](https://github.com/koajs/koa)|13900|14332|13309|14060|
|[express](https://github.com/expressjs/express)|6393|6495|6158|6525|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72275|80467|70947|65410|
|[hono](https://github.com/honojs/hono)|69499|78270|66414|63813|
|[nhttp](https://github.com/nhttp/nhttp)|67230|77352|61566|62772|
|[baojs](https://github.com/mattreid1/baojs)|35487|42647|32424|31389|
  



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


## Runtime JS/TS benchmarks.
This benchmark uses [bombardier](https://github.com/codesenberg/bombardier).

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench
framework.get("/blog/:id", (req, res) => {
  res.send(`${req.params.id} ${req.query.title}`);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Tue Mar 14 2023, 12:39:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45388|48576|44443|43146|
|[fast](https://github.com/danteissaias/fast)|43422|47401|41541|41325|
|[hono](https://github.com/honojs/hono)|42664|44323|42374|41295|
|[fastro](https://github.com/fastrodev/fastro)|37747|44400|41029|27812|
|[oak](https://github.com/oakserver/oak)|17268|18161|17926|15718|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|64337|74427|62549|56035|
|[nhttp](https://github.com/nhttp/nhttp)|63070|70532|60421|58258|
|[elysia](https://github.com/elysiajs/elysia)|63004|69634|59170|60207|
|[baojs](https://github.com/mattreid1/baojs)|53426|56086|53944|50249|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42944|41582|45595|41654|
|[fastify](https://github.com/fastify/fastify)|33463|34742|35001|30645|
|[koa](https://github.com/koajs/koa)|22405|23526|20797|22893|
|[express](https://github.com/expressjs/express)|7983|7993|7773|8182|
  


### Results
|Name|Lang/Runtime|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|Bun|64337|74427|62549|56035|
|[nhttp](https://github.com/nhttp/nhttp)|Bun|63070|70532|60421|58258|
|[elysia](https://github.com/elysiajs/elysia)|Bun|63004|69634|59170|60207|
|[baojs](https://github.com/mattreid1/baojs)|Bun|53426|56086|53944|50249|
|[nhttp](https://github.com/nhttp/nhttp)|Deno|45388|48576|44443|43146|
|[fast](https://github.com/danteissaias/fast)|Deno|43422|47401|41541|41325|
|[nhttp](https://github.com/nhttp/nhttp)|Node|42944|41582|45595|41654|
|[hono](https://github.com/honojs/hono)|Deno|42664|44323|42374|41295|
|[fastro](https://github.com/fastrodev/fastro)|Deno|37747|44400|41029|27812|
|[fastify](https://github.com/fastify/fastify)|Node|33463|34742|35001|30645|
|[koa](https://github.com/koajs/koa)|Node|22405|23526|20797|22893|
|[oak](https://github.com/oakserver/oak)|Deno|17268|18161|17926|15718|
|[express](https://github.com/expressjs/express)|Node|7983|7993|7773|8182|



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


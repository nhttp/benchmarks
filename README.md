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
Created At : Wed Nov 08 2023, 12:36:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45060|48780|44744|41655|
|[fast](https://github.com/danteissaias/fast)|43588|47389|41537|41837|
|[hono](https://github.com/honojs/hono)|42712|45731|43110|39295|
|[fastro](https://github.com/fastrodev/fastro)|22907|46349|11230|11141|
|[oak](https://github.com/oakserver/oak)|20065|21338|19975|18883|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25956|29975|24856|23038|
|[fastify](https://github.com/fastify/fastify)|14943|15464|14832|14532|
|[koa](https://github.com/koajs/koa)|13858|14372|13232|13970|
|[express](https://github.com/expressjs/express)|6317|6376|6054|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66142|77964|64966|55496|
|[nhttp](https://github.com/nhttp/nhttp)|59375|72980|53955|51191|
|[hono](https://github.com/honojs/hono)|57188|73919|53695|43950|
|[baojs](https://github.com/mattreid1/baojs)|32407|38257|30241|28723|
  



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


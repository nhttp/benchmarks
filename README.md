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
Created At : Sat Jun 24 2023, 12:51:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63971|67094|63086|61734|
|[hono](https://github.com/honojs/hono)|62410|68314|62463|56452|
|[fastro](https://github.com/fastrodev/fastro)|51285|65731|53184|34940|
|[oak](https://github.com/oakserver/oak)|19655|20735|19792|18437|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44918|48196|44500|42059|
|[fastify](https://github.com/fastify/fastify)|34941|36296|34646|33881|
|[koa](https://github.com/koajs/koa)|22099|23475|20676|22145|
|[express](https://github.com/expressjs/express)|7861|8131|7355|8096|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67507|66348|66928|69246|
|[hono](https://github.com/honojs/hono)|66720|66632|66642|66885|
|[elysia](https://github.com/elysiajs/elysia)|65334|65325|65625|65052|
|[baojs](https://github.com/mattreid1/baojs)|57559|65058|60838|46782|
  



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


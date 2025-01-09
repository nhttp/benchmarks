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
Created At : Thu Jan 09 2025, 12:50:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46165|49432|45770|43292|
|[hono](https://github.com/honojs/hono)|45761|48917|46421|41944|
|[fast](https://github.com/danteissaias/fast)|45400|49939|42321|43939|
|[oak](https://github.com/oakserver/oak)|25191|26135|24656|24783|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26310|33848|23497|21585|
|[fastify](https://github.com/fastify/fastify)|17244|17813|17072|16848|
|[koa](https://github.com/koajs/koa)|14209|15320|13090|14217|
|[express](https://github.com/expressjs/express)|6306|6508|6014|6395|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68401|77526|72441|55237|
|[nhttp](https://github.com/nhttp/nhttp)|51957|79846|36251|39775|
|[hono](https://github.com/honojs/hono)|45746|55849|38855|42535|
|[baojs](https://github.com/mattreid1/baojs)|33066|36568|33315|29314|
  



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


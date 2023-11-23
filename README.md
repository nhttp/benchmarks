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
Created At : Thu Nov 23 2023, 12:38:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45751|48319|45449|43485|
|[fast](https://github.com/danteissaias/fast)|45268|48660|43579|43564|
|[hono](https://github.com/honojs/hono)|44381|46786|44606|41752|
|[fastro](https://github.com/fastrodev/fastro)|23787|48576|11603|11181|
|[oak](https://github.com/oakserver/oak)|20830|21911|20696|19884|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26851|32082|25136|23334|
|[fastify](https://github.com/fastify/fastify)|15918|15892|16089|15772|
|[koa](https://github.com/koajs/koa)|14091|14555|13268|14451|
|[express](https://github.com/expressjs/express)|6363|6528|6069|6493|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75448|79411|77004|69929|
|[nhttp](https://github.com/nhttp/nhttp)|67718|80817|64956|57382|
|[hono](https://github.com/honojs/hono)|66084|76663|62584|59004|
|[baojs](https://github.com/mattreid1/baojs)|35232|41051|34860|29786|
  



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


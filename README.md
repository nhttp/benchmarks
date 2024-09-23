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
Created At : Mon Sep 23 2024, 12:50:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43142|47770|42085|39572|
|[hono](https://github.com/honojs/hono)|42639|45458|43173|39286|
|[fast](https://github.com/danteissaias/fast)|42385|47037|39418|40700|
|[oak](https://github.com/oakserver/oak)|22716|23704|22249|22196|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|21956|26789|20394|18685|
|[fastify](https://github.com/fastify/fastify)|15494|16059|15497|14926|
|[koa](https://github.com/koajs/koa)|12232|12710|11595|12390|
|[express](https://github.com/expressjs/express)|5582|5702|5320|5725|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|59417|75111|64140|38999|
|[nhttp](https://github.com/nhttp/nhttp)|50607|74573|38923|38324|
|[hono](https://github.com/honojs/hono)|45788|55341|42597|39427|
|[baojs](https://github.com/mattreid1/baojs)|32551|37994|31908|27751|
  



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


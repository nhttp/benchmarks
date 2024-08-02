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
Created At : Fri Aug 02 2024, 12:42:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|45342|48404|45844|41778|
|[nhttp](https://github.com/nhttp/nhttp)|44852|47391|45037|42128|
|[fast](https://github.com/danteissaias/fast)|44641|48240|42654|43030|
|[oak](https://github.com/oakserver/oak)|26020|26906|25500|25654|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24174|30161|22274|20086|
|[fastify](https://github.com/fastify/fastify)|16660|17163|16584|16232|
|[koa](https://github.com/koajs/koa)|14149|15075|13230|14143|
|[express](https://github.com/expressjs/express)|6309|6416|6126|6386|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73649|85753|80742|54451|
|[hono](https://github.com/honojs/hono)|55297|64588|52634|48669|
|[nhttp](https://github.com/nhttp/nhttp)|54925|78035|43835|42905|
|[baojs](https://github.com/mattreid1/baojs)|37596|43038|34492|35258|
  



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


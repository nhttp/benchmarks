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
Created At : Fri Jun 16 2023, 10:57:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51315|55261|49903|48781|
|[hono](https://github.com/honojs/hono)|48874|49500|50770|46351|
|[fastro](https://github.com/fastrodev/fastro)|38172|52300|32074|30141|
|[oak](https://github.com/oakserver/oak)|15320|16061|15346|14553|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32906|34682|32792|31245|
|[fastify](https://github.com/fastify/fastify)|25945|27443|25569|24823|
|[koa](https://github.com/koajs/koa)|16215|17033|14832|16780|
|[express](https://github.com/expressjs/express)|5630|5635|5361|5894|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54369|53573|56945|52589|
|[hono](https://github.com/honojs/hono)|53836|53131|53861|54516|
|[elysia](https://github.com/elysiajs/elysia)|51532|51753|52439|50404|
|[baojs](https://github.com/mattreid1/baojs)|46318|52561|47964|38429|
  



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


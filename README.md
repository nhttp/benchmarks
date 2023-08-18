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
Created At : Fri Aug 18 2023, 12:34:02 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49705|54085|48513|46517|
|[hono](https://github.com/honojs/hono)|46689|48802|48255|43011|
|[fastro](https://github.com/fastrodev/fastro)|18030|45363|4207|4519|
|[oak](https://github.com/oakserver/oak)|14437|15332|14641|13339|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31087|30602|32118|30541|
|[fastify](https://github.com/fastify/fastify)|25492|26281|25350|24845|
|[koa](https://github.com/koajs/koa)|15727|16729|14502|15950|
|[express](https://github.com/expressjs/express)|5372|5570|5132|5415|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|54948|52637|54661|57547|
|[nhttp](https://github.com/nhttp/nhttp)|54459|53583|57623|52171|
|[elysia](https://github.com/elysiajs/elysia)|54328|54446|52796|55743|
|[baojs](https://github.com/mattreid1/baojs)|42459|46563|35561|45254|
  



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


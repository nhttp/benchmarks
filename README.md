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
Created At : Mon Aug 14 2023, 12:34:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56446|60814|54720|53804|
|[hono](https://github.com/honojs/hono)|55111|58383|56273|50676|
|[fastro](https://github.com/fastrodev/fastro)|20491|52620|3870|4984|
|[oak](https://github.com/oakserver/oak)|17178|18176|17015|16342|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36193|38807|36108|33664|
|[fastify](https://github.com/fastify/fastify)|27737|29016|27596|26598|
|[koa](https://github.com/koajs/koa)|18502|19578|17327|18601|
|[express](https://github.com/expressjs/express)|6374|6576|5915|6630|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63674|63867|63894|63262|
|[hono](https://github.com/honojs/hono)|63183|61314|64546|63688|
|[elysia](https://github.com/elysiajs/elysia)|61786|60890|61352|63117|
|[baojs](https://github.com/mattreid1/baojs)|50252|55424|42929|52402|
  



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


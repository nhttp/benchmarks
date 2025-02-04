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
Created At : Tue Feb 04 2025, 12:49:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58563|62117|60883|52689|
|[hono](https://github.com/honojs/hono)|53566|55824|54936|49939|
|[fast](https://github.com/danteissaias/fast)|53166|62257|46326|50916|
|[oak](https://github.com/oakserver/oak)|28250|28059|27939|28751|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39605|48656|36569|33589|
|[fastify](https://github.com/fastify/fastify)|24376|24506|25282|23339|
|[koa](https://github.com/koajs/koa)|17143|17087|16617|17726|
|[express](https://github.com/expressjs/express)|7100|7456|6601|7244|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75302|89553|73693|62660|
|[nhttp](https://github.com/nhttp/nhttp)|68226|87751|56643|60285|
|[hono](https://github.com/honojs/hono)|63663|75312|58088|57590|
|[baojs](https://github.com/mattreid1/baojs)|46782|50580|42076|47689|
  



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


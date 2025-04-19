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
Created At : Sat Apr 19 2025, 12:55:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58347|68415|54022|52603|
|[hono](https://github.com/honojs/hono)|57878|63076|58215|52344|
|[fast](https://github.com/danteissaias/fast)|54280|65925|45965|50949|
|[oak](https://github.com/oakserver/oak)|29416|30280|28698|29271|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39314|45189|39098|33655|
|[fastify](https://github.com/fastify/fastify)|25042|24604|25582|24941|
|[koa](https://github.com/koajs/koa)|17456|18209|15954|18206|
|[express](https://github.com/expressjs/express)|6716|6847|6422|6878|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80927|95596|78775|68410|
|[nhttp](https://github.com/nhttp/nhttp)|71679|96413|59089|59535|
|[hono](https://github.com/honojs/hono)|67936|74775|62726|66308|
|[baojs](https://github.com/mattreid1/baojs)|51300|58752|47947|47202|
  



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


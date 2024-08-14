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
Created At : Wed Aug 14 2024, 12:43:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46105|48696|45448|44170|
|[hono](https://github.com/honojs/hono)|45214|48701|44962|41980|
|[fast](https://github.com/danteissaias/fast)|45176|49670|42674|43184|
|[oak](https://github.com/oakserver/oak)|25564|26271|24942|25480|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24299|30578|22561|19759|
|[fastify](https://github.com/fastify/fastify)|16778|17278|16647|16410|
|[koa](https://github.com/koajs/koa)|14349|15053|13615|14379|
|[express](https://github.com/expressjs/express)|6384|6441|6130|6580|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70250|82555|76323|51871|
|[hono](https://github.com/honojs/hono)|58338|73769|54124|47120|
|[nhttp](https://github.com/nhttp/nhttp)|54342|80827|43442|38756|
|[baojs](https://github.com/mattreid1/baojs)|32670|37736|31993|28282|
  



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


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
Created At : Sun Jan 12 2025, 1:00:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58554|61831|57545|56287|
|[hono](https://github.com/honojs/hono)|54567|56498|58988|48216|
|[fast](https://github.com/danteissaias/fast)|54508|62933|45901|54689|
|[oak](https://github.com/oakserver/oak)|27845|28631|26836|28069|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39963|45895|37705|36288|
|[fastify](https://github.com/fastify/fastify)|23855|24831|23744|22991|
|[koa](https://github.com/koajs/koa)|16773|18085|15676|16559|
|[express](https://github.com/expressjs/express)|6720|7042|6125|6992|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80535|92805|82258|66541|
|[nhttp](https://github.com/nhttp/nhttp)|71152|94016|58409|61030|
|[hono](https://github.com/honojs/hono)|65952|75050|62964|59841|
|[baojs](https://github.com/mattreid1/baojs)|50740|58293|43858|50070|
  



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


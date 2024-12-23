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
Created At : Mon Dec 23 2024, 12:52:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48168|52021|47480|45003|
|[hono](https://github.com/honojs/hono)|47097|49665|47808|43819|
|[fast](https://github.com/danteissaias/fast)|46433|50886|43943|44471|
|[oak](https://github.com/oakserver/oak)|25967|27004|25437|25459|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24633|31871|22031|19997|
|[fastify](https://github.com/fastify/fastify)|16813|17036|16830|16574|
|[koa](https://github.com/koajs/koa)|14101|14890|13109|14304|
|[express](https://github.com/expressjs/express)|6296|6468|5943|6478|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74362|83440|76841|62804|
|[nhttp](https://github.com/nhttp/nhttp)|62311|80977|52841|53114|
|[hono](https://github.com/honojs/hono)|57063|74213|51900|45075|
|[baojs](https://github.com/mattreid1/baojs)|36926|45688|34860|30230|
  



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


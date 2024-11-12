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
Created At : Tue Nov 12 2024, 12:48:20 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48843|52586|48625|45319|
|[hono](https://github.com/honojs/hono)|48762|52089|49165|45031|
|[fast](https://github.com/danteissaias/fast)|48256|52368|44950|47451|
|[oak](https://github.com/oakserver/oak)|26176|27161|25439|25929|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25014|31731|22624|20686|
|[fastify](https://github.com/fastify/fastify)|17728|17971|17676|17537|
|[koa](https://github.com/koajs/koa)|14299|14728|13483|14685|
|[express](https://github.com/expressjs/express)|6382|6587|5983|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79342|87768|80836|69422|
|[hono](https://github.com/honojs/hono)|64758|78039|59341|56893|
|[nhttp](https://github.com/nhttp/nhttp)|64171|86378|48905|57230|
|[baojs](https://github.com/mattreid1/baojs)|36561|42814|35657|31213|
  



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


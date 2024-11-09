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
Created At : Sat Nov 09 2024, 12:47:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48373|51862|47624|45634|
|[fast](https://github.com/danteissaias/fast)|48231|52222|44969|47502|
|[hono](https://github.com/honojs/hono)|48168|51340|49399|43766|
|[oak](https://github.com/oakserver/oak)|26381|27352|25903|25889|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24809|30710|22570|21147|
|[fastify](https://github.com/fastify/fastify)|17300|17813|17177|16910|
|[koa](https://github.com/koajs/koa)|14180|14885|13427|14228|
|[express](https://github.com/expressjs/express)|6376|6539|6020|6570|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74717|86209|72221|65720|
|[nhttp](https://github.com/nhttp/nhttp)|62632|84811|45999|57086|
|[hono](https://github.com/honojs/hono)|61365|73503|56560|54033|
|[baojs](https://github.com/mattreid1/baojs)|36417|43690|36832|28730|
  



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


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
Created At : Wed Dec 25 2024, 12:49:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48103|51709|47420|45179|
|[hono](https://github.com/honojs/hono)|48079|50926|49544|43767|
|[fast](https://github.com/danteissaias/fast)|47247|51840|44370|45531|
|[oak](https://github.com/oakserver/oak)|26410|27454|25895|25881|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24627|31218|22951|19712|
|[fastify](https://github.com/fastify/fastify)|16960|17306|16757|16816|
|[koa](https://github.com/koajs/koa)|14492|15558|13420|14498|
|[express](https://github.com/expressjs/express)|6386|6571|6015|6572|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67838|76284|67419|59812|
|[hono](https://github.com/honojs/hono)|57964|78704|45499|49688|
|[nhttp](https://github.com/nhttp/nhttp)|57775|79760|40618|52946|
|[baojs](https://github.com/mattreid1/baojs)|33099|37299|32789|29210|
  



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


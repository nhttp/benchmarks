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
Created At : Sat May 13 2023, 12:38:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|52972|58359|53285|47273|
|[hono](https://github.com/honojs/hono)|50078|56762|48460|45013|
|[fast](https://github.com/danteissaias/fast)|48228|57264|37993|49427|
|[fastro](https://github.com/fastrodev/fastro)|44702|55300|46594|32211|
|[oak](https://github.com/oakserver/oak)|17512|18614|17712|16211|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36865|39770|36939|33886|
|[fastify](https://github.com/fastify/fastify)|29270|30592|29290|27927|
|[koa](https://github.com/koajs/koa)|18638|19487|17453|18973|
|[express](https://github.com/expressjs/express)|6187|6461|5613|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62713|63053|62504|62583|
|[hono](https://github.com/honojs/hono)|60095|59336|60828|60121|
|[elysia](https://github.com/elysiajs/elysia)|58714|58757|58876|58509|
|[baojs](https://github.com/mattreid1/baojs)|52307|57942|45414|53566|
  



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


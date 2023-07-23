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
Created At : Sun Jul 23 2023, 12:47:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56692|61044|55235|53798|
|[hono](https://github.com/honojs/hono)|53552|58127|54550|47979|
|[fastro](https://github.com/fastrodev/fastro)|20998|53813|4298|4883|
|[oak](https://github.com/oakserver/oak)|16595|17466|16300|16019|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37262|40483|36730|34574|
|[fastify](https://github.com/fastify/fastify)|28847|30207|28638|27695|
|[koa](https://github.com/koajs/koa)|18009|19073|16743|18210|
|[express](https://github.com/expressjs/express)|6279|6533|5627|6676|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63227|62934|62931|63816|
|[hono](https://github.com/honojs/hono)|61932|61495|60532|63769|
|[elysia](https://github.com/elysiajs/elysia)|61081|61578|57982|63682|
|[baojs](https://github.com/mattreid1/baojs)|50144|56004|41417|53011|
  



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


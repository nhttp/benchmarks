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
Created At : Tue Mar 25 2025, 12:54:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58517|67384|53223|54945|
|[hono](https://github.com/honojs/hono)|56762|60294|57981|52010|
|[fast](https://github.com/danteissaias/fast)|55303|62014|47446|56448|
|[oak](https://github.com/oakserver/oak)|28082|28581|27969|27697|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36993|42798|36440|31741|
|[fastify](https://github.com/fastify/fastify)|24814|24230|24912|25299|
|[koa](https://github.com/koajs/koa)|17059|18057|16173|16948|
|[express](https://github.com/expressjs/express)|6986|7167|6519|7273|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79537|90774|77698|70140|
|[nhttp](https://github.com/nhttp/nhttp)|71036|93990|58979|60140|
|[hono](https://github.com/honojs/hono)|65429|73189|61923|61176|
|[baojs](https://github.com/mattreid1/baojs)|48359|54389|45653|45034|
  



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


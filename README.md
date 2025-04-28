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
Created At : Mon Apr 28 2025, 1:01:11 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59414|67392|58221|52628|
|[hono](https://github.com/honojs/hono)|57257|62154|58015|51603|
|[fast](https://github.com/danteissaias/fast)|55870|67161|46300|54149|
|[oak](https://github.com/oakserver/oak)|28431|28859|28341|28093|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39790|47570|36935|34864|
|[fastify](https://github.com/fastify/fastify)|25192|27116|26015|22445|
|[koa](https://github.com/koajs/koa)|17233|18172|16711|16817|
|[express](https://github.com/expressjs/express)|6574|6737|6250|6735|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80506|95212|80426|65879|
|[nhttp](https://github.com/nhttp/nhttp)|71392|95457|54854|63866|
|[hono](https://github.com/honojs/hono)|65614|76599|61128|59116|
|[baojs](https://github.com/mattreid1/baojs)|48393|54902|43876|46400|
  



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


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
Created At : Sun May 14 2023, 12:42:40 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59643|64696|59637|54596|
|[hono](https://github.com/honojs/hono)|58987|64113|60134|52715|
|[fast](https://github.com/danteissaias/fast)|51979|62920|54467|38551|
|[fastro](https://github.com/fastrodev/fastro)|49950|62565|50902|36383|
|[oak](https://github.com/oakserver/oak)|19443|20520|19564|18245|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43880|47463|43789|40388|
|[fastify](https://github.com/fastify/fastify)|35643|37219|35249|34460|
|[koa](https://github.com/koajs/koa)|22313|23747|20897|22295|
|[express](https://github.com/expressjs/express)|7685|8002|7020|8033|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69688|67739|70931|70395|
|[elysia](https://github.com/elysiajs/elysia)|66547|66418|67459|65763|
|[hono](https://github.com/honojs/hono)|65812|66676|64375|66385|
|[baojs](https://github.com/mattreid1/baojs)|58655|65290|57559|53116|
  



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


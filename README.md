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
Created At : Sun Jul 28 2024, 12:46:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46260|48596|46274|43911|
|[hono](https://github.com/honojs/hono)|45471|48212|46021|42179|
|[fast](https://github.com/danteissaias/fast)|45346|49755|41470|44812|
|[oak](https://github.com/oakserver/oak)|25627|26310|24893|25679|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24454|31180|21952|20230|
|[fastify](https://github.com/fastify/fastify)|16924|17290|16826|16656|
|[koa](https://github.com/koajs/koa)|14434|15130|13672|14499|
|[express](https://github.com/expressjs/express)|6343|6536|6008|6486|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66988|81510|69561|49894|
|[nhttp](https://github.com/nhttp/nhttp)|62758|81461|53951|52861|
|[hono](https://github.com/honojs/hono)|62163|74273|52011|60204|
|[baojs](https://github.com/mattreid1/baojs)|39471|47080|36266|35068|
  



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


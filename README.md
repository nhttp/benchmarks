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
Created At : Mon Mar 25 2024, 12:38:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48657|52055|45564|48351|
|[nhttp](https://github.com/nhttp/nhttp)|48410|51249|47675|46306|
|[hono](https://github.com/honojs/hono)|47850|49793|48432|45324|
|[oak](https://github.com/oakserver/oak)|27946|29639|27973|26226|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25791|34272|23030|20071|
|[fastify](https://github.com/fastify/fastify)|16966|17463|16918|16516|
|[koa](https://github.com/koajs/koa)|14680|15565|13766|14708|
|[express](https://github.com/expressjs/express)|6350|6489|6059|6503|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76315|83828|74329|70787|
|[hono](https://github.com/honojs/hono)|65953|77665|63682|56512|
|[nhttp](https://github.com/nhttp/nhttp)|59854|86109|48942|44511|
|[baojs](https://github.com/mattreid1/baojs)|32037|37536|30845|27731|
  



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


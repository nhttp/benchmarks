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
Created At : Fri Jul 12 2024, 12:41:45 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47046|51161|43545|46432|
|[nhttp](https://github.com/nhttp/nhttp)|46921|50784|46302|43676|
|[hono](https://github.com/honojs/hono)|45989|49037|46889|42040|
|[oak](https://github.com/oakserver/oak)|26217|27258|25572|25820|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24720|30889|22540|20732|
|[fastify](https://github.com/fastify/fastify)|16860|17477|16628|16475|
|[koa](https://github.com/koajs/koa)|14330|15194|13393|14402|
|[express](https://github.com/expressjs/express)|6474|6653|6148|6621|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|70200|84910|73854|51837|
|[nhttp](https://github.com/nhttp/nhttp)|59098|87003|48162|42129|
|[hono](https://github.com/honojs/hono)|53467|67905|49954|42543|
|[baojs](https://github.com/mattreid1/baojs)|36691|43050|34624|32400|
  



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


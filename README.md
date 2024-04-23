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
Created At : Tue Apr 23 2024, 12:38:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47986|52130|45295|46532|
|[nhttp](https://github.com/nhttp/nhttp)|47768|51075|47046|45182|
|[hono](https://github.com/honojs/hono)|47165|49908|47510|44077|
|[oak](https://github.com/oakserver/oak)|27762|29333|27906|26046|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24262|30737|22225|19824|
|[fastify](https://github.com/fastify/fastify)|16682|17098|16605|16342|
|[koa](https://github.com/koajs/koa)|14705|15454|13548|15114|
|[express](https://github.com/expressjs/express)|6260|6464|5907|6410|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73262|82009|77754|60022|
|[nhttp](https://github.com/nhttp/nhttp)|62756|85807|50284|52176|
|[hono](https://github.com/honojs/hono)|56264|59968|60273|48551|
|[baojs](https://github.com/mattreid1/baojs)|36825|43619|36105|30752|
  



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


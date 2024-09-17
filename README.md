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
Created At : Tue Sep 17 2024, 12:38:44 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48676|52901|48030|45097|
|[hono](https://github.com/honojs/hono)|48229|51779|48891|44018|
|[fast](https://github.com/danteissaias/fast)|47846|51588|45235|46715|
|[oak](https://github.com/oakserver/oak)|25698|26645|24871|25578|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25072|31253|22943|21020|
|[fastify](https://github.com/fastify/fastify)|16692|17177|16475|16423|
|[express](https://github.com/expressjs/express)|6301|6422|5964|6517|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|68324|80178|70679|54114|
|[nhttp](https://github.com/nhttp/nhttp)|61176|81065|50926|51536|
|[hono](https://github.com/honojs/hono)|59402|70610|57165|50432|
|[baojs](https://github.com/mattreid1/baojs)|34778|40844|32769|30722|
  



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


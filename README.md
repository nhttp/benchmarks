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
Created At : Mon Nov 20 2023, 12:38:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|45490|49853|43476|43140|
|[nhttp](https://github.com/nhttp/nhttp)|45396|48889|44212|43086|
|[hono](https://github.com/honojs/hono)|44135|47145|44583|40676|
|[fastro](https://github.com/fastrodev/fastro)|23518|48026|11397|11131|
|[oak](https://github.com/oakserver/oak)|20644|21730|20626|19576|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|26360|31451|24598|23032|
|[fastify](https://github.com/fastify/fastify)|15692|16142|15285|15648|
|[koa](https://github.com/koajs/koa)|13957|14506|13229|14135|
|[express](https://github.com/expressjs/express)|6353|6508|6027|6524|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72378|80861|74943|61331|
|[nhttp](https://github.com/nhttp/nhttp)|68671|81855|62716|61442|
|[hono](https://github.com/honojs/hono)|67124|74482|62653|64237|
|[baojs](https://github.com/mattreid1/baojs)|38114|46057|36977|31307|
  



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


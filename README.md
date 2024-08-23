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
Created At : Fri Aug 23 2024, 12:43:39 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49038|53651|47896|45566|
|[hono](https://github.com/honojs/hono)|48635|52042|49420|44442|
|[fast](https://github.com/danteissaias/fast)|47450|52586|44679|45086|
|[oak](https://github.com/oakserver/oak)|26930|28082|26260|26449|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25102|32137|22449|20720|
|[fastify](https://github.com/fastify/fastify)|16761|17122|16769|16391|
|[koa](https://github.com/koajs/koa)|14065|14808|13002|14385|
|[express](https://github.com/expressjs/express)|6337|6430|6061|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73493|79644|79864|60972|
|[hono](https://github.com/honojs/hono)|65486|75992|63807|56659|
|[nhttp](https://github.com/nhttp/nhttp)|56064|78079|49805|40307|
|[baojs](https://github.com/mattreid1/baojs)|36541|43463|33546|32613|
  



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


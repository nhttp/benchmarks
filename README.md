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
Created At : Sat Mar 09 2024, 12:35:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49116|52937|48136|46274|
|[fast](https://github.com/danteissaias/fast)|48499|52146|46013|47338|
|[hono](https://github.com/honojs/hono)|47772|50639|48078|44600|
|[oak](https://github.com/oakserver/oak)|28433|30159|28592|26548|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25893|33142|23464|21072|
|[fastify](https://github.com/fastify/fastify)|17183|17635|17097|16817|
|[koa](https://github.com/koajs/koa)|14677|15508|13767|14757|
|[express](https://github.com/expressjs/express)|6482|6592|6191|6662|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80237|87874|85488|67350|
|[hono](https://github.com/honojs/hono)|65242|79604|65790|50332|
|[nhttp](https://github.com/nhttp/nhttp)|63366|85380|52402|52317|
|[baojs](https://github.com/mattreid1/baojs)|34687|40482|32238|31341|
  



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


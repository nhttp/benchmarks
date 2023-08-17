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
Created At : Thu Aug 17 2023, 12:33:42 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48707|52559|46343|47220|
|[hono](https://github.com/honojs/hono)|47389|50801|48836|42531|
|[fastro](https://github.com/fastrodev/fastro)|18907|47527|4606|4587|
|[oak](https://github.com/oakserver/oak)|14761|15641|14636|14006|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32218|35049|31543|30061|
|[fastify](https://github.com/fastify/fastify)|24290|24304|24660|23906|
|[koa](https://github.com/koajs/koa)|15415|16293|14520|15431|
|[express](https://github.com/expressjs/express)|5366|5535|4965|5598|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56764|57890|55813|56588|
|[hono](https://github.com/honojs/hono)|54046|49637|56171|56331|
|[elysia](https://github.com/elysiajs/elysia)|54029|53385|54326|54375|
|[baojs](https://github.com/mattreid1/baojs)|43125|48142|39107|42126|
  



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


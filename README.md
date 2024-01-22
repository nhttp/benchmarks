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
Created At : Mon Jan 22 2024, 12:41:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47538|50758|46509|45346|
|[fast](https://github.com/danteissaias/fast)|47522|50847|45440|46280|
|[hono](https://github.com/honojs/hono)|46250|48673|46950|43128|
|[fastro](https://github.com/fastrodev/fastro)|23761|49522|10693|11067|
|[oak](https://github.com/oakserver/oak)|22893|24002|22820|21857|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24760|31254|22759|20268|
|[fastify](https://github.com/fastify/fastify)|16413|16935|15887|16417|
|[koa](https://github.com/koajs/koa)|14038|14738|13420|13955|
|[express](https://github.com/expressjs/express)|6339|6455|6054|6508|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72602|82805|72646|62356|
|[nhttp](https://github.com/nhttp/nhttp)|63263|87435|55810|46545|
|[hono](https://github.com/honojs/hono)|61603|69025|62269|53515|
|[baojs](https://github.com/mattreid1/baojs)|35185|40117|35248|30190|
  



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


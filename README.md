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
Created At : Tue Nov 05 2024, 12:49:13 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48258|52123|47521|45131|
|[fast](https://github.com/danteissaias/fast)|48205|51861|44722|48031|
|[hono](https://github.com/honojs/hono)|47953|50672|48894|44293|
|[oak](https://github.com/oakserver/oak)|26058|27124|25356|25695|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24340|29864|22310|20845|
|[fastify](https://github.com/fastify/fastify)|17345|17808|17181|17046|
|[koa](https://github.com/koajs/koa)|14346|15174|13172|14691|
|[express](https://github.com/expressjs/express)|6425|6630|5979|6665|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79495|88341|79476|70667|
|[hono](https://github.com/honojs/hono)|61278|73728|55023|55084|
|[nhttp](https://github.com/nhttp/nhttp)|59833|84229|45209|50062|
|[baojs](https://github.com/mattreid1/baojs)|35325|42350|31729|31895|
  



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


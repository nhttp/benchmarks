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
Created At : Sat Jan 18 2025, 12:46:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57466|67841|56055|48503|
|[hono](https://github.com/honojs/hono)|54601|56835|57295|49672|
|[fast](https://github.com/danteissaias/fast)|51470|61670|47585|45155|
|[oak](https://github.com/oakserver/oak)|28126|29614|27860|26905|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41041|46207|40294|36621|
|[fastify](https://github.com/fastify/fastify)|24054|22927|26846|22390|
|[koa](https://github.com/koajs/koa)|17081|18320|15589|17335|
|[express](https://github.com/expressjs/express)|6867|7056|6286|7259|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78015|88895|77275|67875|
|[nhttp](https://github.com/nhttp/nhttp)|68996|92927|58374|55687|
|[hono](https://github.com/honojs/hono)|63692|69924|60962|60189|
|[baojs](https://github.com/mattreid1/baojs)|47880|53394|43391|46855|
  



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


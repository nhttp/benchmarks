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
Created At : Sat Jan 04 2025, 12:49:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47670|51040|47486|44484|
|[fast](https://github.com/danteissaias/fast)|47415|51282|45254|45709|
|[hono](https://github.com/honojs/hono)|46953|50123|47809|42927|
|[oak](https://github.com/oakserver/oak)|26426|27508|25899|25870|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24726|30602|23000|20575|
|[fastify](https://github.com/fastify/fastify)|16988|17493|16771|16700|
|[koa](https://github.com/koajs/koa)|14016|14842|13222|13984|
|[express](https://github.com/expressjs/express)|6314|6493|5999|6451|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74861|80184|80158|64240|
|[hono](https://github.com/honojs/hono)|61868|74215|53848|57540|
|[nhttp](https://github.com/nhttp/nhttp)|59458|78614|41866|57894|
|[baojs](https://github.com/mattreid1/baojs)|34352|40337|33399|29320|
  



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


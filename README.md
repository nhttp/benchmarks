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
Created At : Tue Dec 17 2024, 12:55:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48434|52611|48500|44191|
|[hono](https://github.com/honojs/hono)|47549|50439|48131|44077|
|[fast](https://github.com/danteissaias/fast)|47364|51534|44578|45979|
|[oak](https://github.com/oakserver/oak)|26204|27173|25432|26008|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24825|31544|22475|20455|
|[fastify](https://github.com/fastify/fastify)|16806|16998|16790|16631|
|[koa](https://github.com/koajs/koa)|14033|14980|13221|13897|
|[express](https://github.com/expressjs/express)|6322|6469|5921|6576|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75674|79732|79459|67830|
|[hono](https://github.com/honojs/hono)|60662|73536|54898|53551|
|[nhttp](https://github.com/nhttp/nhttp)|56220|77975|40119|50565|
|[baojs](https://github.com/mattreid1/baojs)|37503|45426|36383|30699|
  



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


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
Created At : Sat Mar 29 2025, 12:53:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59272|64006|61848|51962|
|[hono](https://github.com/honojs/hono)|56758|63157|58705|48413|
|[fast](https://github.com/danteissaias/fast)|55033|60366|49307|55425|
|[oak](https://github.com/oakserver/oak)|27358|28420|25486|28169|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39221|45415|38537|33712|
|[fastify](https://github.com/fastify/fastify)|24946|24964|25396|24478|
|[koa](https://github.com/koajs/koa)|17025|18213|15653|17209|
|[express](https://github.com/expressjs/express)|7029|7249|6666|7173|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76141|86091|77666|64665|
|[nhttp](https://github.com/nhttp/nhttp)|66412|86331|54692|58214|
|[hono](https://github.com/honojs/hono)|62519|72278|58544|56734|
|[baojs](https://github.com/mattreid1/baojs)|47101|53318|43183|44801|
  



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


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
Created At : Thu Dec 26 2024, 12:49:59 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47769|53246|43853|46208|
|[nhttp](https://github.com/nhttp/nhttp)|47730|51030|47803|44358|
|[hono](https://github.com/honojs/hono)|47328|50490|47988|43505|
|[oak](https://github.com/oakserver/oak)|26545|27286|26163|26186|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23924|29508|22180|20083|
|[fastify](https://github.com/fastify/fastify)|16471|16457|16930|16027|
|[koa](https://github.com/koajs/koa)|14029|14997|12996|14093|
|[express](https://github.com/expressjs/express)|6417|6601|5997|6654|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78400|79601|79860|75738|
|[nhttp](https://github.com/nhttp/nhttp)|60125|81963|48863|49549|
|[hono](https://github.com/honojs/hono)|53697|59811|52435|48845|
|[baojs](https://github.com/mattreid1/baojs)|35425|38722|35631|31923|
  



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


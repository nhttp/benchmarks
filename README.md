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
Created At : Sat Apr 08 2023, 12:38:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45796|46874|47327|43187|
|[hono](https://github.com/honojs/hono)|41783|47228|41286|36834|
|[fast](https://github.com/danteissaias/fast)|39740|49365|37409|32446|
|[fastro](https://github.com/fastrodev/fastro)|35094|45205|32995|27081|
|[oak](https://github.com/oakserver/oak)|17479|18484|17795|16159|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37811|40674|37296|35464|
|[fastify](https://github.com/fastify/fastify)|29429|30250|29644|28393|
|[koa](https://github.com/koajs/koa)|18311|19245|17010|18678|
|[express](https://github.com/expressjs/express)|6375|6563|5851|6711|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62127|62198|61877|62307|
|[hono](https://github.com/honojs/hono)|60612|58531|63681|59625|
|[elysia](https://github.com/elysiajs/elysia)|57844|54872|60769|57891|
|[baojs](https://github.com/mattreid1/baojs)|52626|58931|54399|44549|
  



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


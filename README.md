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
Created At : Fri Aug 11 2023, 12:33:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49179|51526|48997|47015|
|[hono](https://github.com/honojs/hono)|48419|50541|49659|45058|
|[fastro](https://github.com/fastrodev/fastro)|18223|45330|5239|4100|
|[oak](https://github.com/oakserver/oak)|15085|15930|15263|14062|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|32572|35154|32123|30439|
|[fastify](https://github.com/fastify/fastify)|24185|25248|23941|23366|
|[koa](https://github.com/koajs/koa)|15539|16547|14407|15663|
|[express](https://github.com/expressjs/express)|5371|5579|4926|5608|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|56529|56269|57169|56148|
|[hono](https://github.com/honojs/hono)|55694|54275|56631|56177|
|[elysia](https://github.com/elysiajs/elysia)|55507|55628|53965|56928|
|[baojs](https://github.com/mattreid1/baojs)|43648|48315|45282|37347|
  



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


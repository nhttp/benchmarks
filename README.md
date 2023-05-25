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
Created At : Thu May 25 2023, 12:41:19 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|55638|60087|55234|51594|
|[hono](https://github.com/honojs/hono)|55493|60025|56995|49459|
|[fast](https://github.com/danteissaias/fast)|47567|59554|30653|52493|
|[fastro](https://github.com/fastrodev/fastro)|47562|58887|49843|33957|
|[oak](https://github.com/oakserver/oak)|18552|19826|18498|17331|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41776|45808|40832|38687|
|[fastify](https://github.com/fastify/fastify)|30454|32003|30463|28896|
|[koa](https://github.com/koajs/koa)|19525|20609|18232|19735|
|[express](https://github.com/expressjs/express)|6602|6718|6222|6866|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|62800|60545|64872|62983|
|[nhttp](https://github.com/nhttp/nhttp)|62458|60000|63880|63493|
|[elysia](https://github.com/elysiajs/elysia)|60669|60711|60143|61154|
|[baojs](https://github.com/mattreid1/baojs)|55075|60879|57497|46850|
  



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


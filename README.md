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
Created At : Thu Apr 04 2024, 12:38:14 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48529|52025|47121|46440|
|[fast](https://github.com/danteissaias/fast)|48249|51731|43523|49493|
|[hono](https://github.com/honojs/hono)|47219|49625|48231|43801|
|[oak](https://github.com/oakserver/oak)|27616|29337|27763|25748|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25439|31616|23192|21510|
|[fastify](https://github.com/fastify/fastify)|16930|17379|16818|16592|
|[koa](https://github.com/koajs/koa)|13187|13874|12469|13218|
|[express](https://github.com/expressjs/express)|6415|6586|6102|6556|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74867|83795|78997|61808|
|[nhttp](https://github.com/nhttp/nhttp)|64509|84611|55019|53897|
|[hono](https://github.com/honojs/hono)|56818|64171|60141|46141|
|[baojs](https://github.com/mattreid1/baojs)|35665|40616|33891|32487|
  



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


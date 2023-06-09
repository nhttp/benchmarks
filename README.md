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
Created At : Fri Jun 09 2023, 12:49:49 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50638|53385|51077|47451|
|[hono](https://github.com/honojs/hono)|48766|52895|49795|43609|
|[fast](https://github.com/danteissaias/fast)|47573|55111|43381|44228|
|[fastro](https://github.com/fastrodev/fastro)|41998|53022|43598|29374|
|[oak](https://github.com/oakserver/oak)|17091|18425|17048|15799|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37465|40156|36782|35458|
|[fastify](https://github.com/fastify/fastify)|28807|30382|28555|27485|
|[koa](https://github.com/koajs/koa)|18145|19274|17164|17996|
|[express](https://github.com/expressjs/express)|6044|6434|5411|6288|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60807|58297|62302|61822|
|[hono](https://github.com/honojs/hono)|60079|59922|60442|59874|
|[elysia](https://github.com/elysiajs/elysia)|58867|57341|58818|60442|
|[baojs](https://github.com/mattreid1/baojs)|47285|53720|42568|45568|
  



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


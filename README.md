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
Created At : Sun Dec 15 2024, 12:59:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47913|51944|46652|45142|
|[hono](https://github.com/honojs/hono)|47015|49739|47502|43803|
|[fast](https://github.com/danteissaias/fast)|46664|51763|43655|44573|
|[oak](https://github.com/oakserver/oak)|25608|26314|25101|25410|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23700|29061|22186|19853|
|[fastify](https://github.com/fastify/fastify)|16798|17152|16788|16454|
|[koa](https://github.com/koajs/koa)|14134|14936|12926|14541|
|[express](https://github.com/expressjs/express)|6145|6348|5758|6328|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|65708|78522|69969|48632|
|[nhttp](https://github.com/nhttp/nhttp)|51616|75843|36286|42720|
|[hono](https://github.com/honojs/hono)|47214|56367|44968|40306|
|[baojs](https://github.com/mattreid1/baojs)|29534|32773|29762|26067|
  



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


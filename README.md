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
Created At : Wed Jan 17 2024, 12:41:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48315|51390|45439|48115|
|[nhttp](https://github.com/nhttp/nhttp)|47752|51268|46374|45614|
|[hono](https://github.com/honojs/hono)|47079|49548|47411|44278|
|[fastro](https://github.com/fastrodev/fastro)|24793|51142|11754|11482|
|[oak](https://github.com/oakserver/oak)|22945|24208|22818|21809|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25126|31868|22901|20608|
|[fastify](https://github.com/fastify/fastify)|17177|17482|17088|16961|
|[koa](https://github.com/koajs/koa)|14590|15634|13611|14525|
|[express](https://github.com/expressjs/express)|6400|6490|6125|6586|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71830|83845|74344|57301|
|[hono](https://github.com/honojs/hono)|60324|69756|61270|49947|
|[nhttp](https://github.com/nhttp/nhttp)|58795|81770|52399|42216|
|[baojs](https://github.com/mattreid1/baojs)|36895|43434|34535|32715|
  



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


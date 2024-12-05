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
Created At : Thu Dec 05 2024, 12:55:05 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48850|51972|49784|44793|
|[nhttp](https://github.com/nhttp/nhttp)|48770|52355|48696|45259|
|[fast](https://github.com/danteissaias/fast)|47456|51761|44819|45787|
|[oak](https://github.com/oakserver/oak)|26539|27483|26050|26085|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24493|30104|22807|20567|
|[fastify](https://github.com/fastify/fastify)|17348|17827|17232|16984|
|[koa](https://github.com/koajs/koa)|14175|15197|13162|14165|
|[express](https://github.com/expressjs/express)|6439|6624|6015|6679|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74737|84393|74059|65760|
|[nhttp](https://github.com/nhttp/nhttp)|54889|81606|42524|40537|
|[hono](https://github.com/honojs/hono)|53620|70016|43710|47134|
|[baojs](https://github.com/mattreid1/baojs)|36407|44519|34555|30148|
  



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


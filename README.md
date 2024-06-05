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
Created At : Wed Jun 05 2024, 12:39:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48421|51542|49043|44678|
|[nhttp](https://github.com/nhttp/nhttp)|47864|51630|47354|44607|
|[fast](https://github.com/danteissaias/fast)|47827|51684|44087|47710|
|[oak](https://github.com/oakserver/oak)|27474|28302|26993|27127|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24087|29409|22565|20287|
|[fastify](https://github.com/fastify/fastify)|17085|17464|17031|16759|
|[koa](https://github.com/koajs/koa)|14423|15330|13524|14414|
|[express](https://github.com/expressjs/express)|6363|6473|6069|6547|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71141|83810|78049|51565|
|[nhttp](https://github.com/nhttp/nhttp)|61734|86993|51762|46448|
|[hono](https://github.com/honojs/hono)|54241|63880|45615|53228|
|[baojs](https://github.com/mattreid1/baojs)|35997|40471|35537|31982|
  



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


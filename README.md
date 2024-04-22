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
Created At : Mon Apr 22 2024, 12:40:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48110|51418|47007|45905|
|[fast](https://github.com/danteissaias/fast)|47867|51192|44717|47692|
|[hono](https://github.com/honojs/hono)|47082|49458|47411|44377|
|[oak](https://github.com/oakserver/oak)|27458|29022|27571|25782|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25223|32198|23048|20424|
|[fastify](https://github.com/fastify/fastify)|16464|16764|16304|16323|
|[koa](https://github.com/koajs/koa)|14524|15195|13622|14756|
|[express](https://github.com/expressjs/express)|6500|6555|6417|6529|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73868|85348|71190|65067|
|[nhttp](https://github.com/nhttp/nhttp)|63682|86021|57379|47646|
|[hono](https://github.com/honojs/hono)|58871|72229|57324|47061|
|[baojs](https://github.com/mattreid1/baojs)|37182|43883|36359|31303|
  



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


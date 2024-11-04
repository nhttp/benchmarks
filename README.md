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
Created At : Mon Nov 04 2024, 12:52:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49062|53412|48424|45351|
|[hono](https://github.com/honojs/hono)|48858|52217|50175|44182|
|[fast](https://github.com/danteissaias/fast)|48637|52937|45508|47465|
|[oak](https://github.com/oakserver/oak)|26849|27895|26228|26423|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25851|32203|23465|21886|
|[fastify](https://github.com/fastify/fastify)|17630|18033|17616|17241|
|[koa](https://github.com/koajs/koa)|13799|14285|13395|13716|
|[express](https://github.com/expressjs/express)|6425|6630|6048|6596|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79311|87655|80587|69690|
|[nhttp](https://github.com/nhttp/nhttp)|65819|85594|54927|56937|
|[hono](https://github.com/honojs/hono)|65505|77749|63391|55375|
|[baojs](https://github.com/mattreid1/baojs)|39024|47603|35718|33751|
  



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


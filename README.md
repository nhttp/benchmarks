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
Created At : Fri Feb 09 2024, 12:35:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48340|52152|45895|46972|
|[nhttp](https://github.com/nhttp/nhttp)|48105|51601|46788|45925|
|[hono](https://github.com/honojs/hono)|46915|49455|47730|43559|
|[oak](https://github.com/oakserver/oak)|27155|28602|27261|25603|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25187|31718|23306|20537|
|[fastify](https://github.com/fastify/fastify)|16770|17128|16577|16605|
|[koa](https://github.com/koajs/koa)|14636|15158|13950|14800|
|[express](https://github.com/expressjs/express)|6392|6538|6129|6510|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73670|83707|73888|63416|
|[hono](https://github.com/honojs/hono)|62592|73113|54977|59687|
|[nhttp](https://github.com/nhttp/nhttp)|60428|83463|48465|49355|
|[baojs](https://github.com/mattreid1/baojs)|35783|43760|33097|30491|
  



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


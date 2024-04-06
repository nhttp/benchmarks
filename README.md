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
Created At : Sat Apr 06 2024, 12:36:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48581|52554|46987|46201|
|[fast](https://github.com/danteissaias/fast)|47992|51646|44968|47363|
|[hono](https://github.com/honojs/hono)|47978|50673|48173|45087|
|[oak](https://github.com/oakserver/oak)|27783|29560|27841|25947|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25473|32575|23393|20450|
|[fastify](https://github.com/fastify/fastify)|16875|17263|16778|16583|
|[koa](https://github.com/koajs/koa)|14560|15479|13743|14458|
|[express](https://github.com/expressjs/express)|6439|6546|6323|6447|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73671|86144|69718|65150|
|[hono](https://github.com/honojs/hono)|63857|74796|62398|54378|
|[nhttp](https://github.com/nhttp/nhttp)|61168|86374|47382|49747|
|[baojs](https://github.com/mattreid1/baojs)|35966|39694|35318|32885|
  



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


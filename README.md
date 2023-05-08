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
Created At : Mon May 08 2023, 8:13:06 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|62396|69146|60172|57869|
|[hono](https://github.com/honojs/hono)|61234|66431|63128|54142|
|[fast](https://github.com/danteissaias/fast)|54986|64868|43062|57028|
|[fastro](https://github.com/fastrodev/fastro)|52730|64416|55782|37993|
|[oak](https://github.com/oakserver/oak)|19673|21052|19583|18384|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47781|51137|46929|45276|
|[fastify](https://github.com/fastify/fastify)|35220|36968|35095|33598|
|[koa](https://github.com/koajs/koa)|22086|23238|20761|22260|
|[express](https://github.com/expressjs/express)|7823|8014|7301|8155|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|66417|64861|67542|66847|
|[hono](https://github.com/honojs/hono)|66318|67065|67155|64733|
|[elysia](https://github.com/elysiajs/elysia)|66260|67139|66925|64716|
|[baojs](https://github.com/mattreid1/baojs)|51785|61745|47544|46065|
  



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


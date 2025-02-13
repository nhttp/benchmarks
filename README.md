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
Created At : Thu Feb 13 2025, 12:50:51 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59794|70922|57223|51238|
|[hono](https://github.com/honojs/hono)|57724|63399|60779|48995|
|[fast](https://github.com/danteissaias/fast)|56059|66796|47468|53914|
|[oak](https://github.com/oakserver/oak)|27937|29145|27418|27247|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38472|45814|37269|32333|
|[fastify](https://github.com/fastify/fastify)|24840|24331|27170|23019|
|[koa](https://github.com/koajs/koa)|17350|18062|16513|17476|
|[express](https://github.com/expressjs/express)|7041|7265|6737|7120|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80046|93772|82817|63549|
|[nhttp](https://github.com/nhttp/nhttp)|67033|87522|57363|56213|
|[hono](https://github.com/honojs/hono)|65853|76226|60381|60953|
|[baojs](https://github.com/mattreid1/baojs)|48191|55189|42582|46801|
  



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


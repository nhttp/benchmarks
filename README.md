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
Created At : Sat Jan 25 2025, 12:46:03 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60039|63253|58105|58760|
|[hono](https://github.com/honojs/hono)|56418|58909|59402|50942|
|[fast](https://github.com/danteissaias/fast)|50766|57802|43492|51005|
|[oak](https://github.com/oakserver/oak)|27786|28965|27665|26727|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38392|44779|35547|34850|
|[fastify](https://github.com/fastify/fastify)|23922|26134|22235|23397|
|[koa](https://github.com/koajs/koa)|17201|17592|16660|17350|
|[express](https://github.com/expressjs/express)|6972|7181|6462|7272|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77543|91280|75611|65737|
|[nhttp](https://github.com/nhttp/nhttp)|70040|93410|58686|58024|
|[hono](https://github.com/honojs/hono)|63599|70169|57601|63027|
|[baojs](https://github.com/mattreid1/baojs)|49239|55321|42643|49753|
  



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


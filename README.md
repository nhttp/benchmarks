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
Created At : Sat Jun 01 2024, 12:42:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48650|51675|48064|46212|
|[hono](https://github.com/honojs/hono)|48361|51059|49617|44406|
|[fast](https://github.com/danteissaias/fast)|48130|52162|46043|46186|
|[oak](https://github.com/oakserver/oak)|27722|28642|27083|27441|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24332|30085|22363|20548|
|[fastify](https://github.com/fastify/fastify)|17160|17510|17080|16890|
|[koa](https://github.com/koajs/koa)|14686|15564|13925|14569|
|[express](https://github.com/expressjs/express)|6550|6628|6297|6726|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71552|84041|70321|60295|
|[nhttp](https://github.com/nhttp/nhttp)|61788|82041|55175|48148|
|[hono](https://github.com/honojs/hono)|57430|70072|52536|49681|
|[baojs](https://github.com/mattreid1/baojs)|37552|44164|33187|35304|
  



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


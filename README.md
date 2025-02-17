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
Created At : Mon Feb 17 2025, 12:53:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59009|64660|59059|53309|
|[hono](https://github.com/honojs/hono)|55650|62796|55085|49069|
|[fast](https://github.com/danteissaias/fast)|52879|60869|47807|49962|
|[oak](https://github.com/oakserver/oak)|27799|29272|26937|27187|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40835|47192|38796|36518|
|[fastify](https://github.com/fastify/fastify)|24131|23731|24749|23913|
|[koa](https://github.com/koajs/koa)|17249|18816|15804|17128|
|[express](https://github.com/expressjs/express)|6952|7146|6421|7288|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|79641|92189|74990|71745|
|[hono](https://github.com/honojs/hono)|67773|77197|62564|63558|
|[nhttp](https://github.com/nhttp/nhttp)|66409|83319|55964|59945|
|[baojs](https://github.com/mattreid1/baojs)|50976|55892|49043|47994|
  



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


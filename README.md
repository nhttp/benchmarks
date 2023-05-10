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
Created At : Wed May 10 2023, 12:39:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|33517|35438|33946|31166|
|[hono](https://github.com/honojs/hono)|32067|35870|33786|26544|
|[fast](https://github.com/danteissaias/fast)|29479|36498|24992|26947|
|[fastro](https://github.com/fastrodev/fastro)|28534|36211|29536|19856|
|[oak](https://github.com/oakserver/oak)|9679|10397|9917|8722|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|19362|20978|19375|17733|
|[fastify](https://github.com/fastify/fastify)|13393|13965|13085|13130|
|[koa](https://github.com/koajs/koa)|8513|8799|8110|8630|
|[express](https://github.com/expressjs/express)|3520|3576|3205|3780|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39784|41440|41455|36456|
|[elysia](https://github.com/elysiajs/elysia)|36827|38505|37070|34907|
|[hono](https://github.com/honojs/hono)|36620|36929|37592|35338|
|[baojs](https://github.com/mattreid1/baojs)|33174|37309|26377|35837|
  



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


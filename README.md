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
Created At : Thu Jan 16 2025, 12:48:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58537|66680|57168|51762|
|[fast](https://github.com/danteissaias/fast)|56640|68246|49270|52405|
|[hono](https://github.com/honojs/hono)|55804|62702|58062|46649|
|[oak](https://github.com/oakserver/oak)|28405|29819|27811|27585|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41192|48784|38692|36099|
|[fastify](https://github.com/fastify/fastify)|24709|23810|24461|25856|
|[koa](https://github.com/koajs/koa)|17572|18728|16400|17588|
|[express](https://github.com/expressjs/express)|7041|7177|6690|7257|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77760|90243|70960|72077|
|[nhttp](https://github.com/nhttp/nhttp)|73570|99448|60117|61144|
|[hono](https://github.com/honojs/hono)|65286|71875|61768|62215|
|[baojs](https://github.com/mattreid1/baojs)|49339|55760|45632|46625|
  



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


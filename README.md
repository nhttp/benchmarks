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
Created At : Tue Jul 25 2023, 12:47:57 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|29647|31011|29040|28891|
|[hono](https://github.com/honojs/hono)|28229|29410|28135|27143|
|[fastro](https://github.com/fastrodev/fastro)|10798|26043|2930|3422|
|[oak](https://github.com/oakserver/oak)|7918|8335|7667|7751|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|15682|17344|14699|15003|
|[fastify](https://github.com/fastify/fastify)|11789|12020|11836|11512|
|[koa](https://github.com/koajs/koa)|7472|7893|7055|7469|
|[express](https://github.com/expressjs/express)|3090|3226|2911|3133|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31978|34029|30817|31088|
|[elysia](https://github.com/elysiajs/elysia)|31649|34126|31650|29170|
|[hono](https://github.com/honojs/hono)|31409|33690|31006|29530|
|[baojs](https://github.com/mattreid1/baojs)|25606|29691|26604|20523|
  



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


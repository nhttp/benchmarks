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
Created At : Mon Apr 21 2025, 1:02:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58549|65327|60518|49801|
|[nhttp](https://github.com/nhttp/nhttp)|58393|63211|58222|53746|
|[fast](https://github.com/danteissaias/fast)|52269|63956|42916|49934|
|[oak](https://github.com/oakserver/oak)|28392|29736|27230|28209|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38033|45748|36335|32015|
|[fastify](https://github.com/fastify/fastify)|24626|24724|25810|23343|
|[koa](https://github.com/koajs/koa)|16979|17589|16169|17180|
|[express](https://github.com/expressjs/express)|6517|6686|6170|6695|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80564|93891|82477|65325|
|[nhttp](https://github.com/nhttp/nhttp)|72698|93914|62952|61229|
|[hono](https://github.com/honojs/hono)|65103|67352|65780|62176|
|[baojs](https://github.com/mattreid1/baojs)|48901|53262|45236|48204|
  



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


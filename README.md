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
Created At : Fri Apr 11 2025, 12:55:16 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59389|65803|59095|53269|
|[hono](https://github.com/honojs/hono)|55651|60425|58089|48438|
|[fast](https://github.com/danteissaias/fast)|53558|61361|45312|54000|
|[oak](https://github.com/oakserver/oak)|27521|28597|25693|28273|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37950|43123|35912|34816|
|[fastify](https://github.com/fastify/fastify)|24981|26488|24394|24060|
|[koa](https://github.com/koajs/koa)|16953|17469|15993|17398|
|[express](https://github.com/expressjs/express)|6344|6512|6232|6287|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76209|84165|75835|68628|
|[nhttp](https://github.com/nhttp/nhttp)|67355|83456|59747|58861|
|[hono](https://github.com/honojs/hono)|66325|79232|61459|58284|
|[baojs](https://github.com/mattreid1/baojs)|48018|52976|43797|47281|
  



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


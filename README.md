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
Created At : Mon Mar 10 2025, 12:43:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59575|66224|55121|57380|
|[hono](https://github.com/honojs/hono)|56382|65699|54620|48827|
|[fast](https://github.com/danteissaias/fast)|53810|62634|46132|52665|
|[oak](https://github.com/oakserver/oak)|28144|29701|26915|27815|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39967|44546|39269|36086|
|[fastify](https://github.com/fastify/fastify)|25325|25069|26147|24760|
|[koa](https://github.com/koajs/koa)|16972|18107|15831|16978|
|[express](https://github.com/expressjs/express)|6942|7201|6436|7189|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75845|88232|71763|67539|
|[nhttp](https://github.com/nhttp/nhttp)|70265|93424|55873|61497|
|[hono](https://github.com/honojs/hono)|63450|66167|61051|63133|
|[baojs](https://github.com/mattreid1/baojs)|48475|53486|45851|46088|
  



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


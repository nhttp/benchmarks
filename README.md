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
Created At : Fri May 10 2024, 12:39:08 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48281|51017|47667|46158|
|[fast](https://github.com/danteissaias/fast)|47305|51627|44982|45305|
|[hono](https://github.com/honojs/hono)|47010|49176|47229|44626|
|[oak](https://github.com/oakserver/oak)|27399|28947|27512|25737|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24687|31749|22274|20037|
|[fastify](https://github.com/fastify/fastify)|16649|17166|16360|16420|
|[koa](https://github.com/koajs/koa)|14431|15018|13719|14556|
|[express](https://github.com/expressjs/express)|6324|6432|6115|6426|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75485|84450|81429|60576|
|[nhttp](https://github.com/nhttp/nhttp)|56555|85462|45494|38708|
|[hono](https://github.com/honojs/hono)|53855|62332|49760|49472|
|[baojs](https://github.com/mattreid1/baojs)|38651|43805|35185|36964|
  



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


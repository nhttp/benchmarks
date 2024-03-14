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
Created At : Thu Mar 14 2024, 12:35:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50244|53476|48755|48502|
|[fast](https://github.com/danteissaias/fast)|49719|52880|47545|48731|
|[hono](https://github.com/honojs/hono)|48001|50867|48093|45042|
|[oak](https://github.com/oakserver/oak)|28871|30818|28862|26932|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25770|33106|23706|20499|
|[fastify](https://github.com/fastify/fastify)|17077|17409|16983|16840|
|[koa](https://github.com/koajs/koa)|14759|15398|13977|14903|
|[express](https://github.com/expressjs/express)|6641|6854|6376|6692|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78545|92240|82005|61391|
|[nhttp](https://github.com/nhttp/nhttp)|64224|91316|48746|52611|
|[hono](https://github.com/honojs/hono)|56381|56989|62711|49444|
|[baojs](https://github.com/mattreid1/baojs)|38362|44652|36268|34167|
  



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


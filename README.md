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
Created At : Tue Oct 03 2023, 12:36:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58742|62195|58951|55081|
|[hono](https://github.com/honojs/hono)|54277|59600|54689|48541|
|[fast](https://github.com/danteissaias/fast)|46087|60007|50480|27774|
|[fastro](https://github.com/fastrodev/fastro)|22822|55306|7130|6029|
|[oak](https://github.com/oakserver/oak)|17261|18359|16953|16471|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37258|40821|36894|34060|
|[fastify](https://github.com/fastify/fastify)|27723|28540|27937|26692|
|[koa](https://github.com/koajs/koa)|17509|18591|16220|17716|
|[express](https://github.com/expressjs/express)|5823|5937|5679|5852|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|54475|52698|55555|55172|
|[hono](https://github.com/honojs/hono)|54369|53307|54999|54802|
|[elysia](https://github.com/elysiajs/elysia)|52980|52906|49162|56872|
|[baojs](https://github.com/mattreid1/baojs)|39985|45418|38344|36194|
  



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


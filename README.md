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
Created At : Sun Feb 09 2025, 12:53:23 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58484|59803|59274|56375|
|[nhttp](https://github.com/nhttp/nhttp)|57682|63367|52830|56849|
|[fast](https://github.com/danteissaias/fast)|52450|61273|43292|52786|
|[oak](https://github.com/oakserver/oak)|28393|29731|26239|29210|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39582|49414|37326|32007|
|[fastify](https://github.com/fastify/fastify)|24292|24467|24803|23607|
|[koa](https://github.com/koajs/koa)|17156|17563|16289|17617|
|[express](https://github.com/expressjs/express)|6994|7392|6316|7275|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76847|89375|75357|65809|
|[nhttp](https://github.com/nhttp/nhttp)|70842|92951|57308|62268|
|[hono](https://github.com/honojs/hono)|66985|75030|64343|61581|
|[baojs](https://github.com/mattreid1/baojs)|48297|55393|41649|47849|
  



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


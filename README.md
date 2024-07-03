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
Created At : Wed Jul 03 2024, 12:41:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49497|53405|48899|46186|
|[hono](https://github.com/honojs/hono)|48713|51688|50113|44339|
|[fast](https://github.com/danteissaias/fast)|48388|52315|44759|48090|
|[oak](https://github.com/oakserver/oak)|27503|28571|26888|27051|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25406|32008|23492|20719|
|[fastify](https://github.com/fastify/fastify)|17351|17804|17387|16861|
|[koa](https://github.com/koajs/koa)|14615|15477|13673|14695|
|[express](https://github.com/expressjs/express)|6507|6643|6227|6652|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67667|81374|73864|47762|
|[nhttp](https://github.com/nhttp/nhttp)|62152|85378|53176|47901|
|[hono](https://github.com/honojs/hono)|59282|67675|58727|51445|
|[baojs](https://github.com/mattreid1/baojs)|35854|41215|34984|31363|
  



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


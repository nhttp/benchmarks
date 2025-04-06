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
Created At : Sun Apr 06 2025, 12:58:25 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57965|64152|58403|51339|
|[hono](https://github.com/honojs/hono)|56383|61152|59242|48754|
|[fast](https://github.com/danteissaias/fast)|52624|65961|44862|47049|
|[oak](https://github.com/oakserver/oak)|26919|28164|25847|26746|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39367|44910|37585|35605|
|[fastify](https://github.com/fastify/fastify)|24107|25144|24392|22786|
|[koa](https://github.com/koajs/koa)|16845|17388|16334|16814|
|[express](https://github.com/expressjs/express)|6509|6485|6447|6596|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75765|79981|78849|68466|
|[nhttp](https://github.com/nhttp/nhttp)|62785|80912|53016|54427|
|[hono](https://github.com/honojs/hono)|62410|70684|58155|58391|
|[baojs](https://github.com/mattreid1/baojs)|48064|52417|45126|46650|
  



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


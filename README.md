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
Created At : Wed Aug 02 2023, 12:42:12 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|53280|57192|53301|49346|
|[nhttp](https://github.com/nhttp/nhttp)|50803|57815|43188|51407|
|[fastro](https://github.com/fastrodev/fastro)|20620|52202|4918|4740|
|[oak](https://github.com/oakserver/oak)|15832|16368|16310|14817|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35527|38071|35251|33260|
|[fastify](https://github.com/fastify/fastify)|27582|28965|27371|26410|
|[koa](https://github.com/koajs/koa)|17834|18885|16526|18091|
|[express](https://github.com/expressjs/express)|5991|6254|5389|6329|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59096|57948|61401|57940|
|[elysia](https://github.com/elysiajs/elysia)|58976|57744|58763|60422|
|[nhttp](https://github.com/nhttp/nhttp)|58173|58972|58951|56597|
|[baojs](https://github.com/mattreid1/baojs)|42894|49314|32830|46537|
  



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


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
Created At : Sun Jun 15 2025, 1:08:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60856|67043|60035|55490|
|[nhttp](https://github.com/nhttp/nhttp)|59845|65662|61036|52836|
|[fast](https://github.com/danteissaias/fast)|52337|61153|44399|51460|
|[oak](https://github.com/oakserver/oak)|28692|30128|28536|27413|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38569|46716|36604|32386|
|[fastify](https://github.com/fastify/fastify)|24505|23403|26981|23131|
|[koa](https://github.com/koajs/koa)|17264|17427|17763|16601|
|[express](https://github.com/expressjs/express)|6444|6598|6133|6600|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|84301|98383|77444|77077|
|[nhttp](https://github.com/nhttp/nhttp)|67868|87889|56529|59187|
|[hono](https://github.com/honojs/hono)|61597|67900|57111|59780|
|[baojs](https://github.com/mattreid1/baojs)|48827|53938|46796|45748|
  



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


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
Created At : Sun Oct 29 2023, 12:38:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59138|64326|60600|52489|
|[nhttp](https://github.com/nhttp/nhttp)|59039|61215|60231|55671|
|[fast](https://github.com/danteissaias/fast)|54796|64368|49903|50116|
|[fastro](https://github.com/fastrodev/fastro)|25520|62805|6736|7020|
|[oak](https://github.com/oakserver/oak)|18195|19088|18083|17414|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39943|43113|39711|37006|
|[fastify](https://github.com/fastify/fastify)|28890|30309|29133|27228|
|[koa](https://github.com/koajs/koa)|19048|20050|17667|19428|
|[express](https://github.com/expressjs/express)|6245|6456|5692|6586|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|57976|55225|59746|58956|
|[hono](https://github.com/honojs/hono)|57610|55213|56101|61517|
|[elysia](https://github.com/elysiajs/elysia)|55626|54029|51290|61559|
|[baojs](https://github.com/mattreid1/baojs)|48903|54507|41366|50837|
  



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


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
Created At : Fri Apr 18 2025, 12:57:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59558|66244|60255|52176|
|[hono](https://github.com/honojs/hono)|58800|68288|57470|50643|
|[fast](https://github.com/danteissaias/fast)|56822|69102|44439|56926|
|[oak](https://github.com/oakserver/oak)|28439|28484|28169|28664|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37207|44932|33021|33668|
|[fastify](https://github.com/fastify/fastify)|24554|25857|25193|22611|
|[koa](https://github.com/koajs/koa)|16814|17355|15866|17221|
|[express](https://github.com/expressjs/express)|6502|6627|6279|6600|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74525|83441|74949|65184|
|[nhttp](https://github.com/nhttp/nhttp)|68192|87621|59077|57878|
|[hono](https://github.com/honojs/hono)|62302|68397|60736|57773|
|[baojs](https://github.com/mattreid1/baojs)|48943|54122|43741|48966|
  



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


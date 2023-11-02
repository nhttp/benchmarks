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
Created At : Thu Nov 02 2023, 12:36:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|67365|71123|68242|62729|
|[hono](https://github.com/honojs/hono)|65519|71339|67801|57416|
|[fast](https://github.com/danteissaias/fast)|57976|68642|59307|45978|
|[fastro](https://github.com/fastrodev/fastro)|28885|72156|7182|7318|
|[oak](https://github.com/oakserver/oak)|20163|21293|20070|19127|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45065|48579|44546|42069|
|[fastify](https://github.com/fastify/fastify)|34580|35148|34863|33730|
|[koa](https://github.com/koajs/koa)|22816|24445|21194|22809|
|[express](https://github.com/expressjs/express)|7566|7777|7247|7674|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64122|61286|64717|66362|
|[hono](https://github.com/honojs/hono)|62237|60405|58062|68245|
|[elysia](https://github.com/elysiajs/elysia)|59407|61596|59110|57516|
|[baojs](https://github.com/mattreid1/baojs)|55515|60670|54066|51809|
  



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


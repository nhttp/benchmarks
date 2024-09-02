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
Created At : Mon Sep 02 2024, 12:47:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48747|52939|49423|43880|
|[nhttp](https://github.com/nhttp/nhttp)|48588|53243|47868|44653|
|[fast](https://github.com/danteissaias/fast)|47943|52288|45707|45833|
|[oak](https://github.com/oakserver/oak)|26370|27254|25856|26001|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24846|30612|22911|21014|
|[fastify](https://github.com/fastify/fastify)|16969|17457|16833|16616|
|[koa](https://github.com/koajs/koa)|13967|14657|13140|14105|
|[express](https://github.com/expressjs/express)|6465|6608|6165|6621|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73473|80615|79174|60630|
|[nhttp](https://github.com/nhttp/nhttp)|67391|82237|54429|65507|
|[hono](https://github.com/honojs/hono)|66362|76892|57652|64541|
|[baojs](https://github.com/mattreid1/baojs)|38951|44753|38663|33438|
  



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


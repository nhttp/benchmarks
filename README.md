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
Created At : Sat Dec 30 2023, 12:36:43 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45550|48459|44527|43665|
|[fast](https://github.com/danteissaias/fast)|45057|48238|42750|44183|
|[hono](https://github.com/honojs/hono)|43668|46328|44239|40438|
|[fastro](https://github.com/fastrodev/fastro)|23317|48083|11186|10682|
|[oak](https://github.com/oakserver/oak)|19464|20660|19604|18127|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25099|31178|22891|21227|
|[fastify](https://github.com/fastify/fastify)|15257|15504|15193|15075|
|[koa](https://github.com/koajs/koa)|14003|14335|13328|14345|
|[express](https://github.com/expressjs/express)|6210|6365|5905|6361|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|71603|81656|73768|59384|
|[hono](https://github.com/honojs/hono)|59259|72038|57438|48300|
|[nhttp](https://github.com/nhttp/nhttp)|55277|78719|49062|38051|
|[baojs](https://github.com/mattreid1/baojs)|40229|49872|37186|33629|
  



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


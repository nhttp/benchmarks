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
Created At : Thu Oct 31 2024, 12:51:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|50050|55255|49314|45581|
|[hono](https://github.com/honojs/hono)|48840|51936|49676|44907|
|[fast](https://github.com/danteissaias/fast)|48237|54813|44309|45589|
|[oak](https://github.com/oakserver/oak)|25867|26911|25461|25230|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24179|29269|22550|20717|
|[fastify](https://github.com/fastify/fastify)|17205|17578|17148|16889|
|[koa](https://github.com/koajs/koa)|14155|14757|13224|14483|
|[express](https://github.com/expressjs/express)|6358|6479|6045|6550|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67965|78495|75623|49778|
|[nhttp](https://github.com/nhttp/nhttp)|54087|75027|43648|43586|
|[hono](https://github.com/honojs/hono)|51456|66550|45695|42124|
|[baojs](https://github.com/mattreid1/baojs)|35963|42285|36260|29345|
  



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


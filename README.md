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
Created At : Mon Mar 04 2024, 12:37:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48865|52250|47668|46676|
|[fast](https://github.com/danteissaias/fast)|48067|51586|45251|47363|
|[hono](https://github.com/honojs/hono)|47485|49933|48394|44128|
|[oak](https://github.com/oakserver/oak)|27728|29297|27826|26062|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25640|32673|22832|21415|
|[fastify](https://github.com/fastify/fastify)|16689|17038|16655|16375|
|[koa](https://github.com/koajs/koa)|14414|15293|13462|14486|
|[express](https://github.com/expressjs/express)|6334|6490|6036|6475|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76460|85829|80751|62801|
|[hono](https://github.com/honojs/hono)|65765|76259|61972|59065|
|[nhttp](https://github.com/nhttp/nhttp)|64790|88222|53498|52651|
|[baojs](https://github.com/mattreid1/baojs)|36588|40008|37350|32407|
  



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


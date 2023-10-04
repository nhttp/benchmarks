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
Created At : Wed Oct 04 2023, 12:36:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58239|57775|60678|56263|
|[hono](https://github.com/honojs/hono)|54514|58904|56018|48621|
|[fast](https://github.com/danteissaias/fast)|48308|61103|51586|32236|
|[fastro](https://github.com/fastrodev/fastro)|22412|54152|6711|6374|
|[oak](https://github.com/oakserver/oak)|17091|18034|17413|15827|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36981|39967|36571|34406|
|[fastify](https://github.com/fastify/fastify)|27511|28828|27181|26523|
|[koa](https://github.com/koajs/koa)|17965|18941|16670|18283|
|[express](https://github.com/expressjs/express)|5896|6084|5469|6135|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|55945|50675|58907|58253|
|[nhttp](https://github.com/nhttp/nhttp)|55662|53092|56933|56960|
|[elysia](https://github.com/elysiajs/elysia)|55443|55243|52667|58418|
|[baojs](https://github.com/mattreid1/baojs)|44792|51126|45487|37763|
  



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


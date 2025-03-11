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
Created At : Tue Mar 11 2025, 12:53:22 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58796|59244|59280|57865|
|[hono](https://github.com/honojs/hono)|55684|59724|56158|51171|
|[fast](https://github.com/danteissaias/fast)|55221|66235|48032|51396|
|[oak](https://github.com/oakserver/oak)|27247|28242|26489|27009|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39328|46874|35842|35267|
|[fastify](https://github.com/fastify/fastify)|23886|23817|24640|23202|
|[koa](https://github.com/koajs/koa)|16869|17790|15739|17077|
|[express](https://github.com/expressjs/express)|6964|7112|6575|7206|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|77297|92184|75419|64289|
|[nhttp](https://github.com/nhttp/nhttp)|71326|89008|64826|60143|
|[hono](https://github.com/honojs/hono)|64226|70041|60625|62011|
|[baojs](https://github.com/mattreid1/baojs)|46336|53472|42873|42663|
  



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


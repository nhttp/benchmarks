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
Created At : Fri Dec 20 2024, 12:50:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48698|51649|48377|46068|
|[hono](https://github.com/honojs/hono)|48276|52376|48618|43834|
|[fast](https://github.com/danteissaias/fast)|47811|51802|45087|46544|
|[oak](https://github.com/oakserver/oak)|26151|27032|25720|25700|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24582|31214|22699|19833|
|[fastify](https://github.com/fastify/fastify)|17160|17509|17065|16907|
|[koa](https://github.com/koajs/koa)|14400|15265|13458|14477|
|[express](https://github.com/expressjs/express)|6385|6526|5975|6653|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76587|80820|80766|68175|
|[hono](https://github.com/honojs/hono)|60932|69464|59206|54127|
|[nhttp](https://github.com/nhttp/nhttp)|60478|84328|48132|48973|
|[baojs](https://github.com/mattreid1/baojs)|37262|42858|36133|32794|
  



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


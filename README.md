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
Created At : Sat Jul 13 2024, 12:42:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46137|49481|45338|43591|
|[hono](https://github.com/honojs/hono)|46056|48592|47288|42288|
|[fast](https://github.com/danteissaias/fast)|45481|48787|44084|43572|
|[oak](https://github.com/oakserver/oak)|25863|26882|25184|25524|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24438|30387|22803|20123|
|[fastify](https://github.com/fastify/fastify)|17304|17611|17348|16953|
|[koa](https://github.com/koajs/koa)|14570|15409|13721|14581|
|[express](https://github.com/expressjs/express)|6423|6606|6023|6639|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63837|83716|66661|41133|
|[hono](https://github.com/honojs/hono)|56502|68769|54259|46479|
|[nhttp](https://github.com/nhttp/nhttp)|52954|80661|39927|38274|
|[baojs](https://github.com/mattreid1/baojs)|32469|36259|33370|27778|
  



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


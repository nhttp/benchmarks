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
Created At : Mon Apr 07 2025, 12:56:31 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57326|64414|56256|51307|
|[nhttp](https://github.com/nhttp/nhttp)|54771|61013|52269|51030|
|[fast](https://github.com/danteissaias/fast)|52875|63710|47389|47527|
|[oak](https://github.com/oakserver/oak)|28502|29348|28661|27496|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|37528|44842|34936|32806|
|[fastify](https://github.com/fastify/fastify)|24410|24116|25487|23628|
|[koa](https://github.com/koajs/koa)|17168|17899|16156|17448|
|[express](https://github.com/expressjs/express)|6669|6763|6489|6756|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76291|88625|73966|66282|
|[nhttp](https://github.com/nhttp/nhttp)|67443|84542|59480|58307|
|[hono](https://github.com/honojs/hono)|64705|73009|60626|60480|
|[baojs](https://github.com/mattreid1/baojs)|46747|49755|44995|45490|
  



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


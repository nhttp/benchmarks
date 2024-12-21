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
Created At : Sat Dec 21 2024, 12:49:55 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48371|51778|47697|45637|
|[hono](https://github.com/honojs/hono)|48237|51346|48855|44510|
|[fast](https://github.com/danteissaias/fast)|47921|53158|45022|45582|
|[oak](https://github.com/oakserver/oak)|26281|27073|25622|26148|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25130|31883|22850|20656|
|[fastify](https://github.com/fastify/fastify)|16998|17456|16796|16743|
|[koa](https://github.com/koajs/koa)|14282|15269|13473|14103|
|[express](https://github.com/expressjs/express)|6386|6576|5962|6621|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73159|79231|79775|60471|
|[nhttp](https://github.com/nhttp/nhttp)|63045|85419|45555|58162|
|[hono](https://github.com/honojs/hono)|57635|73643|51006|48256|
|[baojs](https://github.com/mattreid1/baojs)|34722|39545|31561|33061|
  



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


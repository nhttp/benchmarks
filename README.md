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
Created At : Fri Aug 30 2024, 12:45:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48503|52754|47954|44802|
|[hono](https://github.com/honojs/hono)|48205|52156|48395|44065|
|[fast](https://github.com/danteissaias/fast)|47650|51744|45503|45703|
|[oak](https://github.com/oakserver/oak)|26805|27936|26141|26339|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24483|31094|22237|20119|
|[fastify](https://github.com/fastify/fastify)|16347|16581|16101|16359|
|[koa](https://github.com/koajs/koa)|14019|14922|13082|14052|
|[express](https://github.com/expressjs/express)|6323|6490|6062|6416|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73516|82608|77584|60356|
|[hono](https://github.com/honojs/hono)|62258|71365|57356|58053|
|[nhttp](https://github.com/nhttp/nhttp)|61059|78589|51152|53437|
|[baojs](https://github.com/mattreid1/baojs)|38331|44994|37794|32204|
  



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


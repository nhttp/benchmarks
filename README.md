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
Created At : Thu Dec 19 2024, 12:53:27 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47893|52035|46729|44916|
|[hono](https://github.com/honojs/hono)|47365|50244|48536|43316|
|[fast](https://github.com/danteissaias/fast)|46467|50184|44500|44717|
|[oak](https://github.com/oakserver/oak)|25716|26690|25259|25199|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23182|28417|21766|19364|
|[fastify](https://github.com/fastify/fastify)|16432|16744|16326|16226|
|[koa](https://github.com/koajs/koa)|13509|14068|12969|13489|
|[express](https://github.com/expressjs/express)|6294|6494|5903|6485|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|72084|83831|74081|58340|
|[nhttp](https://github.com/nhttp/nhttp)|54580|77843|40425|45472|
|[hono](https://github.com/honojs/hono)|51409|65922|45581|42725|
|[baojs](https://github.com/mattreid1/baojs)|34805|40524|35383|28508|
  



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


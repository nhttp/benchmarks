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
Created At : Sat Sep 28 2024, 12:49:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47459|50732|47483|44162|
|[hono](https://github.com/honojs/hono)|47234|50451|48157|43094|
|[fast](https://github.com/danteissaias/fast)|46779|50165|45484|44688|
|[oak](https://github.com/oakserver/oak)|25723|26643|25240|25287|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24610|30612|22497|20722|
|[fastify](https://github.com/fastify/fastify)|16923|17317|16689|16763|
|[koa](https://github.com/koajs/koa)|13333|14298|12359|13343|
|[express](https://github.com/expressjs/express)|6122|6310|5742|6315|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|62214|80793|62126|43723|
|[nhttp](https://github.com/nhttp/nhttp)|58261|81614|45820|47349|
|[hono](https://github.com/honojs/hono)|48971|61539|44936|40438|
|[baojs](https://github.com/mattreid1/baojs)|34115|38014|30327|34003|
  



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


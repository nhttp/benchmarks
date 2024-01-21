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
Created At : Sun Jan 21 2024, 12:42:37 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48595|52855|47025|45906|
|[fast](https://github.com/danteissaias/fast)|47646|51467|44639|46833|
|[hono](https://github.com/honojs/hono)|46837|49903|47148|43460|
|[fastro](https://github.com/fastrodev/fastro)|24740|50422|12169|11630|
|[oak](https://github.com/oakserver/oak)|22399|23630|22385|21182|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24889|31141|22866|20661|
|[fastify](https://github.com/fastify/fastify)|16970|17228|16647|17035|
|[koa](https://github.com/koajs/koa)|14235|15140|13404|14160|
|[express](https://github.com/expressjs/express)|6412|6484|6184|6569|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74758|84394|77077|62802|
|[hono](https://github.com/honojs/hono)|60945|71718|58121|52995|
|[nhttp](https://github.com/nhttp/nhttp)|47505|60607|43542|38365|
|[baojs](https://github.com/mattreid1/baojs)|36887|42799|35889|31972|
  



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


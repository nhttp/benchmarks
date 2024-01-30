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
Created At : Tue Jan 30 2024, 12:36:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47911|51089|46422|46221|
|[fast](https://github.com/danteissaias/fast)|47204|50139|43370|48104|
|[hono](https://github.com/honojs/hono)|46695|49490|46965|43631|
|[oak](https://github.com/oakserver/oak)|27052|28512|26812|25833|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25059|31434|23190|20553|
|[fastify](https://github.com/fastify/fastify)|16737|17012|16743|16455|
|[koa](https://github.com/koajs/koa)|14220|15120|13228|14312|
|[express](https://github.com/expressjs/express)|6371|6455|6139|6518|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76513|82083|81252|66205|
|[hono](https://github.com/honojs/hono)|64468|76971|59695|56739|
|[nhttp](https://github.com/nhttp/nhttp)|61885|83018|59825|42811|
|[baojs](https://github.com/mattreid1/baojs)|36266|40289|32905|35605|
  



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


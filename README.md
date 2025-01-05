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
Created At : Sun Jan 05 2025, 12:55:04 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47651|51927|44180|46845|
|[nhttp](https://github.com/nhttp/nhttp)|47370|51836|46232|44043|
|[hono](https://github.com/honojs/hono)|46718|50368|47180|42605|
|[oak](https://github.com/oakserver/oak)|25669|26450|25063|25495|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25237|32108|23029|20574|
|[fastify](https://github.com/fastify/fastify)|16854|17390|16635|16536|
|[koa](https://github.com/koajs/koa)|14444|15490|13353|14490|
|[express](https://github.com/expressjs/express)|6280|6447|5878|6516|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76572|82032|77080|70604|
|[nhttp](https://github.com/nhttp/nhttp)|63871|80717|48510|62386|
|[hono](https://github.com/honojs/hono)|58669|75360|50157|50489|
|[baojs](https://github.com/mattreid1/baojs)|35097|39845|32651|32796|
  



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


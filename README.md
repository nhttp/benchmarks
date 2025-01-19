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
Created At : Sun Jan 19 2025, 12:53:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|59079|62431|64721|50085|
|[nhttp](https://github.com/nhttp/nhttp)|56797|66498|53740|50154|
|[fast](https://github.com/danteissaias/fast)|52341|57931|44572|54519|
|[oak](https://github.com/oakserver/oak)|28136|29419|28400|26589|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38985|44144|37276|35534|
|[fastify](https://github.com/fastify/fastify)|23605|23791|23850|23173|
|[koa](https://github.com/koajs/koa)|16975|17654|15803|17468|
|[express](https://github.com/expressjs/express)|6895|7151|6305|7230|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78672|89084|80872|66061|
|[nhttp](https://github.com/nhttp/nhttp)|71751|88857|62731|63664|
|[hono](https://github.com/honojs/hono)|65934|74379|62348|61074|
|[baojs](https://github.com/mattreid1/baojs)|49398|51870|49775|46549|
  



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


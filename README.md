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
Created At : Fri Jun 20 2025, 1:02:54 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59986|65596|57204|57157|
|[hono](https://github.com/honojs/hono)|59672|66067|62979|49969|
|[fast](https://github.com/danteissaias/fast)|52912|60613|50737|47385|
|[oak](https://github.com/oakserver/oak)|27927|27847|28298|27636|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40557|48748|38375|34548|
|[fastify](https://github.com/fastify/fastify)|25670|28482|23147|25380|
|[koa](https://github.com/koajs/koa)|16734|17267|16291|16645|
|[express](https://github.com/expressjs/express)|6412|6469|6079|6687|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82728|87196|80157|80832|
|[nhttp](https://github.com/nhttp/nhttp)|71498|97739|59017|57737|
|[hono](https://github.com/honojs/hono)|63647|70394|61703|58845|
|[baojs](https://github.com/mattreid1/baojs)|47816|51777|43259|48411|
  



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


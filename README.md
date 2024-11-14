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
Created At : Thu Nov 14 2024, 12:49:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47800|51598|47296|44505|
|[hono](https://github.com/honojs/hono)|47323|50739|47803|43428|
|[fast](https://github.com/danteissaias/fast)|47282|51396|44130|46321|
|[oak](https://github.com/oakserver/oak)|26470|27401|26059|25950|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23782|29509|21614|20224|
|[fastify](https://github.com/fastify/fastify)|16964|17396|16657|16839|
|[koa](https://github.com/koajs/koa)|13965|15022|12936|13937|
|[express](https://github.com/expressjs/express)|6329|6587|5910|6489|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78257|86115|80629|68026|
|[nhttp](https://github.com/nhttp/nhttp)|62486|84347|51633|51477|
|[hono](https://github.com/honojs/hono)|59264|72353|52341|53098|
|[baojs](https://github.com/mattreid1/baojs)|36136|42832|34742|30834|
  



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


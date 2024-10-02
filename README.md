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
Created At : Wed Oct 02 2024, 12:49:46 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|47951|51872|47782|44199|
|[hono](https://github.com/honojs/hono)|47505|51059|48333|43122|
|[fast](https://github.com/danteissaias/fast)|46711|50712|43668|45752|
|[oak](https://github.com/oakserver/oak)|25707|26525|25276|25319|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25106|32390|22558|20369|
|[fastify](https://github.com/fastify/fastify)|16870|17177|16875|16558|
|[koa](https://github.com/koajs/koa)|13456|14249|12690|13429|
|[express](https://github.com/expressjs/express)|6146|6292|5885|6262|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|63878|82563|67948|41122|
|[nhttp](https://github.com/nhttp/nhttp)|54853|82543|43345|38670|
|[hono](https://github.com/honojs/hono)|50701|64082|42211|45811|
|[baojs](https://github.com/mattreid1/baojs)|34464|36562|36884|29945|
  



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


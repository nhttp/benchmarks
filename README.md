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
Created At : Sat Feb 17 2024, 12:35:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|47853|51916|43380|48262|
|[nhttp](https://github.com/nhttp/nhttp)|47705|51251|46371|45493|
|[hono](https://github.com/honojs/hono)|46473|49495|46641|43284|
|[oak](https://github.com/oakserver/oak)|27423|28818|27488|25964|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25020|32037|22829|20194|
|[fastify](https://github.com/fastify/fastify)|16135|16822|15651|15933|
|[koa](https://github.com/koajs/koa)|14521|15141|13759|14664|
|[express](https://github.com/expressjs/express)|6386|6537|6124|6496|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|73053|84639|69288|65231|
|[hono](https://github.com/honojs/hono)|64142|72846|65604|53975|
|[nhttp](https://github.com/nhttp/nhttp)|63099|82979|54325|51993|
|[baojs](https://github.com/mattreid1/baojs)|37551|46232|32970|33450|
  



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


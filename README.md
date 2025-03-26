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
Created At : Wed Mar 26 2025, 12:54:00 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58965|64735|61665|50495|
|[fast](https://github.com/danteissaias/fast)|55939|65131|48008|54677|
|[nhttp](https://github.com/nhttp/nhttp)|55146|61914|55079|48444|
|[oak](https://github.com/oakserver/oak)|28735|29877|28033|28296|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39731|44874|39986|34333|
|[fastify](https://github.com/fastify/fastify)|26486|27444|27581|24433|
|[koa](https://github.com/koajs/koa)|16915|18030|15528|17188|
|[express](https://github.com/expressjs/express)|6994|7098|6526|7357|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|78910|87995|79965|68771|
|[nhttp](https://github.com/nhttp/nhttp)|70060|93098|58270|58812|
|[hono](https://github.com/honojs/hono)|64944|72505|60574|61754|
|[baojs](https://github.com/mattreid1/baojs)|48612|51071|46723|48043|
  



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


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
Created At : Thu Jan 30 2025, 12:47:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|60313|68366|56254|56319|
|[fast](https://github.com/danteissaias/fast)|54855|62303|50391|51872|
|[hono](https://github.com/honojs/hono)|54476|57764|58821|46842|
|[oak](https://github.com/oakserver/oak)|28347|29568|26476|28998|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41026|48814|37571|36692|
|[fastify](https://github.com/fastify/fastify)|24532|25763|24731|23102|
|[koa](https://github.com/koajs/koa)|16853|17420|16143|16996|
|[express](https://github.com/expressjs/express)|7030|7350|6432|7307|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80525|95577|77428|68569|
|[nhttp](https://github.com/nhttp/nhttp)|73752|92182|65635|63440|
|[hono](https://github.com/honojs/hono)|67709|77759|62182|63185|
|[baojs](https://github.com/mattreid1/baojs)|49203|51856|47731|48022|
  



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


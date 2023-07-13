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
Created At : Thu Jul 13 2023, 12:57:32 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|51083|55497|49481|48272|
|[hono](https://github.com/honojs/hono)|45062|53810|37104|44273|
|[oak](https://github.com/oakserver/oak)|14987|15858|14783|14319|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|31988|34971|31359|29633|
|[fastify](https://github.com/fastify/fastify)|24778|26429|24959|22945|
|[koa](https://github.com/koajs/koa)|16196|17089|15192|16308|
|[express](https://github.com/expressjs/express)|5508|5723|5033|5769|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59224|57065|61827|58780|
|[hono](https://github.com/honojs/hono)|57573|56065|57768|58885|
|[elysia](https://github.com/elysiajs/elysia)|57192|55639|57027|58910|
|[baojs](https://github.com/mattreid1/baojs)|45497|50763|42700|43027|
  



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


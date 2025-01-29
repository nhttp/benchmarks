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
Created At : Wed Jan 29 2025, 12:49:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|58159|64218|57783|52475|
|[nhttp](https://github.com/nhttp/nhttp)|57070|64689|54166|52356|
|[fast](https://github.com/danteissaias/fast)|54101|66343|43746|52213|
|[oak](https://github.com/oakserver/oak)|28386|29833|27861|27463|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38797|44724|37099|34569|
|[fastify](https://github.com/fastify/fastify)|24456|24624|25482|23261|
|[koa](https://github.com/koajs/koa)|16839|17754|15641|17123|
|[express](https://github.com/expressjs/express)|6742|6962|6155|7108|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80746|92011|82950|67278|
|[nhttp](https://github.com/nhttp/nhttp)|69614|90159|56165|62517|
|[hono](https://github.com/honojs/hono)|65942|73112|61618|63096|
|[baojs](https://github.com/mattreid1/baojs)|49197|53241|43874|50476|
  



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


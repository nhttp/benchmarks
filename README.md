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
Created At : Thu May 15 2025, 12:58:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58623|65691|56122|54055|
|[hono](https://github.com/honojs/hono)|58045|63380|59872|50883|
|[fast](https://github.com/danteissaias/fast)|55541|63975|45046|57601|
|[oak](https://github.com/oakserver/oak)|28050|28811|27981|27359|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40039|46441|39608|34067|
|[fastify](https://github.com/fastify/fastify)|26710|27126|27919|25084|
|[koa](https://github.com/koajs/koa)|17156|17954|17125|16388|
|[express](https://github.com/expressjs/express)|6518|6556|6290|6707|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|84688|85722|81694|86649|
|[nhttp](https://github.com/nhttp/nhttp)|72912|95635|62364|60736|
|[hono](https://github.com/honojs/hono)|68029|78708|64964|60414|
|[baojs](https://github.com/mattreid1/baojs)|51318|56690|45201|52063|
  



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


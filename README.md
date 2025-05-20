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
Created At : Tue May 20 2025, 1:01:52 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59473|64342|58252|55824|
|[hono](https://github.com/honojs/hono)|57411|64770|56731|50731|
|[fast](https://github.com/danteissaias/fast)|55148|65885|47756|51804|
|[oak](https://github.com/oakserver/oak)|28115|29282|27113|27949|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|38909|45761|37098|33868|
|[fastify](https://github.com/fastify/fastify)|24778|24833|27386|22114|
|[koa](https://github.com/koajs/koa)|16800|17222|16669|16508|
|[express](https://github.com/expressjs/express)|6453|6438|6316|6605|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83575|91335|75198|84193|
|[nhttp](https://github.com/nhttp/nhttp)|66684|88562|57778|53711|
|[hono](https://github.com/honojs/hono)|60012|69847|58251|51937|
|[baojs](https://github.com/mattreid1/baojs)|44720|49513|41388|43259|
  



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


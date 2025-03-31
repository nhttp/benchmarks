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
Created At : Mon Mar 31 2025, 12:57:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|57326|64154|60754|47071|
|[nhttp](https://github.com/nhttp/nhttp)|56689|64316|57101|48650|
|[fast](https://github.com/danteissaias/fast)|56189|68679|44097|55790|
|[oak](https://github.com/oakserver/oak)|28104|29274|26804|28234|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|39317|44858|38324|34768|
|[fastify](https://github.com/fastify/fastify)|25696|27263|26215|23610|
|[koa](https://github.com/koajs/koa)|17002|18718|15983|16304|
|[express](https://github.com/expressjs/express)|6945|7116|6504|7216|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|76567|90813|76843|62046|
|[nhttp](https://github.com/nhttp/nhttp)|67098|82509|61025|57759|
|[hono](https://github.com/honojs/hono)|63937|76509|59113|56188|
|[baojs](https://github.com/mattreid1/baojs)|49422|54241|46557|47467|
  



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


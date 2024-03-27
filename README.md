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
Created At : Wed Mar 27 2024, 12:36:36 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48584|52932|47051|45770|
|[fast](https://github.com/danteissaias/fast)|48515|51442|45227|48877|
|[hono](https://github.com/honojs/hono)|48323|52145|48456|44367|
|[oak](https://github.com/oakserver/oak)|27694|29357|27775|25951|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24637|30996|22899|20015|
|[fastify](https://github.com/fastify/fastify)|17225|17564|17249|16861|
|[koa](https://github.com/koajs/koa)|14642|15524|13697|14705|
|[express](https://github.com/expressjs/express)|6381|6473|6148|6521|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|75854|86385|72951|68227|
|[nhttp](https://github.com/nhttp/nhttp)|63157|86631|53266|49575|
|[hono](https://github.com/honojs/hono)|57483|65305|54659|52486|
|[baojs](https://github.com/mattreid1/baojs)|35780|40284|34564|32492|
  



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


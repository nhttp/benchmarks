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
Created At : Sat Jul 01 2023, 12:56:34 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45543|48450|45401|42778|
|[hono](https://github.com/honojs/hono)|43727|46733|45525|38922|
|[fastro](https://github.com/fastrodev/fastro)|36239|48764|30367|29587|
|[oak](https://github.com/oakserver/oak)|14307|15011|14484|13427|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|23197|23271|23822|22498|
|[nhttp](https://github.com/nhttp/nhttp)|16149|15773|15739|16935|
|[koa](https://github.com/koajs/koa)|13438|14024|12770|13519|
|[express](https://github.com/expressjs/express)|4955|5202|4758|4905|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|52458|49311|53413|54651|
|[elysia](https://github.com/elysiajs/elysia)|51645|50077|52206|52653|
|[nhttp](https://github.com/nhttp/nhttp)|51454|51999|51556|50808|
|[baojs](https://github.com/mattreid1/baojs)|40289|45040|32255|43571|
  



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


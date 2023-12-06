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
Created At : Wed Dec 06 2023, 12:38:53 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|46133|49381|45118|43901|
|[hono](https://github.com/honojs/hono)|43969|46774|44220|40913|
|[fastro](https://github.com/fastrodev/fastro)|23540|49081|11108|10432|
|[oak](https://github.com/oakserver/oak)|20826|21455|20774|20250|
|[fast](https://github.com/danteissaias/fast)|13952|0|0|41856|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|27257|33669|24951|23150|
|[fastify](https://github.com/fastify/fastify)|15890|16165|15907|15598|
|[koa](https://github.com/koajs/koa)|14397|14954|13562|14675|
|[express](https://github.com/expressjs/express)|6367|6564|6077|6459|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74959|79349|79124|66404|
|[nhttp](https://github.com/nhttp/nhttp)|70290|80764|68971|61135|
|[hono](https://github.com/honojs/hono)|61759|73875|57556|53846|
|[baojs](https://github.com/mattreid1/baojs)|35304|38738|36014|31159|
  



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


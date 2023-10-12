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
Created At : Thu Oct 12 2023, 12:34:15 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|65641|66841|68269|61812|
|[hono](https://github.com/honojs/hono)|62251|67750|63883|55120|
|[fast](https://github.com/danteissaias/fast)|58055|69432|53480|51254|
|[fastro](https://github.com/fastrodev/fastro)|28410|70351|7675|7204|
|[oak](https://github.com/oakserver/oak)|19242|19908|19337|18481|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43490|47139|42545|40785|
|[fastify](https://github.com/fastify/fastify)|32971|34201|32711|32001|
|[koa](https://github.com/koajs/koa)|20754|21624|19568|21070|
|[express](https://github.com/expressjs/express)|7251|7299|6893|7562|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|60336|59138|56019|65850|
|[nhttp](https://github.com/nhttp/nhttp)|59804|60236|59870|59307|
|[elysia](https://github.com/elysiajs/elysia)|57167|58403|56652|56446|
|[baojs](https://github.com/mattreid1/baojs)|50875|58122|43260|51243|
  



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


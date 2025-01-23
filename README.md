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
Created At : Thu Jan 23 2025, 12:49:24 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|58295|68069|56300|50516|
|[hono](https://github.com/honojs/hono)|55962|60139|58505|49242|
|[fast](https://github.com/danteissaias/fast)|53594|61445|43156|56182|
|[oak](https://github.com/oakserver/oak)|29156|29818|28291|29359|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40402|46362|38626|36217|
|[fastify](https://github.com/fastify/fastify)|24614|23969|26380|23494|
|[koa](https://github.com/koajs/koa)|17346|18418|16188|17432|
|[express](https://github.com/expressjs/express)|7086|7346|6573|7338|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|82171|97427|78290|70795|
|[nhttp](https://github.com/nhttp/nhttp)|70138|93588|57058|59768|
|[hono](https://github.com/honojs/hono)|67075|76066|64736|60424|
|[baojs](https://github.com/mattreid1/baojs)|50664|56446|46439|49106|
  



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


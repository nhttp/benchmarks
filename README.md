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
Created At : Thu Sep 14 2023, 12:35:18 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64790|71677|62542|60152|
|[fast](https://github.com/danteissaias/fast)|57322|68100|43832|60034|
|[hono](https://github.com/honojs/hono)|38768|0|60518|55785|
|[fastro](https://github.com/fastrodev/fastro)|25678|64321|6267|6447|
|[oak](https://github.com/oakserver/oak)|18794|19315|19038|18028|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45629|49256|45205|42427|
|[fastify](https://github.com/fastify/fastify)|34737|36150|34519|33541|
|[koa](https://github.com/koajs/koa)|21826|23056|20303|22120|
|[express](https://github.com/expressjs/express)|7537|7814|6866|7932|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|70425|69908|70174|71192|
|[elysia](https://github.com/elysiajs/elysia)|69460|67946|67929|72504|
|[nhttp](https://github.com/nhttp/nhttp)|68863|69950|68967|67671|
|[baojs](https://github.com/mattreid1/baojs)|50390|57040|41689|52442|
  



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


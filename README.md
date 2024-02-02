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
Created At : Fri Feb 02 2024, 12:36:47 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fast](https://github.com/danteissaias/fast)|48010|51152|44097|48781|
|[nhttp](https://github.com/nhttp/nhttp)|47346|50311|46439|45288|
|[hono](https://github.com/honojs/hono)|45910|48552|46722|42455|
|[oak](https://github.com/oakserver/oak)|27385|28743|27417|25996|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24818|32175|22512|19767|
|[fastify](https://github.com/fastify/fastify)|16400|17024|15911|16264|
|[koa](https://github.com/koajs/koa)|14679|15311|13882|14844|
|[express](https://github.com/expressjs/express)|6445|6619|6106|6611|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|74521|83977|80001|59585|
|[hono](https://github.com/honojs/hono)|63442|77653|59567|53107|
|[nhttp](https://github.com/nhttp/nhttp)|62032|85860|56382|43855|
|[baojs](https://github.com/mattreid1/baojs)|34508|39797|32937|30789|
  



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

